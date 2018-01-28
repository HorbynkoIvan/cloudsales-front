import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../../../../actions';

class UserTail extends Component {
    componentDidMount () {
        this.props.fetchData()
    }
    render () {
        console.log(this.props.data);
        return (
            <div className="user">
                <div className="user__info" data-toggle="dropdown">
                    <img className="user__img" src="/static/templates/matherialadm/demo/img/profile-pics/8.jpg" alt />
                    <div>
                        <div className="user__name">Malinda Hollaway</div>
                        <div className="user__email">malinda-h@gmail.com</div>
                    </div>
                </div>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href>View Profile</a>
                    <a className="dropdown-item" href>Settings</a>
                    <a className="dropdown-item" href="/login?logout">Logout</a>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTail)
