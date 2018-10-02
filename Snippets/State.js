import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    // Access Parent Component
    super(props);

    // State is an object
    this.state = {
      title: 'The Keywords are : ',
      keywords: 'john'
    };
  }

  // Event Function Read Attribute
  readAttributeName(e) {
    console.log(e.target.name);
  }

  // Event Input Change Function Read Value
  readInputChange(e) {
    console.log(e.target.value);
  }

  // How to Change State
  changeStateKeyword(e) {
    this.setState({ keywords: e.target.value });
  }

  // Render
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
          onInput={this.changeStateKeyword.bind(this)} //this mean this class header
          name="Test"
          type="text"
        />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
      </header>
    );
  }
}

export default Header; //export component
