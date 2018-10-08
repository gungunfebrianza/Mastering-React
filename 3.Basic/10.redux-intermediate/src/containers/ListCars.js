import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListCars extends Component {
  listOfCars = ({ cars }) => {
    if (cars) {
      return cars.map(car => {
        return (
          <Link key={car.id} to={`/car/${car.id}`} className="car_item">
            <div className="left">
              <img src={`/images/${car.image}`} alt="" />
            </div>
            <div className="right">
              <h4>{car.model}</h4>
              <h6>{car.brand}</h6>
            </div>
          </Link>
        );
      });
    }
  };
  render() {
    return <div>{this.listOfCars(this.props)}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cars: state.cars
  };
}

export default connect(
  mapStateToProps,
  null
)(ListCars);
