import React, {Component} from 'react';
import './CardsView.css';
import ShopCard from "./ShopCard/ShopCard";

class CardsView extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        let productList = [];
        let key = 0;
        for (let item of this.props.productList) {
            productList.push(<ShopCard item={
                {
                    name: item.name,
                    price: item.price,
                    color: item.color,
                    src: item.img,
                    key: key,
                }
            } key={key} />);
            key++;
        }
        return (
            <div className={"cardsView"}>
                {productList}
            </div>
        );
    }
}

export default CardsView;