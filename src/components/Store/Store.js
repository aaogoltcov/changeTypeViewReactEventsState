import React, {Component} from 'react';
import IconSwitch from "./IconSwitch/IconSwitch";
import './Store.css';
import CardsView from "./CardsView/CardsView";
import ListView from "./ListView/ListView";

class Store extends Component {
    constructor(props) {
        super(props);
        this.products = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];
        this.state = {
            typeView: "view_cards",
        }
    }

    changeTypeView = targetView => {this.setState({typeView: targetView})};

    render() {
        let productListComponent = this.state.typeView === 'view_cards'
            ? <CardsView productList={this.products} />
            : <ListView productList={this.products} />;
        return (
            <div className={"store"}>
                <div className={"container-fluid"}>
                    <IconSwitch
                        icon={this.state.typeView}
                        onSwitch={this.changeTypeView}
                    />
                </div>
                <div className={"container-fluid"}>
                    {productListComponent}
                </div>
            </div>
        );
    }
}

export default Store;