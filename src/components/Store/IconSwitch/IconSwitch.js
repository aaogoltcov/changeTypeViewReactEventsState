import React, {Component} from 'react';
import './IconSwitch.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faGrip, faBars} from "@fortawesome/free-solid-svg-icons";
import fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faList, faGrip, faBars);

class IconSwitch extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {iconSwitchColor: "Dodgerblue"};
    }

    returnTargetElement(evt) {
        return (evt.target.tagName === "path") ? evt.target.parentElement :
            (evt.target.tagName === "div") ? evt.target.querySelector('svg') : evt.target;
    }

    generateSwitchIcon() {
        if (this.props.icon === "view_cards") {
            return <FontAwesomeIcon icon="fa-solid fa-grip" size={"3x"} color={this.state.iconSwitchColor}/>;
        } else if (this.props.icon === "view_list") {
            return <FontAwesomeIcon icon="fa-solid fa-bars" size={"3x"} color={this.state.iconSwitchColor}/>;
        }
    }

    handleClick = evt => {
        this.element = this.returnTargetElement(evt);
        if (this.element.dataset.icon === 'grip') {
            this.props.onSwitch("view_list");
        } else if (this.element.dataset.icon === 'bars') {
            this.props.onSwitch("view_cards");
        }
    };

    handleFocusOn = evt => {
        this.element = this.returnTargetElement(evt);
        if (this.element.dataset.icon === 'grip' || this.element.dataset.icon === 'bars') {
            this.setState({iconSwitchColor: "Tomato"});
            this.element.style.cursor = "pointer";
        }
    };

    handleFocusLeave = evt => {
        this.element = this.returnTargetElement(evt);
        if (this.element.dataset.icon === 'grip' || this.element.dataset.icon === 'bars') {
            this.setState({iconSwitchColor: "Dodgerblue"});
            this.element.style.cursor = "auto";
        }
    };

    render() {
        return (
            <div onClick={this.handleClick} onMouseMove={this.handleFocusOn} onMouseLeave={this.handleFocusLeave}>
                {this.generateSwitchIcon()}
            </div>
        );
    }
}

export default IconSwitch;