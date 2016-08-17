const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const EateryConstants = require('../constants/eatery_constants');

let _eateries = {};

const EateryStore = new Store(AppDispatcher);

EateryStore.all = () => {
  return Object.assign({}, _eateries);
};

function resetAllEateries(eateries) {
  console.log("before reset" + _eateries);
  _eateries = eateries;
  console.log("after reset" + _eateries);
  EateryStore.__emitChange();
}

EateryStore.__onDispatch = (payload) => {
  switch(payload.actionType) {
    case EateryConstants.EATERIES_RECEIVED:
        console.log("dispatched to store" + payload.eateries);
        resetAllEateries(payload.eateries);
        break;
  }
}

module.exports = EateryStore;
