import ReactDOM from 'react-dom/client';
import React from 'react';
import Homepage from './src/pages/homepage/Homepage.js'

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return <Homepage/>;
}

root.render(<App/>);



