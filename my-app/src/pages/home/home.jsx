import React from "react";
import Header from '../../components/Header/Header.jsx';
class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header></Header>
            </div>
        );
    }
}
export default Home;