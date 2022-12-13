

function validation(){
    this.kiemtrarong = function(value,errorid,mess){
        if(value === ""){
            getEle(errorid).innerHTML = mess;
            getEle(errorid).style.display = "block";
            return false
        }
        getEle(errorid).innerHTML = "";
        getEle(errorid).style.display = "none";
        return true;
    }
  
}