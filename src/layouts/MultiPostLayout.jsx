import React from 'react';
// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
// import '../styles/MainContainer.css';
// import PostTitleBox from "../components/PostTitleBox";
// import { fetchPostAction } from '../actions/PostRequestActions'
// import PostContentBox from "../components/PostContentBox";
//
// class MultiPostLayout extends Component {
//     componentWillMount(){
//         this.props.loadPost()
//     }
//
//     render(){
//         return (
//             <div className="MultiPostLayout">
//                 <div className="category-banner">
//                     <div className="app-container">
//                         <div className="category-title">Text</div>
//                         <div className="category-subtitle">Subtitle</div>
//                     </div>
//                 </div>
//                 <div className="app-container">
//                     {this.mapPostBoxToLoadedPosts()}
//                 </div>
//             </div>
//         );
//     }
//
//     mapPostBoxToLoadedPosts(){
//         return this.props.loadedPosts.map((post, index) => {
//             return <div key={index} className="blog-column box-with-shadow">
//                 <PostTitleBox title={post.title} subtitle={post.subtitle} dateTime={post.dateTime}/>
//                 <PostContentBox body={post.body}/>
//             </div>
//         });
//     }
// }

// MultiPostLayout.propTypes = {
//     title : PropTypes.string,
//     subtitle : PropTypes.string,
//     dateTime : PropTypes.string,
//     body : PropTypes.array,
//     loading : PropTypes.bool,
//     loadedPosts : PropTypes.array,
// };
//
// const mapStateToProps = state => ({
//     title : state.postRequestReducer.title,
//     subtitle : state.postRequestReducer.subtitle,
//     dateTime : state.postRequestReducer.dateTime,
//     body : state.postRequestReducer.body,
//     loading : state.postRequestReducer.loading,
//     loadedPosts : state.postRequestReducer.loadedPosts,
// });
//
// const mapDispatchToProps = dispatch =>{
//     return {
//         loadPost : () => dispatch(fetchPostAction()),
//     }
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MultiPostLayout)

export default () => {return (<div>Hello</div>)};