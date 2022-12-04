const getEle = (id) => document.getElementById(id);
const productService = new ProductService();

const getListProduct = () => {
  productService
    .getListProductApi()
    .then(function (result) {
      // console.log(result);
      // console.log(result.data);
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

getListProduct();

const renderHTML = (data) => {
  let content = "";

  data.forEach((product) => {
    content += `
        <div class="col-xl-4 col-md-6 col-sm-12 align-items-stretch d-flex card-item" >
        <div class="card">
          <img src=".././img/${product.img}" class="card-img-top img-fluid" />
          <div class="card-body">
            <h5 class="card-text">${product.name}</h5>
            <p class="card-desc">
            ${product.desc}
            </p>
            <div class="card-footer d-flex justify-content-around">
              <p class="card-price">$${product.price}</p>
              <button class="btn myBtn" id="btnAddToCart" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
      </div>
        `;
  });

  getEle("productItem").innerHTML = content;
};

const selectPhone = async () => {
  let products = await productService.getListProductApi();
  let selectArr = [];

  //   console.log(products.data);

  if (getEle("selectProduct").selectedIndex === 0) {
    products.data.forEach((product) => {
      selectArr.push(product);
    });
  } else if (getEle("selectProduct").selectedIndex === 2) {
    products.data.forEach((product) => {
      if (product.type === "samsung") {
        selectArr.push(product);
      }
    });
  } else {
    products.data.forEach((product) => {
      if (product.type === "iphone") {
        selectArr.push(product);
      }
    });
  }

  //   if (getEle("selectProduct").selectedIndex === 1) {
  //     products.data.forEach((product) => {
  //       if (product.type === "iphone") {
  //         selectArr.push(product);
  //       }
  //     });
  //   }

  //   if (getEle("selectProduct").selectedIndex === 2) {
  //     products.data.forEach((product) => {
  //       if (product.type === "samsung") {
  //         selectArr.push(product);
  //       }
  //     });
  //   }

  renderHTML(selectArr);
};

var cart = [];
console.log(cart);

const checkCart = (data, cartItem) => {
  let index = -1;
  data.forEach((item, i) => {
    if (item.product.id === cartItem.product.id) {
      index = i;
    }
  });
  if (index !== -1) {
    data[index].quantity++;
  }
  if (index === -1) {
    data.push(cartItem);
  }
};

const addToCart = async (id) => {
  await productService
    .getProductByIdApi(id)
    .then(function (result) {
      var productAdd = result.data;
      let cartItem = {
        product: productAdd,
        quantity: 1,
      };
      checkCart(cart, cartItem);
      setLocalStorage();
      console.log(cart);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function setLocalStorage() {
  var dataString = JSON.stringify(cart);
  localStorage.setItem("CART", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("CART")) {
    var dataString = localStorage.getItem("CART");
    cart = JSON.parse(dataString);
    renderTable(cart);
  }
}
