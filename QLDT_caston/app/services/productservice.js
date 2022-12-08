
function productService() {
this.arr=[]

   
    this.getListproductAPI = function () {
        return axios({
            url: "https://6386b29ed9b24b1be3dc973e.mockapi.io/Products",
            method: "Get",
        })
    }

    this.deleteAPI = function (id) {
        return axios({
            url: `https://6386b29ed9b24b1be3dc973e.mockapi.io/Products/${id}`,
            method: "Delete",


        })
    }

    this.addproductAPI = function (product) {
        return axios({
            url: "https://6386b29ed9b24b1be3dc973e.mockapi.io/Products",
            method: "post",
            data: product,
        })

    }
    this.getproductAPI = function (id) {
        return axios({
            url: `https://6386b29ed9b24b1be3dc973e.mockapi.io/Products/${id}`,
            method: "Get",

        })
    }
    this.updataAPI = function(product) {
        return axios({
            url: `https://6386b29ed9b24b1be3dc973e.mockapi.io/Products/${product.id}`,
            method: "put",
            data: product,
        })




    }
    this.timkiem=function(){
        var mangtimkiem=[];
       for(var i = 0;i<this.arr.length; i++){
        var products=this.arr[i];




        
       }
var products= this.arr
    }

}

