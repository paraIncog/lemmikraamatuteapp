import React from 'react';
import { Link } from 'react-router-dom';
export default function MainPage() {
    return (
        <div>
            <h1>Hey from HomePage</h1>
            <p>
                This is your awesome HomePage subtitle
            </p>
            <p>
                <Link to="/bookspage">Good link</Link>
            </p>
        </div>
    );
}