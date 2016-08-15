const ApiUtil = {
  fetchAllEateries(success){
    $.ajax({
      url: '/foods',
      method: 'get',
      success: (response) => {
        success(response);
      }
    })
  }
};

module.exports = ApiUtil;
