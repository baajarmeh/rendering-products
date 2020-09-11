import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import EditProduct from './screens/EditProduct';

function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/edit-product' component={EditProduct} />
        </Router>
    );
}

export default connect()(App);
