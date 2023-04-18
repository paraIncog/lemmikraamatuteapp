import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }
  
export default function BooksPage() {
    return (
    <div>
        <h1>Hello there user</h1>
        <p>This is your awesome User Profile page</p>
        <Link to="/">Now back to me!</Link>
        <Link to="/bookspage:id"><MyButton /></Link>
    </div>
    );
}