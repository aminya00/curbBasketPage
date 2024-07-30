function switchToProductPage(searchInDbBy,fillProductPageBy,productPageTitle){
    location.href=`https://aminya00.github.io/curbProductsPage?k1=${searchInDbBy}&k2=${fillProductPageBy}&k3=${productPageTitle}#1`
}
function switchToSingleProductPage(productName){
    location.href=`https://aminya00.github.io/curbSinglePage?k1=${productName}`
}
function switchToHomePage(){
    location.href=`https://aminya00.github.io/curbHomePage`
}
function switchToWishlistPage(){
    location.href=`https://aminya00.github.io/curbWishlistPage`
}
function switchToBasketPage(){
    location.href=`https://aminya00.github.io/curbBasketPage`
}
function switchToNoticePage(noticeName){
    location.href=`https://aminya00.github.io/curbNoticePage?k1=${noticeName}`
}



logoContainer.addEventListener("click",e=>{
    switchToHomePage()
})
imgAboutcontainer.addEventListener("click",e=>{
    switchToHomePage()
})
menuItemArr.forEach(menuItem=>{
    menuItem.addEventListener("click",e=>{
        if(menuItem.className.includes("store")){
            switchToProductPage("collection","all product","همه محصولات")
        }else if(menuItem.className.includes("menu-item men")){
            switchToProductPage("gender","مرد","مردانه")
            
        }else if(menuItem.className.includes("women")){
            switchToProductPage("gender","زن","زنانه")
            
        }else if(menuItem.className.includes("accessories")){
            switchToProductPage("collection","accessories","لوازم جانبی")
    
        }
    })
})
colsContentLiArr.forEach(colsContentLi=>{
    colsContentLi.addEventListener("click",e=>{
        switchToProductPage("category",`${(colsContentLi.innerHTML).trim()}`,`${(colsContentLi.innerHTML).trim()}`)
    })
})
navbarOptionBasket.addEventListener("click",e=>{
    switchToBasketPage()
})
navbarOptionWishlist.addEventListener("click",e=>{
    switchToWishlistPage()
})

function searchResultLiOnClick(e){
    switchToSingleProductPage((e.currentTarget.lastElementChild.firstElementChild.nextElementSibling.innerHTML).trim())
}
function productContainerOnClick(e){
    if(!(e.target.onmouseover)){
        switchToSingleProductPage((e.currentTarget.lastElementChild.previousElementSibling.innerHTML).trim())
    }
}
footerLiArr.forEach(footerLi=>{
    footerLi.addEventListener("click",e=>{
        if((footerLi.innerHTML).trim()=="همه محصولات"){
            switchToProductPage("collection", "all product", "همه محصولات");
        }else if((footerLi.innerHTML).trim()=="محصولات جدید"){
            switchToProductPage(
                "collection",
                `new arrival`,
                "محصولات جدید"
              );             
        }else if((footerLi.innerHTML).trim()=="محبوب‌‌ترین ها"){
            switchToProductPage("collection","most popular","محبوب‌‌ترین ها")
            
        }else if((footerLi.innerHTML).trim()=="هودی" || (footerLi.innerHTML).trim()=="تی‌شرت"){
            switchToProductPage("category",`${(footerLi.innerHTML).trim()}`,`${(footerLi.innerHTML).trim()}`)
    
        }else if((footerLi.innerHTML).trim()=="سیاست حریم خصوصی" || (footerLi.innerHTML).trim()=="شرایط استفاده"){
            switchToNoticePage(`${(footerLi.innerHTML).trim()}`)
        }
    })
})

function productBasketOnClick(e){
    if(!(e.target.onmouseover)){
        switchToSingleProductPage((e.currentTarget.lastElementChild.firstElementChild.firstElementChild.innerHTML).trim())
    }
}

