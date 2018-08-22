import React from 'react';
import ReactDom from 'react-dom';
import { 
    createStore, 
    applyMiddleware, 
    compose
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { 
    BrowserRouter,
    Route,
    Redirect,
    Switch 
} from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';
import reducer from './reducer';

const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
// 登录
//     没有登录信息  统一跳转login
// 页面 导航+注销
//     一营
//     二营
//     骑兵连
// router+redux
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Auth} />
                <Route path='/dashboard' component={Dashboard} />
                <Redirect to='/dashboard' />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
