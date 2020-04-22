import React from "react";
import './header'
import SearchBar from "../searchBar/searchBar";
class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <SearchBar />
                <img className="banner-img" src="../../assets/images/bannertemp.jpg" alt="123" />
            </div>

        );
    }
}
export default Header;