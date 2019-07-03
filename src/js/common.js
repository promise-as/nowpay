// 弹框
function dialog(obj,text) {
  obj.alertText=text;
  obj.isDialog=true;
  setTimeout(function () {
    obj.isDialog=false;
  },3000)
}