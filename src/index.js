import React from 'react';
import ReactDOM from 'react-dom';
import Main from './reducers/main';
import './App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    name: '****',
    companyName: '****',
    number: '.... .... .... ....',
    date: 'mm/yy'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'NUMBER':
            return {
                name: state.name,
                companyName: state.companyName,
                number: action.num,
                date: state.date
            };
        case 'NAME':
            return {
                companyName: state.companyName,
                number: state.number,
                date: state.date,
                name: action.nom
            };
        case 'COMPANY':
            return {
                name: state.name,
                companyName: action.comp,
                number: state.number,
                date: state.date            
            };
        case 'DATE':
            return {
                name: state.name,
                companyName: state.companyName,
                number: state.number,
                date: action.date            };
        default:
            return state;
    };
}

const store = createStore(reducer);
const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
