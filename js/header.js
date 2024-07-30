/*/////////////// menu content ///////////////*/
let menuItemArr = $.querySelectorAll(".menu-item");
let colsContentLiArr = $.querySelectorAll(".cols-content-li");
let menuContent = $.querySelector(".menu-content");
let menu = $.querySelector(".menu");
/*/////////////// end menu content ///////////////*/
let logoContainer= $.querySelector(".logo-container");
let imgAboutcontainer= $.querySelector(".img-about-container");
let navbarOptionBasket= $.querySelector(".basket");
let navbarOptionWishlist= $.querySelector(".wishlist");
let searchResultLiArr= $.querySelectorAll(".search-result-li");
let loaderContainer=$.querySelector(".loader-container");

let footerLiArr= $.querySelectorAll(".footer-li");
/*/////////////// navbar-options ///////////////*/
let userAccount=$.querySelector(".user-account")
let loginPageContainer=$.querySelector(".login-page-container")
let loginExitBtn=$.querySelector(".login-exit-btn")
/*/////////////// end navbar-options ///////////////*/

/*/////////////// menu content ///////////////*/
function showElement(element) {
  if (!element.className.includes("visible")) {
    element.style.display = "flex";
    element.classList.toggle("visible");
  }
}
function hideElement(element) {
  if (element.className.includes("visible")) {
    element.style.display = "none";
    element.classList.toggle("visible");
  }
}
menuItemArr.forEach((menuItem) => {
  menuItem.addEventListener("mouseover", () => {
    showElement(menuContent);
  });
});
menu.addEventListener("mouseleave", () => {
  hideElement(menuContent);
});
menuContent.addEventListener("mouseover", () => {
  showElement(menuContent);
});
menuContent.addEventListener("mouseleave", () => {
  hideElement(menuContent);
});
/*/////////////// end menu content ///////////////*/

/*/////////////// navbar-options Login ///////////////*/
userAccount.addEventListener("click",()=>{
  showElement(loginPageContainer);
  localStorage.setItem("login-visible",JSON.stringify("visible"))
})
loginExitBtn.addEventListener("click",()=>{
  hideElement(loginPageContainer);
  localStorage.setItem("login-visible",JSON.stringify("hidden"))
})
window.addEventListener("load",()=>{
  if(JSON.parse(localStorage.getItem("login-visible"))=="visible"){
    showElement(loginPageContainer);
  }
  else{
    hideElement(loginPageContainer);
  }
})
/*/////////////// end navbar-options Login ///////////////*/



