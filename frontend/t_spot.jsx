const React = require('react');
const ReactDOM = require('react-dom');

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
