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

    let foods;
    if (eateries) {
      foods = <ul>
        {
        eateries.map(function(eatery){
          return (
            <li key={eatery.id}>
              {eatery.name}
            </li>
          )
        })
        }
      </ul>
    } else {
      foods = <div></div>
    }
    console.log(eateries[0]);

    return (
      <div>
        <h3>Here are the eateries!</h3>
        {foods}
      </div>
    )
  }
});

module.exports = EateryIndex;
