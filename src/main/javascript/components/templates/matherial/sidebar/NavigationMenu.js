import React,{Component} from "react";

class NavigationMenu extends Component {
    render() {
        return (
            <ul className="navigation">
                <li>
                    <a href="index.html"><i className="zmdi zmdi-home"/> Home</a>
                </li>
                <li className="navigation__sub">
                    <a href><i className="zmdi zmdi-local-grocery-store zmdi-hc-fw"/> Store</a>
                    <ul>
                        <li><a href="hidden-sidebar.html">Products</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
};

export default NavigationMenu;