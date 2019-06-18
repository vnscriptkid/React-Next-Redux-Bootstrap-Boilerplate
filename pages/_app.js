// pages/_app.js
import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const makeStore = (initialState, options) => {
    return createStore(
        rootReducer, 
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
        );
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        ); 
    }

}

export default withRedux(makeStore)(MyApp);