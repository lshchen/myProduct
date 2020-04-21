import React from "react";
import 'header.scss'
class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <img src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt="" class="banner_img"/>
            </div>
        );
    }
}
export default Header;