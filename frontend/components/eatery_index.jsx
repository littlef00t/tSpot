const React = require('react');
const EateryStore = require('../stores/eatery');
const EateryActions = require('../actions/eatery_actions');

const EateryIndex = React.createClass({
  getInitialState(){
    return {
      eateries: EateryStore.all()
    };
  },
  componentDidMount(){
    console.log('component mounted');
    EateryStore.addListener(this._handleChange);
    EateryActions.fetchAllEateries();
  },
  _handleChange(){
    this.setState({
      eateries: EateryStore.all()
    });
  },
  render(){
    var eateries = this.state.eateries;

    return (
      <div>
        {
          eateries.map(function(eatery){
            return (
              <div key={eatery.id}>
                {eatery.name}
              </div>
            )
          })

        }
      </div>
    )
  }
});

module.exports = EateryIndex;
