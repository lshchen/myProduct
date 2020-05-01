import '../../assets/css/common.scss';
import React from 'react';

import { connect } from 'react-redux';


import NavHeader from '../../components/NavHeader/NavHeader';
import Header from '../../components/CategoryHeader/Header';
import ContentList from '../../components/ContentList/ContentList';


class Category extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){

        return (
            <div className="category">
                <NavHeader title="分类"/>
                <Header />
                <ContentList />
            </div>
        );
    }
}

export default connect(
    // state =>({

    // })
)(Category);