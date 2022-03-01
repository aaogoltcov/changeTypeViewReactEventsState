import React, {Component} from 'react';
import './ShopCard.css';

class ShopCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="shopCard" key={this.props.item.key}>
                <img src={this.props.item.src} alt={this.props.item.name} />
                <h1>{this.props.item.name}</h1>
                <p className="price">${this.props.item.price}</p>
                <p>{this.props.item.color}</p>
                <p><button>Add to Cart</button></p>
            </div>
        );
    }
}

export default ShopCard;