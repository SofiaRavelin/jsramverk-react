import React from 'react';

import '../style/reports.css';

import One from './week/1';

const Reports = () => {
        return (
            <div className="week-page">
            <h1>Redovisning</h1>
            <p>Här finns redovisningtexter efter varje genomfört kursmoment.</p>
            <li><a href="https://jsramverk.se/#repo">Kursrepo</a></li>
            <li><a href="https://github.com/SofiaRavelin/jsramverk">GitHub</a></li>
            <li><a href="https://github.com/SofiaRavelin/jsramverk/blob/master/README.md">README.md</a></li>
                <div>
                < One />
                </div>
            </div>
        );
};

export default Reports;
