let productBasketContainer = $.querySelector(".product-basket-container");
let productPriceBasketArray=[]
let productPricesArray=[]
let priceOfProduct = $.querySelector(".price-of-product div span");
let priceOfDelivery = $.querySelector(".price-of-delivery div span");
let totalPriceContainer = $.querySelector(".total-price-container div span");
let mainBoxesTitleFa = $.querySelector(".main-boxes-title-fa");

let basketResultDB=null
let myBasketDB=indexedDB.open("basketDB",1)
myBasketDB.addEventListener("success",(e)=>{
  basketResultDB=e.target.result
  basketFetch()
  preLoaderDisappear()  
})
myBasketDB.addEventListener("upgradeneeded",(e)=>{
  basketResultDB=e.target.result
  if (!basketResultDB.objectStoreNames.contains("basket")){
    basketResultDB.createObjectStore("basket",{
      keyPath:["name","size"]
    })
  }
})

function basketFetch(){
let basketTransaction=basketResultDB.transaction("basket","readwrite")
  let basketStore=basketTransaction.objectStore("basket")
  let basketRequest=basketStore.getAll()
  basketRequest.addEventListener("success",(e)=>{
    let basketArr=e.target.result;
    productBasketContainer.innerHTML=""
    productPriceBasketArray=[]
    if(basketArr[0]){
        basketArr.forEach(product => {
            basketItemMaker(productBasketContainer,product.imgUrl,product.name,product.category,enNumToPerNum(product.price),product.color,product.size,product.count)
            productPriceBasketArray.push(product.price)
        });
    let productBasketSelectArray = $.querySelectorAll(".product-basket-select");
    productBasketSelectArray.forEach(select=>{

        for (let option of select.children) {
            if(option.value==select.title){
                option.selected="selected"
                break;
            }
        }
    })
    }else{
        mainBoxesTitleFa.innerHTML="سبد خرید خالی است"
    }
    calculateProductPrices()
  })
}


function calculateProductPrices(){
    let basketItemNum=0
    let findSelectElement
    let totalPrice=0
    productPricesArray=[]
    basketItemNum=0
    let productBasketArray=$.querySelectorAll(".product-basket");
    productBasketArray.forEach(basketChild=>{
        findSelectElement=(basketChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild).value
        productPricesArray.push(findSelectElement*productPriceBasketArray[basketItemNum])
        basketItemNum++
    });
    productPricesArray.forEach(eachPrice=>{
            totalPrice+=eachPrice
        })
        priceOfProduct.innerHTML=enNumToPerNum(totalPrice)
        priceOfDelivery.innerHTML=enNumToPerNum(32000)
        totalPriceContainer.innerHTML=enNumToPerNum(32000+totalPrice)
}
function selectOnchangeEvent(e){
    calculateProductPrices()
    let productName=e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
    let selectedSize=e.target.parentElement.previousElementSibling.lastElementChild.lastElementChild.innerHTML
    let productCount=e.target.value
    let basketTransaction = basketResultDB.transaction(
        "basket",
        "readwrite"
      );
      let basketStore = basketTransaction.objectStore("basket");
      let basketRequest = basketStore.getAll();
      basketRequest.addEventListener("success", (e) => {
        let basketArr = e.target.result;
        basketArr.forEach((product2) => {
            if(product2.name == productName && product2.size == selectedSize){
                updateFrombasketDatabase(product2.name,product2.category,product2.price,product2.color,product2.size,product2.imgUrl,productCount)
            } 
        });
      });
}
function deleteFromBasketEvent(e){
    
    removeFrombasketDatabase(e.target.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML,e.target.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.innerHTML)
    basketFetch()
}
