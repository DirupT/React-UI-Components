import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content'>
            <h1>Get started with React</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href="https://reactjs.org" target="_blank" className='card-link'>reactjs.org</a>
        </div>
    );
}


export default CardContent;