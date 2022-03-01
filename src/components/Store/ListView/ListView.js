import React, {Component} from 'react';
import './ListView.css';
import ShopItem from "./ShopItem/ShopItem";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        let productList = [];
        let key = 0;
        for (let item of this.props.productList) {
            productList.push(<ShopItem item={
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
            <div className={"listView"}>
                {productList}
            </div>
        );
    }
}

export default ListView;