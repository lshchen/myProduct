import React from 'react';
import './BottomBar.scss'
import {connect} from "react-redux";
import {changeTab} from "../../actions/tabAction";

class BottomBar extends React.Component{
    constructor (props) {
        super(props);
    }
    changeTab (item) {
        this.props.dispatch(
            changeTab({
              activeKey: item.key
           })
        );
    }
    renderItems () {
        let tabs = this.props.tabs;
        return tabs.map((item,index)=>{
            let cls = item.key + ' items';
            if (item.key === this.props.activeKey){
                cls += ' active';
            }
            return (
                <div key={index} className={cls} onClick={()=>this.changeTab(item)}>
                    <div className="tab_icon"></div>
                    <div className="tab_name">{item.name}</div>
                </div>
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
            tabs: state.tabs,
            activeKey: state.activeKey
        }
    ))(BottomBar);