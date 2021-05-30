function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if(isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var IEVersion;
      IEVersion = parseFloat(RegExp["$1"]);
      if (IEVersion == 7) {
        return 7;
      } else if(IEVersion == 8) {
        return 8;
      } else if(IEVersion == 9) {
        return 9;
      } else if(IEVersion == 10) {
        return 10;
      } else {
        return 6;//IE版本<=7
      }
  } else if(isEdge) {
    return 'edge';//edge
  } else if(isIE11) {
    return 11; //IE11
  }else{
    return -1;//不是ie浏览器
  }
}
var isIE = IEVersion();
  if (isIE == "6" || isIE == "7" || isIE == "8" || isIE == "9" || isIE == "10" || isIE == "11" ){//判断当前是否是IE浏览器
    window.location = "/kernel.html";//如果是IE内核跳转至kernel.html
}