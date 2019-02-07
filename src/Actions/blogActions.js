import { FETCH_BLOGS, NEW_BLOG } from './types';
import blogCardApi from '../api/mockBlogCardApi'; 

export const getBlogCards = () => dispatch => {
  blogCardApi.getAllBlogCards().then(blogs => dispatch({
    type: FETCH_BLOGS,
    payload: blogs
  }));
}

export const addBlogCard = (blogUrl) => dispatch =>{
  console.log("New_blog: Action");
  blogCardApi.AddBlogCard(blogUrl).then(blog => dispatch({
    type: NEW_BLOG,
    payload: blog
  }));
}