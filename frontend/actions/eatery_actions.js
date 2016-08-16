const EateryApiUtil = require('../util/eatery_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const EateryConstants = require('../constants/eatery_constants');

const EateryActions = {
  fetchAllEateries(){
    EateryApiUtil.fetchAllEateries(EateryActions.receiveAllEateries);
  },
  receiveAllEateries(eateries){
    AppDispatcher.dispatch({
      actionType: EateryConstants.EATERIES_RECEIVED,
      eateries: eateries
    });
  }
}

module.exports = EateryActions;
