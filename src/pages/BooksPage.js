import React from 'react';
import { Link } from 'react-router-dom';
export default function BooksPage() {
    return (
    <div>
        <h1>Hello there user</h1>
        <p>This is your awesome User Profile page</p>
        <Link to="/">Now back to me!</Link>
        <Link to="/bookspage:id"></Link>
    </div>
    );
}