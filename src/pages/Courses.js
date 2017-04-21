import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";
import TagList from "./_components/taglist/TagList";

class Courses extends Component {
    render() {
        let javaData = [1, 2, 3, 4, 5];
        let reactData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

        return (
            <div className="Courses">
                <Navbar/>
                <TagList headerText="Java" columns={3} tags={javaData}/>
                <TagList headerText="React" columns={3} tags={reactData}/>
            </div>
        );
    }
}

export default Courses;