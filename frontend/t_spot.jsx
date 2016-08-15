const React = require('react');
const ReactDOM = require('react-dom');

var test = React.createClass({
  render() {
    return(
      <div>It worked!</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log('testing...');
  ReactDOM.render(<div>{test}</div>, document.getElementById('content'));
});
