import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";
import TagList from "./_components/taglist/TagList";

class Topics extends Component {
    render() {
        let popularTagsData = [1, 2, 3, 4, 5];
        let allTagsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

        return (
            <div className="Topics">
                <Navbar/>
                <TagList headerText="Popular Topics" linkTo="/topics/" columns={2} tags={popularTagsData}/>
                <TagList headerText="All Topics" linkTo="/topics/" columns={3} tags={allTagsData}/>
            </div>
        );
    }
}

export default Topics;