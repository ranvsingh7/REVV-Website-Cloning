function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('https://www.revv.co.in/assets/imgs/xfavi.png.pagespeed.ic.4Vf4MAB1AC.png');

// import navbar from "./component/navbar.js";
// navbar();