import React from "react";
import Header from '../../components/header/header.jsx';
import Category from "../../components/Category/Category.jsx";
import CategoryList from "../../components/CategoryList/CategoryList";
class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Category></Category>
                <CategoryList></CategoryList>
            </div>
        );
    }
}
export default Home;
