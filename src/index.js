import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import BlogCard from './Components/BlogCard';
import { Provider } from 'react-redux';
import store from './Store/store';
import ButtonAppBar from './Common/AppBar';
import PostBlogUrl from './Components/PostBlogUrl';
import CustomizedTabs from './Components/CustomizedTabs'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <PostBlogUrl />
          <CustomizedTabs />
          <BlogCard />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
