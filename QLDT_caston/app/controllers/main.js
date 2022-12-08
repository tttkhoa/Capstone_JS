
var productservice = new productService();
function getEle(id) {
   return document.getElementById(id)
}


function getlistproduct() {
   productservice.getListproductAPI()
      .then(function (result) {
         console.log(result.data)
         renderHTML(result.data);
      })
      .catch(function (error) {
         console.log(error)
      })
}

getlistproduct();

function renderHTML(data) {
   var content = "";
   data.forEach(function (product, index) {
      content += `
      <tr>
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.screen}</td>
      <td>${product.backCamera}</td>
      <td>${product.frontCamera}</td>
      <td>
      <img width= 100px src="./../../assets/img/${product.img}"/>
      </td>
      <td>${product.desc}</td>
      <td>${product.type}</td>
      <td>
      <button class="btn btn-info" onclick= "deleteproduct('${product.id}')">delete</button>
      <button class="btn btn-danger" data-toggle="modal" data-target="#myModal" onclick = "Edit('${product.id}')">Edit</button>
      </td>
      </tr>
      `
   });
   getEle("tblDanhSachSanpham").innerHTML = content;
}

function deleteproduct(id) {
   productservice.deleteAPI(id)
      .then(function (result) {
         console.log(id)
         getlistproduct();
         alert("Delete sản phẩm")
      })
      .catch(function (error) {
         console.log(error)
      })
}

getEle("btnsanpham").onclick = function () {
   var title = "Thêm sản phẩm"

   document.getElementsByClassName("modal-title")[0].innerHTML = title;
   var button = `<button class= "btnv btn-success" onclick="addproduct()">Thêm sản phẩm</button>`
   document.getElementsByClassName("modal-footer")[0].innerHTML = button;
}


function addproduct() {
   var tenSP = getEle("Tensp").value;
   var giaBan = getEle("giaBan").value;
   var manHinh = getEle("manHinh").value;
   var backCamera = getEle("backCamera").value;
   var frontCamera = getEle("frontcamera").value;
   var hinhAnh = getEle("HinhAnh").value;
   var moTa = getEle("MoTa").value;
   var type = getEle("type").value;
   var products = new product("", tenSP, giaBan, manHinh, backCamera, frontCamera, hinhAnh, moTa, type)
   productservice.addproductAPI(products)
      .then(function (result) {
         alert("Thêm sản phẩm thành công")
         getlistproduct()
         document.getElementsByClassName("close")[0].click();

      })
      .catch(function (error) {
         console.log(error)
      })


}




function Edit(id) {
   var title = "Thay đổi thông tin";
   document.getElementsByClassName("modal-title")[0].innerHTML = title;
   var button = `<button class="btn btn-success" onclick="updateproduct('${id}')">Cập Nhật</button>`
   document.getElementsByClassName("modal-footer")[0].innerHTML = button;
   productservice.getproductAPI(id)
      .then(function (result) {
         var product = result.data;

         getEle("Tensp").value = product.name;
         getEle("giaBan").value = product.price;
         getEle("manHinh").value = product.screen;
         getEle("backCamera").value = product.backCamera;
         getEle("frontcamera").value = product.frontCamera;
         getEle("HinhAnh").value = product.img;
         getEle("MoTa").value = product.desc;
         getEle("type").value = product.type;
      })
      .catch(function (error) {
         console.log(error)
      })
}

function updateproduct(id) {
   var tenSP = getEle("Tensp").value;
   var giaBan = getEle("giaBan").value;
   var manHinh = getEle("manHinh").value;
   var backCamera = getEle("backCamera").value;
   var frontCamera = getEle("frontcamera").value;
   var hinhAnh = getEle("HinhAnh").value;
   var moTa = getEle("MoTa").value;
   var type = getEle("type").value;
   var products = new product(id, tenSP, giaBan, manHinh, backCamera, frontCamera, hinhAnh, moTa, type)
   productservice.updataAPI(products)
      .then(function () {
         alert("cập nhật thành công")
         getlistproduct();
         document.getElementsByClassName("close")[0].click();
      })
      .catch(function (error) {
         console.log(error)
      })
}

