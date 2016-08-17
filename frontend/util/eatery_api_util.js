const ApiUtil = {
  fetchAllEateries(success){
    $.ajax({
      url: '/foods',
      method: 'get',
      success: (response) => {
        console.log(response);
        success(response);
      }
    })
  }
  //alternate way of saying the above
  // fetchAllEateries: () => {
  //   $.ajax({
  //     url: '/foods',
  //     method: 'get',
  //     success: function(eateries){
  //       console.log(eateries);
  //     }
  //   })
  // }
};

module.exports = ApiUtil;
