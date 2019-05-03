import moxios from 'moxios';
import { testStore } from '../../Utils';
import { fetchPosts } from '../actions';


describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    });


    afterEach(() => {
        moxios.uninstall();
    });


    it('should is updated correctly', (done) => {
        const expectedState = [
            {
                title: 'Title1',
                body: 'Some Text1'
            },
            {
                title: 'Title2',
                body: 'Some Text2'
            },
            {
                title: 'Title3',
                body: 'Some Text3'
            }
        ];

        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
                done();
            }).catch((err) => {
                console.log("Error " + err);
                done();
            });
    });
});
