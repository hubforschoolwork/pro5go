import React from 'react';
import Dashboard from '../components/dashboardc.jsx';
import Cookingb from '../components/cookinghub.jsx';
import './cooking.css'

function Cooking() {
    return (
        <>
        <Dashboard />


        <div className="form-container">
            <h3>Winter Cooking</h3>
        </div>
        <Cookingb />

        </>
    );
}

export default Cooking;



