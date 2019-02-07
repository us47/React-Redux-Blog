import { FETCH_BLOGS, NEW_BLOG } from '../Actions/types';

const initialState = {
  blogs: [],
  blog: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_BLOGS:
      console.log(action.payload);
      console.log("Fetch blog");
      console.log(action.payload);
      return Object.assign({}, state, {blogs: action.payload})
      
    case NEW_BLOG:
      console.log("New_Blog");
      console.log({...state});
      console.log(action.payload);
      console.log(Object.assign({}, state, {blog: action.payload, blogs:state.blogs.push(action.payload)}));
      return Object.assign({}, state, {blog: action.payload, blogs:[...state.blogs, action.payload]})
     
    default:
      return state;
  }
}