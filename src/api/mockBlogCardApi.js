import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var blogCardData=[
  {
    title:"A Tricky JavaScript Interview Question Asked by Google and Amazon",

thumbnail:"https://cdn-images-1.medium.com/max/1200/1*Z8SLwU4jI1aCiJaJrytZmA.jpeg",
 summary:"The following will be a short explanation, along with some solutions, of a popular JavaScript question that tends to get asked in developer interviews. The question usually looks something like the…",
 url:"https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703",
 tags:"javascript"
  },
  {
 title:"3 JavaScript questions to watch out for during coding interviews",
 thumbnail:"https://cdn-images-1.medium.com/max/1200/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg",
 summary:"JavaScript is the official language of all modern web browsers. As such, JavaScript questions come up in all sorts of developer interviews. This article isn’t about the newest JavaScript libraries…",
 url:"https://medium.freecodecamp.org/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb",
 tags:"javascript"
  },
  {
 title:"Top 10 React Libraries Every JavaScript Professional Should Know",
 thumbnail:"https://brainhub.eu/blog/wp-content/uploads/2018/06/react-libraries-javascript-professional-should-know-featured.png",
 summary:"The ability to constantly learn and adjust to the ever-changing environment is the key characteristic of every top developer. In this article, we’ll be talking about 10 React libraries that no JavaScript developer should miss.",
 url:"https://brainhub.eu/blog/react-libraries-javascript-professional-should-know/",
 tags:"javascript"
  },
  {
 title:"When to use Component or PureComponent",
 thumbnail:"https://cdn-images-1.medium.com/max/1200/1*tkTyHS3bla2rVXEh5YjCng.jpeg",
 summary:"I switched to using PureComponent awhile back on the premise of it being a more performant version of Component. This turned out to be true, but the performance gains come with a few strings…",
 url:"https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81",
 tags:"react"
  },
  {
 title:"Fullstack React: 30 Days of React",
 thumbnail:"https://www.fullstackreact.com/assets/images/30days/30-days-of-react-book-cover-2-as-book-220.png",
 summary:"Interested in Learning React but having trouble getting started  We'll teach you how it all works - for free Over the next 30 days, we'll walk through everything you need to know to work with React. From the very beginning through testing and deployment of our first app. Today, we're starting out at the beginning.",
 url:"https://www.fullstackreact.com/30-days-of-react/",
 tags:"react"
  },
  {
 title:"Understanding React — Component life-cycle",
 thumbnail:"https://cdn-images-1.medium.com/max/1200/1*DNNTps27uJ_YmhZZqClxAw.png",
 summary:"React provides developers with many methods or “hooks” that are called during the life-cycle of an component, which allows us to update the UI and application state. Knowing when to use which of them…",
 url:"https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d",
 tags:"react"
  },
  {
 title:"Understanding React component life-cycle – Code Like A Girl",
 thumbnail:"https://cdn-images-1.medium.com/max/1200/1*cEWErpe-oY-_S1dOaT1NtA.jpeg",
 summary:"Each React component comes with several methods that allows developers to update the application state and reflect the change to UI. There are three main phases of a component which including…",
 url:"https://code.likeagirl.io/understanding-react-component-life-cycle-49bf4b8674de",
 tags:"react"
  },
  {
 title:"Understanding null, undefined and NaN. – codeburst",
 thumbnail:"https://cdn-images-1.medium.com/max/1200/1*fCkcxpSevogcuSnbEpCA1Q.jpeg",
 summary:"When you start learning JavaScript, one of the first things you need to learn are data types. As long as we talk about Numbers, Strings and Booleans things are pretty clear, objects are fine as well…",
 url:"https://codeburst.io/understanding-null-undefined-and-nan-b603cb74b44c",
 tags:"javascript"
  },
  {
 title:"21 Essential JavaScript Interview Questions | Codementor",
 thumbnail:"https://www.filepicker.io/api/file/iarrmJtTVCIs4mpH8egx",
 summary:"Interviewing for a position as a JavaScript developer? Here are 21 essential questions that you need to know the answer to.",
 url:"https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z",
 tags:"javascript"
  }
 ];


class blogCardApi {
  static getAllBlogCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], blogCardData));
      }, 0);
    });
  }

  static AddBlogCard(blogUrl){
    let blogCard =  blogCardData[blogCardData.length -1];
    let newBlogCard = Object.assign({}, blogCard);
    newBlogCard.url = blogUrl;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        blogCardData.push(newBlogCard);
        resolve(newBlogCard);
      }, 0);
    });
  }  
}
export default blogCardApi;