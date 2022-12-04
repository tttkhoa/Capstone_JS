function ProductService() {
  this.getListProductApi = function () {
    return axios({
      url: "https://6386b29ed9b24b1be3dc973e.mockapi.io/Products",
      method: "GET",
    });
  };

  this.getProductByIdApi = function (id) {
    return axios({
      url: `https://6386b29ed9b24b1be3dc973e.mockapi.io/Products/${id}`,
      method: "GET",
    });
  };
}
