import React, { Component } from 'react';
import '../style/app.scss'

export default class WeatherForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="hollow button expanded">Get Weather</button>
        </form>
      </div>
    );
  }
};
