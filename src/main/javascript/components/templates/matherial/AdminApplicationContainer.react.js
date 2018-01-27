let React = require("react");
let Sidebar = require("./sidebar/Sidebar.react")

module.exports = React.createClass({
    render: function () {
        return (
            <main className="main">
                <div className="page-loader">
                    <div className="page-loader__spinner">
                        <svg viewBox="25 25 50 50">
                            <circle cx={50} cy={50} r={20} fill="none" strokeWidth={2} strokeMiterlimit={10}/>
                        </svg>
                    </div>
                </div>
                <header className="header">
                    <div className="navigation-trigger hidden-xl-up" data-ma-action="aside-open"
                         data-ma-target=".sidebar">
                        <div className="navigation-trigger__inner">
                            <i className="navigation-trigger__line"/>
                            <i className="navigation-trigger__line"/>
                            <i className="navigation-trigger__line"/>
                        </div>
                    </div>
                    <div className="header__logo hidden-sm-down">
                        <h1><a href="index.html">Material Admin 2.0</a></h1>
                    </div>
                    <form className="search">
                        <div className="search__inner">
                            <input type="text" className="search__text"
                                   placeholder="Search for people, files, documents..."/>
                            <i className="zmdi zmdi-search search__helper" data-ma-action="search-close"/>
                        </div>
                    </form>
                    <ul className="top-nav">
                        <li className="hidden-xl-up"><a href data-ma-action="search-open"><i
                            className="zmdi zmdi-search"/></a></li>
                        <li className="dropdown">
                            <a href data-toggle="dropdown"><i className="zmdi zmdi-email"/></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu--block">
                                <div className="listview listview--hover">
                                    <div className="listview__header">
                                        Messages
                                        <div className="actions">
                                            <a href="messages.html" className="actions__item zmdi zmdi-plus"/>
                                        </div>
                                    </div>
                                    <a href className="listview__item">
                                        <img src="/static/templates/matherialadm/demo/img/profile-pics/1.jpg"
                                             className="listview__img" alt/>
                                        <div className="listview__content">
                                            <div className="listview__heading">
                                                David Belle <small>12:01 PM</small>
                                            </div>
                                            <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <img src="/static/templates/matherialadm/demo/img/profile-pics/2.jpg"
                                             className="listview__img" alt/>
                                        <div className="listview__content">
                                            <div className="listview__heading">
                                                Jonathan Morris
                                                <small>02:45 PM</small>
                                            </div>
                                            <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <img src="/static/templates/matherialadm/demo/img/profile-pics/3.jpg"
                                             className="listview__img" alt/>
                                        <div className="listview__content">
                                            <div className="listview__heading">
                                                Fredric Mitchell Jr.
                                                <small>08:21 PM</small>
                                            </div>
                                            <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at
                                                augue ultricies</p>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <img src="/static/templates/matherialadm/demo/img/profile-pics/4.jpg"
                                             className="listview__img" alt/>
                                        <div className="listview__content">
                                            <div className="listview__heading">
                                                Glenn Jecobs
                                                <small>08:43 PM</small>
                                            </div>
                                            <p>Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim,
                                                dui est consectetur neque</p>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <img src="/static/templates/matherialadm/demo/img/profile-pics/5.jpg"
                                             className="listview__img" alt/>
                                        <div className="listview__content">
                                            <div className="listview__heading">
                                                Bill Phillips
                                                <small>11:32 PM</small>
                                            </div>
                                            <p>Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel
                                                ante placerat</p>
                                        </div>
                                    </a>
                                    <a href className="view-more">View all messages</a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown top-nav__notifications">
                            <a href data-toggle="dropdown" className="top-nav__notify">
                                <i className="zmdi zmdi-notifications"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu--block">
                                <div className="listview listview--hover">
                                    <div className="listview__header">
                                        Notifications
                                        <div className="actions">
                                            <a href className="actions__item zmdi zmdi-check-all"
                                               data-ma-action="notifications-clear"/>
                                        </div>
                                    </div>
                                    <div className="listview__scroll scrollbar-inner">
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/1.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">David Belle</div>
                                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/2.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">Jonathan Morris</div>
                                                <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/3.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">Fredric Mitchell Jr.</div>
                                                <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit
                                                    turpis at augue ultricies</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/4.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">Glenn Jecobs</div>
                                                <p>Ut vitae lacus sem ellentesque maximus, nunc sit amet varius
                                                    dignissim, dui est consectetur neque</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/5.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">Bill Phillips</div>
                                                <p>Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet
                                                    vel ante placerat</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/1.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">David Belle</div>
                                                <p>Cum sociis natoque penatibus et magnis dis parturient montes</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/2.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">Jonathan Morris</div>
                                                <p>Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</p>
                                            </div>
                                        </a>
                                        <a href className="listview__item">
                                            <img src="/static/templates/matherialadm/demo/img/profile-pics/3.jpg"
                                                 className="listview__img" alt/>
                                            <div className="listview__content">
                                                <div className="listview__heading">Fredric Mitchell Jr.</div>
                                                <p>Phasellus a ante et est ornare accumsan at vel magnauis blandit
                                                    turpis at augue ultricies</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-1"/>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown hidden-xs-down">
                            <a href data-toggle="dropdown"><i className="zmdi zmdi-check-circle"/></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                                <div className="listview listview--hover">
                                    <div className="listview__header">Tasks</div>
                                    <a href className="listview__item">
                                        <div className="listview__content">
                                            <div className="listview__heading">HTML5 Validation Report</div>
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: '75%'}} aria-valuenow={75}
                                                     aria-valuemin={0} aria-valuemax={100}/>
                                            </div>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <div className="listview__content">
                                            <div className="listview__heading">Google Chrome Extension</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" style={{width: '43%'}}
                                                     aria-valuenow={43} aria-valuemin={0} aria-valuemax={100}/>
                                            </div>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <div className="listview__content">
                                            <div className="listview__heading">Social Intranet Projects</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" style={{width: '20%'}}
                                                     aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}/>
                                            </div>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <div className="listview__content">
                                            <div className="listview__heading">Bootstrap Admin Template</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-info" style={{width: '60%'}}
                                                     aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}/>
                                            </div>
                                        </div>
                                    </a>
                                    <a href className="listview__item">
                                        <div className="listview__content">
                                            <div className="listview__heading">Youtube Client App</div>
                                            <div className="progress">
                                                <div className="progress-bar bg-danger" style={{width: '80%'}}
                                                     aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}/>
                                            </div>
                                        </div>
                                    </a>
                                    <a href className="view-more">View all tasks</a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown hidden-xs-down">
                            <a href data-toggle="dropdown"><i className="zmdi zmdi-apps"/></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                                <div className="row app-shortcuts">
                                    <a className="col-4 app-shortcuts__item" href>
                                        <i className="zmdi zmdi-calendar bg-red"/>
                                        <small className>Calendar</small>
                                    </a>
                                    <a className="col-4 app-shortcuts__item" href>
                                        <i className="zmdi zmdi-file-text bg-blue"/>
                                        <small className>Files</small>
                                    </a>
                                    <a className="col-4 app-shortcuts__item" href>
                                        <i className="zmdi zmdi-email bg-teal"/>
                                        <small className>Email</small>
                                    </a>
                                    <a className="col-4 app-shortcuts__item" href>
                                        <i className="zmdi zmdi-trending-up bg-blue-grey"/>
                                        <small className>Reports</small>
                                    </a>
                                    <a className="col-4 app-shortcuts__item" href>
                                        <i className="zmdi zmdi-view-headline bg-orange"/>
                                        <small className>News</small>
                                    </a>
                                    <a className="col-4 app-shortcuts__item" href>
                                        <i className="zmdi zmdi-image bg-light-green"/>
                                        <small className>Gallery</small>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown hidden-xs-down">
                            <a href data-toggle="dropdown"><i className="zmdi zmdi-more-vert"/></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-item theme-switch">
                                    Theme Switch
                                    <div className="btn-group btn-group--colors mt-2" data-toggle="buttons">
                                        <label className="btn bg-green active"><input type="radio" defaultValue="green"
                                                                                      autoComplete="off"
                                                                                      defaultChecked="checked"/></label>
                                        <label className="btn bg-blue"><input type="radio" defaultValue="blue"
                                                                              autoComplete="off"/></label>
                                        <label className="btn bg-red"><input type="radio" defaultValue="red"
                                                                             autoComplete="off"/></label>
                                        <label className="btn bg-orange"><input type="radio" defaultValue="orange"
                                                                                autoComplete="off"/></label>
                                        <label className="btn bg-teal"><input type="radio" defaultValue="teal"
                                                                              autoComplete="off"/></label>
                                        <br/>
                                        <label className="btn bg-cyan"><input type="radio" defaultValue="cyan"
                                                                              autoComplete="off"/></label>
                                        <label className="btn bg-blue-grey"><input type="radio" defaultValue="blue-grey"
                                                                                   autoComplete="off"/></label>
                                        <label className="btn bg-purple"><input type="radio" defaultValue="purple"
                                                                                autoComplete="off"/></label>
                                        <label className="btn bg-indigo"><input type="radio" defaultValue="indigo"
                                                                                autoComplete="off"/></label>
                                        <label className="btn bg-lime"><input type="radio" defaultValue="lime"
                                                                              autoComplete="off"/></label>
                                    </div>
                                </div>
                                <a href className="dropdown-item">Fullscreen</a>
                                <a href className="dropdown-item">Clear Local Storage</a>
                            </div>
                        </li>
                        <li className="hidden-xs-down">
                            <a href data-ma-action="aside-open" data-ma-target=".chat" className="top-nav__notify">
                                <i className="zmdi zmdi-comment-alt-text"/>
                            </a>
                        </li>
                    </ul>
                </header>
                <Sidebar/>
                <aside className="chat">
                    <div className="chat__header">
                        <h2 className="chat__title">Chat <small>Currently 20 contacts online</small></h2>
                        <div className="chat__search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <i className="form-group__bar"/>
                            </div>
                        </div>
                    </div>
                    <div className="listview listview--hover chat__buddies scrollbar-inner">
                        <a className="listview__item chat__available">
                            <img src="/static/templates/matherialadm/demo/img/profile-pics/7.jpg"
                                 className="listview__img" alt/>
                            <div className="listview__content">
                                <div className="listview__heading">Jeannette Lawson</div>
                                <p>hey, how are you doing.</p>
                            </div>
                        </a>
                        <a className="listview__item chat__available">
                            <img src="/static/templates/matherialadm/demo/img/profile-pics/5.jpg"
                                 className="listview__img" alt/>
                            <div className="listview__content">
                                <div className="listview__heading">Jeannette Lawson</div>
                                <p>hmm...</p>
                            </div>
                        </a>
                        <a className="listview__item chat__away">
                            <img src="/static/templates/matherialadm/demo/img/profile-pics/3.jpg"
                                 className="listview__img" alt/>
                            <div className="listview__content">
                                <div className="listview__heading">Jeannette Lawson</div>
                                <p>all good</p>
                            </div>
                        </a>
                        <a className="listview__item">
                            <img src="/static/templates/matherialadm/demo/img/profile-pics/8.jpg"
                                 className="listview__img" alt/>
                            <div className="listview__content">
                                <div className="listview__heading">Jeannette Lawson</div>
                                <p>morbi leo risus portaac consectetur vestibulum at eros.</p>
                            </div>
                        </a>
                        <a className="listview__item">
                            <img src="/static/templates/matherialadm/demo/img/profile-pics/6.jpg"
                                 className="listview__img" alt/>
                            <div className="listview__content">
                                <div className="listview__heading">Jeannette Lawson</div>
                                <p>fusce dapibus</p>
                            </div>
                        </a>
                        <a className="listview__item chat__busy">
                            <img src="/static/templates/matherialadm/demo/img/profile-pics/9.jpg"
                                 className="listview__img" alt/>
                            <div className="listview__content">
                                <div className="listview__heading">Jeannette Lawson</div>
                                <p>cras mattis consectetur purus sit amet fermentum.</p>
                            </div>
                        </a>
                    </div>
                    <a href="messages.html" className="btn btn--action btn--fixed btn-danger"><i
                        className="zmdi zmdi-plus"/></a>
                </aside>
                <section className="content">
                    <header className="content__title">
                        <h1>xxx</h1>
                        <div className="actions">
                            <a href className="actions__item zmdi zmdi-trending-up"/>
                            <a href className="actions__item zmdi zmdi-check-all"/>
                            <div className="dropdown actions__item">
                                <i data-toggle="dropdown" className="zmdi zmdi-more-vert"/>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href className="dropdown-item">Refresh</a>
                                    <a href className="dropdown-item">Manage Widgets</a>
                                    <a href className="dropdown-item">Settings</a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">xxxYYYYYYYYYYYYYy</h2>
                            <small className="card-subtitle">xxxYYYYYYYYYYYYYYYYYYYYYYYYYYY</small>
                        </div>
                        <div className="card-block">
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">xxxYYYYYYYYYYYYYy</h2>
                            <small className="card-subtitle">xxxYYYYYYYYYYYYYYYYYYYYYYYYYYY</small>
                        </div>
                        <div className="card-block">
                        </div>
                    </div>
                    <footer className="footer hidden-xs-down">
                        <p>© Material Admin Responsive. All rights reserved.</p>
                        <ul className="nav footer__nav">
                            <a className="nav-link" href>Homepage</a>
                            <a className="nav-link" href>Company</a>
                            <a className="nav-link" href>Support</a>
                            <a className="nav-link" href>News</a>
                            <a className="nav-link" href>Contacts</a>
                        </ul>
                    </footer>
                </section>
            </main>
        );
    }
});