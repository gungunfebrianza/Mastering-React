import React from 'react';

const Navigation = () => {
  let isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="#">Sign Up</a>
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navigation;
