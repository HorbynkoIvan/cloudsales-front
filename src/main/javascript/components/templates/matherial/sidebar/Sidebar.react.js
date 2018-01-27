let React = require("react");
let NavigationMenu = require("./NavigationMenu.react");
let UserTail = require("./UserTail.react");

module.exports = React.createClass({
    render: function () {
        return (
            <aside className="sidebar">
                <div className="scrollbar-inner">
                    <UserTail/>
                    <NavigationMenu/>
                </div>
            </aside>
        );
    }
});