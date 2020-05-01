import '../../assets/css/common.scss';
import './detail.scss';

import React from 'react';

import { connect } from 'react-redux';

import NavHeader from "../../components/NavHeader/NavHeader";

import { Route, withRouter, NavLink } from 'react-router-dom';

import Menu from "../../components/Menu/Menu";
import Comment from "../../components/Comment/Comment";
import Restanurant from "../../components/Restanurant/Restanurant";
class Detail extends React.Component {
    constructor(props) {
        super(props);

    }
    changeTab(){

    }
    renderTabs(){
        let tabs = this.props.tabs;
        return tabs.map((item)=>{
            return (
                <NavLink activeClassName="active" onClick={()=>this.changeTab(item)} replace={true} to={'/' + item.key} key={item.key} className="tab-item">{item.name}</NavLink>
            );
        });
    }
    render(){
        let poiName = this.props.poiInfo.poi_info ? this.props.poiInfo.poi_info.name : '';
        return (
            <div className="detail">
                <NavHeader title={poiName}/>
                <div className="tab-bar">
                    {this.renderTabs()}
                </div>

                <Route exact path="/menu" component={Menu}/>
                <Route path="/comment" component={Comment}/>
                <Route path="/restanurant" component={Restanurant}/>
                {this.props.showChooseContent ? <div className="mask"></div> : null}
            </div>
        );
    }
}

export default withRouter(connect(
    state =>({
        tabs: state.detailReducer.tabs,
        showChooseContent: state.menuReducer.showChooseContent,
        poiInfo: state.menuReducer.poiInfo
    })
)(Detail));