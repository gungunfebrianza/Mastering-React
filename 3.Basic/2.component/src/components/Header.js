import React, { Component } from 'react';

class Header extends Component {
  readAttributeName(e) {
    console.log(e.target.name);
  }

  readInputChange(e) {
    console.log(e.target.value);
  }

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
        <input onInput={this.readInputChange} name="Test" type="text" />
      </header>
    );
  }
}

export default Header; //export component
