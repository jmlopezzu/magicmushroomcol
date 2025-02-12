import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
        </ReactRoutes>
    );
}

export default Routes;
