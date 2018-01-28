import React, {Component} from 'react';
import NavigationMenu from "./NavigationMenu";
import UserTail from "./UserTail";

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="scrollbar-inner">
                    <UserTail/>
                    <NavigationMenu/>
                </div>
            </aside>
        );
    }
};

export default Sidebar;