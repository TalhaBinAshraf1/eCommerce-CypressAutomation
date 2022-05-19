const utils = {


    getRanAlphNumeric: (length) => {
        let text = "";
        let charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charecterslength =charecters.length;
        for (var i = 0; i < length; i++){
          text += charecters.charAt(Math.floor(Math.random() * charecterslength));
    }
        return text;

},
  
  
getRanCharecter: (length) => {
    let text = "";
    let charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charecterslength =charecters.length;
    for (var i = 0; i < length; i++){
      text += charecters.charAt(Math.floor(Math.random() * charecterslength));
}
    return text;

},
  
  
  
  
    
    };
    module.exports = utils;
    