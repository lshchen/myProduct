import React from "react";
import Header from '../../components/header/header.jsx';
import Category from "../../components/Category/Category.jsx";
import CategoryList from "../../components/CategoryList/CategoryList";
import Order from "../Order/Order";
import My from "../My/My";
class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/*<Header></Header>*/}
                {/*<Category></Category>*/}
                {/*<CategoryList></CategoryList>*/}
                <My></My>
                <Order></Order>
            </div>
        );
    }
}
export default Home;