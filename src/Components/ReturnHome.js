import React from 'react';
import { Link } from 'react-router-dom';

function ReturnHome() {
    return (
        <div className="goBack">
            <Link to="/">
                <i className="fa fa-home"></i>
            </Link>
        </div>
    )
}

export default ReturnHome