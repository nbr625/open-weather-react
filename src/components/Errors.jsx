import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import '../style/app.scss'


export default class ErrorModal extends Component {

  static defaultProps = {
    title: 'Error'
  }

  render() {
    let {title, message} = this.props;
    return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="hollow button" data-close="">
              Okay
            </button>
          </p>
        </div>
    );
  }
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};
