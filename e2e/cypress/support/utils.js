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

// const demoText= "Test Ongoing In Selenium ";
// const MESSAGE= "Test Ongoing In Selenium ";
// const NEGATIVE_ERROR_MASSAGE = " - Element is Not Visible ❌❌❌";
// const POSITIVE_MASSAGE = "- Element is Visible ✔✔✔ ";
// const CREATE_NEW_ACCOUNT = "Create New Account";
// const IS_VISIBLE = " Text IS Visible " ;


    };
    module.exports = utils;
    