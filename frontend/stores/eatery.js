const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
let _eateries = {};

const EateryStore = new Store(AppDispatcher);

EateryStore.all = () => {
  return Object.assign({}, _eateries);
};

function resetAllEateries(eateries) {
  _eateries = eateries;
  EateryStore.__emitChange();
}

module.exports = EateryStore;
