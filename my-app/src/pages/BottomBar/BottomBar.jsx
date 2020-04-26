import React from 'react';
import './BottomBar.scss'
import {connect} from "react-redux";
import {changeTab} from "../../actions/tabAction";
import { NavLink} from 'react-router-dom';
class BottomBar extends React.Component{
    constructor (props) {
        super(props);
    }
    changeTab (item) {
        this.props.history.replace(item.key);
        // this.props.dispatch(
        //     changeTab({
        //       activeKey: item.key
        //    })
        // );
    }
    renderItems () {
        let tabs = this.props.tabs;
        return tabs.map((item,index)=>{
            let cls = item.key + ' items';
            if (item.key === this.props.activeKey){
                cls += ' active';
            }
            return (
                <NavLink key={index} className={cls} replace={true} to={"/" + item.key} activeClassName="active" onClick={()=>this.changeTab(item)}>
                    <div className="tab_icon"></div>
                    <div className="btn_name">{item.name}</div>
                </NavLink>
            );
        })
    }
    render() {
        return (
            <div className="bottom_bar">
                {this.renderItems()}
            </div>
        );
    }
}
export default connect(
    (state) => (
        {
            tabs: state.tabReducer.tabs,
            activeKey: state.tabReducer.activeKey
        }
    ))(BottomBar);