const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const EateryConstants = require('../constants/eatery_constants');

let _eateries = {};

const EateryStore = new Store(AppDispatcher);

EateryStore.all = () => {
  return Object.assign({}, _eateries);
};

function resetAllEateries(eateries) {
  _eateries = eateries;
  EateryStore.__emitChange();
}

EateryStore.__onDispatch = (payload) => {
  switch(payload.actionType) {
    case EateryConstants.EATERIES_RECEIVED:
        resetAllEateries(payload.eateries);
        break;
  }
}

module.exports = EateryStore;
