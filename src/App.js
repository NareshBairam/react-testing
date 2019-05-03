import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/index';
import Headline from './components/headline/index';

import SharedButton from './components/button/index';
import ListItem from './components/listItem/index';

import { fetchPosts } from './actions/index';

const tempArr = [{
  name: 'Jeo',
  age: 26,
  online: true
}]

class App extends Component {

  constructor(props) {
    super(props);
  }

  fetch = () => {
    this.props.fetchPosts();
  }

  render() {

    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App"  data-test="appComponent">
        <Header />
        <Headline header={'Posts'} desc='Click the button to see the posts' tempArr={tempArr} />
        <SharedButton {...configButton} />
        {posts.length > 0 &&
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              }
              return (
                <ListItem key={index} {...configListItem} />
              )
            })}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
