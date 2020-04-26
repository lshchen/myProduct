import React from "react";
import './header.scss'
import SearchBar from "../searchBar/searchBar";
import bgUrl from '../../assets/images/bannertemp.jpg'
class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <SearchBar />
                <img className="banner-img" src={bgUrl} alt="123" />
            </div>
        );
    }
}
export default Header;