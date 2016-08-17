const React = require('react');
const EateryStore = require('../stores/eatery');
const EateryActions = require('../actions/eatery_actions');

const EateryIndex = React.createClass({
  getInitialState() {
    return {
      eateries: EateryStore.all()
    };
  },

  componentDidMount() {
    this.eateryListener = EateryStore.addListener(this._handleChange);
    EateryActions.fetchAllEateries();
  },

  componentWillUnmount() {
    this.eateryListener.remove();
  },

  _handleChange() {
    this.setState({
      eateries: EateryStore.all()
    });
  },

  render() {
    let eateries = this.state.eateries;
    console.log(eateries);

    return (
      <div>
        <h3>Here are the eateries!</h3>
        <ul>
          {
            Object.keys(eateries).map(function(obj_id) {
              return <li key={obj_id}>{eateries[obj_id].name}</li>
            })
          }
        </ul>
      </div>
    )
  }
});

module.exports = EateryIndex;
