import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";
import DataList from "./_components/datalist/DataList";

class Courses extends Component {
    render() {
        let javaData = [1, 2, 3, 4, 5];
        let reactData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

        return (
            <div className="Courses">
                <Navbar/>
                <DataList headerText="Java" linkTo="/" columns={3} tags={javaData}/>
                <DataList headerText="React" linkTo="/" columns={3} tags={reactData}/>
            </div>
        );
    }
}

export default Courses;