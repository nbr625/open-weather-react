import React, { Component } from 'react';

import Errors from './Errors';
import SearchForm from './SearchForm';
import { getWeatherObject } from '../apis/openWeatherMap.jsx';
import '../style/app.scss'


export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
  }

  handleSearch = (location) => {

    this.setState({
      loading: true
    });

    getWeatherObject(location).then(
       (obj) => {
        this.setState({
          loading: false,
          location,
          ...obj
        });
      }, (e) => {
        this.setState({
          errors: e.message,
          loading: false
        });
      }
    );

  }

  componentDidMount() {
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }

  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }

  renderMessage = () =>  {
    let s = this.state;
    if (s.loading) {
      return <h3 className="text-center">fetching weather...</h3>;
    } else if (s.temperature && s.location) {
      return (
        <div>
          <h3 className="text-center">{ s.location } has { s.weatherDescription } right now</h3>
          <h4>There is a temperature of { s.temperature } and a humidity of { s.humidity }</h4>
          <img src={"http://openweathermap.org/img/w/" + s.weatherIcon + ".png"} alt={ s.generalWeather }/>
          <div>Get forecast for the next 5 days?</div>
        </div>
      );
    }
  }

  renderError = () => {
    let { errors } = this.state;
    if (typeof errors === 'string') {
      return (
          <Errors message={ errors }/>
      );
    }
  }

  render() {
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <SearchForm onSearch={ this.handleSearch }/>
        { this.renderMessage() }
        { this.renderError() }
      </div>
    );
  }
};
