const React = require('react');
const ReactDOM = require('react-dom');
const EateryStore = require('./stores/eatery');
const EateryApiUtil = require('./util/eatery_api_util');

window.EateryApiUtil = EateryApiUtil;


var Test = React.createClass({
  render() {
    return(
      <div>I am a react component!</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Test />, document.getElementById('content'));
});
