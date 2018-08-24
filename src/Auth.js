import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getUserData } from './Auth.redux';

// 两个reducer 每个reducer都要一个state
@connect(
    state=>state.auth,
    {login, getUserData}
)
class Auth extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data:[]
    //     }
    // }
    componentDidMount() {
        this.props.getUserData();
    }
    render() {
        // const data = this.state.data;
        return (
            <div>
                <h2>我的名字是：{this.props.user},今年{this.props.age}</h2>
                {
                    this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null
                }
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
export default Auth;