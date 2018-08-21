import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { counter } from './index.redux';
import { 
    BrowserRouter,
    Route, 
    Link,
    Redirect,
    Switch 
} from 'react-router-dom';


const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
class Test extends React.Component {
    render() {
        console.log(this.props);
        return <h2>测试组件</h2>
    }
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/:location' component={Test} />
                </Switch>
                {/* <Route path='/erying' component={Erying} />
                <Route path='/qibinglian' component={Qibinglian} /> */}
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
