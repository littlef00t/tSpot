const React = require('react');
const ReactDOM = require('react-dom');
const EateryStore = require('./stores/eatery');
const EateryApiUtil = require('./util/eatery_api_util');
const EateryActions = require('./actions/eatery_actions');
const EateryIndex = require('./components/eatery_index');

window.EateryIndex = EateryIndex;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<EateryIndex />, document.getElementById('content'));
});
