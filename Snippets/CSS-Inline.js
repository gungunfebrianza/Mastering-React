import React, { Component } from 'react';

class Header extends Component {
  render() {
    const styles = {
      header: {
        background: '#03a9f4'
      },
      logo: {
        color: '#fff',
        textAlign: 'center'
      }
    };

    return (
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <input type="text" />
      </header>
    );
  }
}

export default Header; //export component
