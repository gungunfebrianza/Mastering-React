import React, { Component } from 'react';

class Header extends Component {
  read(e) {}

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
        <div
          style={styles.logo}
          onClick={() => {
            console.log('Click');
          }}
        >
          Logo
        </div>
        <input
          onInput={evt => {
            console.log(evt.target.value);
          }}
          type="text"
        />
      </header>
    );
  }
}

export default Header; //export component
