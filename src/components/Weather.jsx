import React, { Component } from 'react';
import Skycons from 'react-skycons';

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
    //Upon reporting a change to props, we will hangle the search
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }

  renderMessage = () =>  {
    let s = this.state;
    if (s.loading) {
      return <h3 className="text-center page-title">fetching weather...</h3>;
    } else if (s.temperature && s.location) {
      return (
        <div className="text-center page-title">
          <h3 className="text-center">{ s.location } has { s.weatherDescription } right now</h3>
          <h4>Temperature: { Math.round(s.temperature) } Celcius / { Math.round(s.temperature*1.8+32.0) } Fahrenheit</h4>
          <h4>Humidity: { s.humidity } percent </h4>
          {s.iconCode ? (
              <div className="icon-container">
                <Skycons color='#FF4500' icon={s.iconCode} autoplay={true}/>
              </div> ) : null }
        </div>
      );
    } else {
      return (
          <h1 className="text-center page-title">Get Weather</h1>
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
      <div className="weather-block">
        { this.renderMessage() }
        <SearchForm onSearch={ this.handleSearch }/>
        { this.renderError() }

      </div>
    );
  }
};
