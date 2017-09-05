import React, {Component} from 'react';
import '../styles/MainContainer.css';
import PostTitleBox from "../components/PostTitleBox";
import PostContentBox from "../components/PostContentBox";

class MainContainer extends Component {
    render(){
        return (
            <div className="MainContainer">
                <div className="blog-column box-with-shadow">
                    <PostTitleBox/>
                    <PostContentBox/>
                </div>
                <div className="about-me-column box-with-shadow">
                
                </div>
            </div>
        );
    }
}

export default MainContainer;
