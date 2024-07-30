
function swiperItemsMaker(
  swiperContainer,
  swiperUrl,
  swiperCategory,
  swiperName,
  swiperPrice
) {
  swiperContainer.insertAdjacentHTML(
    "beforeEnd",
    ` <div class="product-container swiper-slide" onclick="productContainerOnClick(event)">
     <div class="product-img-container">
         <img src="${swiperUrl}" alt="">
         <div class="product-like">
           <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
  src="https://cdn.lordicon.com/xyboiuok.json"
  trigger="morph"
  state="morph-heart"
  colors="primary:#181818"
  class="lord-icon"
  style="width:24px;height:24px">
  </lord-icon>
  
         </div>
     </div>
     <div class="product-category">${swiperCategory}</div>
     <div class="product-name">${swiperName}</div>
     <div class="product-price">${swiperPrice} T
     </div>
  </div>`
  );
}
function swiperItemsMakerWithOff(
  swiperContainer,
  swiperUrl,
  offNumber,
  swiperCategory,
  swiperName,
  swiperPrice,
  swiperAftreOffPrice
) {
  swiperContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-container  swiper-slide " onclick="productContainerOnClick(event)">
  <div class="product-img-container">
      <img src="${swiperUrl}" alt="">
      <div class="product-like">
        <lord-icon onmouseover="iconOnMouseOverEvent(event)" onmouseout="iconOnMouseOutBlackEvent(event)" onclick="iconOnClickEvent(event)" 
        src="https://cdn.lordicon.com/xyboiuok.json" 
        trigger="morph" 
        state="morph-heart" 
        colors="primary:#181818" 
        class="lord-icon" 
        style="width:24px;height:24px">
</lord-icon>

      </div>
 <div class="product-off-number">
     ${offNumber}%
 </div>
  </div>
  <div class="product-category">${swiperCategory}</div>
  <div class="product-name">${swiperName}</div>
  <div class="product-price">
 <span class="product-price-off-price">
     ${swiperPrice} T
 </span>
 <span class="product-price-after-off">
     ${swiperAftreOffPrice} T
 </span>
  </div>
</div>`
  );
}

function swiperItemsMakerNotAvail(
  swiperContainer,
  swiperUrl,
  swiperCategory,
  swiperName
) {
  swiperContainer.insertAdjacentHTML(
    "beforeEnd",
    ` <div class="product-container swiper-slide" onclick="productContainerOnClick(event)">
     <div class="product-img-container">
         <img src="${swiperUrl}" alt="">
         <div class="product-like">
           <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
  src="https://cdn.lordicon.com/xyboiuok.json"
  trigger="morph"
  state="morph-heart"
  colors="primary:#181818"
  class="lord-icon"
  style="width:24px;height:24px">
  </lord-icon>
  
         </div>
     </div>
     <div class="product-category">${swiperCategory}</div>
     <div class="product-name">${swiperName}</div>
     <div class="product-price-unavailable">فعلا موجود نیست
     </div>
  </div>`
  );
}

function searchResultMakerNotAvail(
  searchResultContainer,
  productName,
  productCategory,
  imgUrl
) {
  searchResultContainer.insertAdjacentHTML(
    "beforeEnd",
    `<li class="search-result-li" onClick="searchResultLiOnClick(event)">
  <div class="search-result-img">
      <img src="${imgUrl}">
  </div>
  <div class="search-result-info">
      <div class="search-result-category">${productCategory}</div>
      <div class="search-result-name">${productName}</div>
      <div class="product-price-unavailable">فعلا موجود نیست

      </div>
  </div>
</li>`
  );
}
function searchPageMakerNotAvail(
  searchResultContainer,
  productName,
  productCategory,
  imgUrl
) {
  searchResultContainer.insertAdjacentHTML(
    "beforeEnd",
    `<li class="search-result-li responsive-search-result-li" onClick="searchResultLiOnClick(event)">
  <div class="search-result-img responsive-search-result-img">
      <img src="${imgUrl}">
  </div>
  <div class="search-result-info">
      <div class="search-result-category">${productCategory}</div>
      <div class="search-result-name">${productName}</div>
      <div class="product-price-unavailable">فعلا موجود نیست

      </div>
  </div>
</li>`
  );
}
function searchResultMakerWithOff(
  searchResultContainer,
  productName,
  productCategory,
  productPrice,
  productPriceAfterOff,
  imgUrl
) {
  searchResultContainer.insertAdjacentHTML(
    "beforeEnd",
    `<li class="search-result-li" onClick="searchResultLiOnClick(event)">
  <div class="search-result-img">
      <img src="${imgUrl}">
  </div>
  <div class="search-result-info">
      <div class="search-result-category">${productCategory}</div>
      <div class="search-result-name">${productName}</div>
      <div class="product-price">
 <span class="product-price-off-price">
     ${productPrice} T
 </span>
 <span class="product-price-after-off">
     ${productPriceAfterOff} T
 </span>
  </div>
  </div>
</li>`
  );
}
function searchPageMakerWithOff(
  searchResultContainer,
  productName,
  productCategory,
  productPrice,
  productPriceAfterOff,
  imgUrl
) {
  searchResultContainer.insertAdjacentHTML(
    "beforeEnd",
    `<li class="search-result-li responsive-search-result-li" onClick="searchResultLiOnClick(event)">
  <div class="search-result-img responsive-search-result-img">
      <img src="${imgUrl}">
  </div>
  <div class="search-result-info">
      <div class="search-result-category">${productCategory}</div>
      <div class="search-result-name">${productName}</div>
      <div class="product-price">
 <span class="product-price-off-price">
     ${productPrice} T
 </span>
 <span class="product-price-after-off">
     ${productPriceAfterOff} T
 </span>
  </div>
  </div>
</li>`
  );
}
function searchResultMaker(
  searchResultContainer,
  productName,
  productCategory,
  productPrice,
  imgUrl
) {
  searchResultContainer.insertAdjacentHTML(
    "beforeEnd",
    `<li class="search-result-li" onClick="searchResultLiOnClick(event)">
  <div class="search-result-img">
      <img src="${imgUrl}">
  </div>
  <div class="search-result-info">
      <div class="search-result-category">${productCategory}</div>
      <div class="search-result-name">${productName}</div>
      <div class="search-result-price">${productPrice} T

      </div>
  </div>
</li>`
  );
}
function searchPageMaker(
  searchResultContainer,
  productName,
  productCategory,
  productPrice,
  imgUrl
) {
  searchResultContainer.insertAdjacentHTML(
    "beforeEnd",
    `<li class="search-result-li responsive-search-result-li" onClick="searchResultLiOnClick(event)">
  <div class="search-result-img responsive-search-result-img">
      <img src="${imgUrl}">
  </div>
  <div class="search-result-info">
      <div class="search-result-category">${productCategory}</div>
      <div class="search-result-name">${productName}</div>
      <div class="search-result-price">${productPrice} T

      </div>
  </div>
</li>`
  );
}

function singleBigImgMaker(singleBigImgContainer, bigImgUrl) {
  singleBigImgContainer.insertAdjacentHTML(
    "beforeEnd",
    `
    <img src="${bigImgUrl}" alt="">
    `
  );
}

function singleLittleImgMaker(singleLittleImgContainer, littleImgUrl) {
  singleLittleImgContainer.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class="single-product-little-img" onClick="littleImgOnClick(event)">
        <img src="${littleImgUrl}" alt="">
    </div>`
  );
}

function singleProductInfoMaker(
  singleProductNameContainer,
  infoCategory,
  infoName
) {
  singleProductNameContainer.insertAdjacentHTML(
    "afterBegin",
    `
    <div class="single-product-category">${infoCategory}</div>
    <div class="single-product-name">${infoName}</div>
`
  );
}

function singleProductPriceMaker(
  singleProductNameContainer,
  singleProductPrice
) {
  singleProductNameContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="single-product-price">
    <span class="product-price">${singleProductPrice} T</span>
    </div>`
  );
}
function singleOffPriceMaker(
  singleProductPricecontainer,
  singleProductPrice,
  offPrice,
  offPercent
) {
  singleProductPricecontainer.insertAdjacentHTML(
    "beforeEnd",
    `<span class="product-price-off-price">${singleProductPrice} T</span>
    <span class="product-price-after-off"> ${offPrice} T </span>
      <div class="single-product-off-number">
          ${offPercent}%
      </div>`
  );
}
function singleProductPriceMakerNotAvail(singleProductNameContainer) {
  singleProductNameContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="single-product-price">
    <span class="product-price-unavailable">فعلا موجود نیست</span>
    </div>`
  );
}
function productSizeBoxMaker(productSizeContainer, productSize) {
  productSizeContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-page" onClick="productPageOnclickEvent(event)">${productSize.toUpperCase()}</div>`
  );
}

function singleProductDetail(
  singleProductDetailContainer,
  productCategory,
  prodctGender,
  productColor,
  productSizes
) {
  singleProductDetailContainer.insertAdjacentHTML(
    "beforeEnd",
    ` <ul class="single-product-detail-category">
        <li>نوع کالا :</li>
        <li>${productCategory}</li>
    </ul>
    <ul class="single-product-detail-gender">
        <li> مناسب برای :</li>
        <li>${prodctGender}</li>
    </ul>
    <ul class="single-product-detail-color">
        <li>رنگ :</li>
        <li>${productColor}</li>
    </ul>
    <ul class="single-product-detail-size">
        <li>سایز :</li>
        <li>${productSizes}</li>
    </ul>`
  );
}



function addToBasketDatabase(productName,selectedSize) {
  fetch(
    "https://api.backendless.com/E00D2420-4B94-448F-91C9-CD735A45C196/2360764B-B7DE-46FA-B8FB-8DEEF590B988/data/products?pagesize=100"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((product) => {
        if (product.name == productName) {
          let basketTransaction = basketResultDB.transaction(
            "basket",
            "readwrite"
          );
          let basketStore = basketTransaction.objectStore("basket");
          let basketRequest = basketStore.getAll();
          basketRequest.addEventListener("success", (e) => {
            let basketArr = e.target.result;
            let isSameProduct = basketArr.some((product2) => {
              return (
                product2.name == productName && product2.size == selectedSize
              );
            });
            if (!isSameProduct) {
              let basketTransaction = basketResultDB.transaction(
                "basket",
                "readwrite"
              );
              let basketStore = basketTransaction.objectStore("basket");
              let basketAddRequest=basketStore.add({
                name: product.name,
                category: product.category,
                price: product.price[1] || product.price[0],
                color: product.color,
                size: selectedSize,
                imgUrl: product.imgUrl[0],
                count:1
              });
              basketAddRequest.addEventListener("success",e=>{
                iziToast.show({
                  message: "محصول مورد نظر به سبد خرید اضافه شد",
                  position: "topRight",
                  timeout: 2000,
                  rtl: true,
                  zindex: 999999999,
                  backgroundColor: "#82dd55",
                  messageColor: "#181818",
                  theme: "light",
                  progressBarColor: "#fff",
                  progressBar: false,
                });
              })
            }
          });
        }
      });
    });
}

function basketItemMaker(
  basketItemContainer,
  productUrl,
  productName,
  productCategory,
  productPrice,
  productColor,
  productSize,
  produtCount
) {
  basketItemContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-basket">
    <div class="product-basket-img">
        <img src="${productUrl}" alt="">
    </div>
    <div class="product-basket-info">
      <div class="product-basket-name-info">
        <div class="product-basket-name">${productName}</div>
        <div class="product-basket-more-info">
            <div class="product-basket-category">${productCategory}</div>
            <div class="product-basket-color">
                <span>رنگ:</span><span>${productColor}</span>
            </div>
            <div class="product-basket-size">
                <span>سایز:</span><span>${productSize}</span>
            </div>
        </div>
        <div class="product-basket-count">
            <select name="" class="product-basket-select" onChange="selectOnchangeEvent(event)" title="${produtCount}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
        </div>
      </div>
      <div class="product-basket-price-remove">
        <div class="product-basket-price">
            <div class="produt-basket-price-number">${productPrice} </div>
            <div class="product-basket-toman-sign">T</div>
        </div>
        <div class="product-basket-remove"><script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
                onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutWhiteEvent(event)" onClick="deleteFromBasketEvent(event)"
                src="https://cdn.lordicon.com/wpyrrmcq.json"
                trigger="hover"
                colors="primary:#ffffff"
                style="width:24px;height:24px">
            </lord-icon></div>
      </div>
    </div>
</div>`
  );
}

function removeFrombasketDatabase(productName,productSize) {
  let basketTransaction = basketResultDB.transaction("basket", "readwrite");
  let basketStore = basketTransaction.objectStore("basket");
  basketStore.delete([productName,productSize]);
}
function updateFrombasketDatabase(productName,productCategory,productPrice,productColor,productSize,productImgUrl,productCount) {
  let basketTransaction = basketResultDB.transaction(
    "basket",
    "readwrite"
  );
  let basketStore = basketTransaction.objectStore("basket");
  basketStore.put({
    name: productName,
    category: productCategory,
    price: productPrice,
    color: productColor,
    size: productSize,
    imgUrl: productImgUrl,
    count:productCount
  });
}


function addToWishListDatabase(productName) {
  fetch(
    "https://api.backendless.com/E00D2420-4B94-448F-91C9-CD735A45C196/2360764B-B7DE-46FA-B8FB-8DEEF590B988/data/products?pagesize=100"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((product) => {
        if (product.name == productName) {

          let wishListTransaction = wishListResultDB.transaction(
            "wishList",
            "readwrite"
          );
          let wishListStore = wishListTransaction.objectStore("wishList");
          let wishListRequest = wishListStore.getAll();
          wishListRequest.addEventListener("success", (e) => {
            let wishListArr = e.target.result;
            let isSameProduct = wishListArr.some((product2) => {
              return product2.name == productName;
            });
            if (!isSameProduct) {
              let wishListTransaction = wishListResultDB.transaction(
                "wishList",
                "readwrite"
              );
              let wishListStore = wishListTransaction.objectStore("wishList");
              wishListStore.add({
                name: product.name,
                category: product.category,
                price: product.price[1] || product.price[0],
                color: product.color,
                size: product.size,
                imgUrl: product.imgUrl[0],
                isAvail: product.isAvail,
              });
            }
          });
        }
      });
    });
}

function removeFromWishListDatabase(productName) {
  let wishListTransaction = wishListResultDB.transaction(
    "wishList",
    "readwrite"
  );
  let wishListStore = wishListTransaction.objectStore("wishList");
  wishListStore.delete(productName);
}

function wishListItemMakerNotAvail(
  wishListItemContainer,
  productUrl,
  productName,
  productCategory,
  productColor,
  productSize
) {
  wishListItemContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-basket" onClick="productBasketOnClick(event)">
    <div class="product-basket-img">
        <img src="${productUrl}" alt="">
    </div>
    <div class="product-basket-info">
        <div class="product-basket-name-info">
            <div class="product-basket-name">${productName}</div>
            <div class="product-basket-more-info">
                <div class="product-basket-category">${productCategory}</div>
                <div class="product-basket-color">
                    <span>رنگ:</span><span>${productColor}</span>
                </div>
                <div class="product-basket-size">
                    <span>سایز:</span><span>${productSize}</span>
                </div>
            </div>
            <lord-icon class="wishList-lord-icon"  src="https://cdn.lordicon.com/ulnswmkk.json" trigger="hover"
                colors="primary:#48f70d" style="width:30px;height:30px">
            </lord-icon>
        </div>
        <div class="product-basket-price-remove">
            <div class="product-basket-price">
                <div style="color:var(--main-green)">ناموجود </div>
            </div>
            <div class="product-basket-remove">
                <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutWhiteEvent(event)"
                onClick="deleteFromWishListEvent(event)" 
                src="https://cdn.lordicon.com/wpyrrmcq.json" trigger="hover"
                    colors="primary:#ffffff" style="width:24px;height:24px">
                </lord-icon>
            </div>
        </div>
    </div>
</div>`
  );
}
function wishListItemMaker(
  wishListItemContainer,
  productUrl,
  productName,
  productCategory,
  productPrice,
  productColor,
  productSize
) {
  wishListItemContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-basket" onClick="productBasketOnClick(event)">
    <div class="product-basket-img">
        <img src="${productUrl}" alt="">
    </div>
    <div class="product-basket-info">
        <div class="product-basket-name-info">
            <div class="product-basket-name">${productName}</div>
            <div class="product-basket-more-info">
                <div class="product-basket-category">${productCategory}</div>
                <div class="product-basket-color">
                    <span>رنگ:</span><span>${productColor}</span>
                </div>
                <div class="product-basket-size">
                    <span>سایز:</span><span>${productSize}</span>
                </div>
            </div>
            <lord-icon class="wishList-lord-icon"  src="https://cdn.lordicon.com/ulnswmkk.json" trigger="hover"
                colors="primary:#48f70d" style="width:30px;height:30px">
            </lord-icon>
        </div>
        <div class="product-basket-price-remove">
            <div class="product-basket-price">
                <div class="produt-basket-price-number">${productPrice} </div>
                <div class="product-basket-toman-sign">T</div>
            </div>
            <div class="product-basket-remove">
                <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutWhiteEvent(event)"
                onClick="deleteFromWishListEvent(event)" 
                src="https://cdn.lordicon.com/wpyrrmcq.json" trigger="hover"
                    colors="primary:#ffffff" style="width:24px;height:24px">
                </lord-icon>
            </div>
        </div>
    </div>
</div>`
  );
}

function isProductInWishlist(productNameArray) {

  let wishListTransaction = wishListResultDB.transaction(
    "wishList",
    "readwrite"
  );
  let wishListStore = wishListTransaction.objectStore("wishList");
  let wishListRequest = wishListStore.getAll();
  wishListRequest.addEventListener("success", (e) => {
    let wishListArr = e.target.result;
    wishListArr.forEach((product3) => {
      productNameArray.forEach((productName) => {
        if (product3.name == productName.innerHTML) {
          productName.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.classList.add(
            "heart-fill"
          );
          productName.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = `  <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
        src="https://cdn.lordicon.com/ulnswmkk.json"
        trigger="hover"
        colors="primary:#48f70d"
        style="width:24px;height:24px">
        </lord-icon>`;
        }
      });
    });
  });
}

function productPageTitleInsert(productPageTitleContainer, productPageTitle) {
  productPageTitleContainer.insertAdjacentHTML(
    "beforeEnd",
    `<span class="main-boxes-title-fa">${productPageTitle}</span>`
  );
}

function productPageProductInsert(
  productPageProductsContainer,
  imgUrl,
  productCategory,
  productName,
  productPrice
) {
  productPageProductsContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-container product-page-container" onclick="productContainerOnClick(event)">

    <div class="product-img-container">
        <img src="${imgUrl}" alt="">
        <div class="product-like">
            <lord-icon 
            onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
            src="https://cdn.lordicon.com/xyboiuok.json" trigger="morph" state="morph-heart"
                colors="primary:#181818" class="lord-icon" style="width:24px;height:24px">
            </lord-icon>

        </div>
    </div>
    <div class="product-category">${productCategory}</div>
    <div class="product-name">${productName}</div>
    <div class="product-price">${productPrice} T
    </div>
</div>`
  );
}
function productPageProductInsertAfterOff(
  productPageProductsContainer,
  imgUrl,
  offNumber,
  productCategory,
  productName,
  productPrice,
  productAfterOffPrice
) {
  productPageProductsContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-container product-page-container" onclick="productContainerOnClick(event)">

    <div class="product-img-container">
        <img src="${imgUrl}" alt="">
        <div class="product-like">
            <lord-icon 
            onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
            src="https://cdn.lordicon.com/xyboiuok.json" trigger="morph" state="morph-heart"
                colors="primary:#181818" class="lord-icon" style="width:24px;height:24px">
            </lord-icon>
            </div>
            <div class="product-off-number">
     ${offNumber}%
 </div>
    </div>
    <div class="product-category">${productCategory}</div>
    <div class="product-name">${productName}</div>
    <div class="product-price">
    <span class="product-price-off-price">
     ${productPrice} T
 </span>
 <span class="product-price-after-off">
     ${productAfterOffPrice} T
 </span>
    </div>
</div>`
  );
}
function productPageProductInsertNotAvail(
  productPageProductsContainer,
  imgUrl,
  productCategory,
  productName
) {
  productPageProductsContainer.insertAdjacentHTML(
    "beforeEnd",
    `<div class="product-container product-page-container" onclick="productContainerOnClick(event)">

    <div class="product-img-container">
        <img src="${imgUrl}" alt="">
        <div class="product-like">
            <lord-icon 
            onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
            src="https://cdn.lordicon.com/xyboiuok.json" trigger="morph" state="morph-heart"
                colors="primary:#181818" class="lord-icon" style="width:24px;height:24px">
            </lord-icon>

        </div>
    </div>
    <div class="product-category">${productCategory}</div>
    <div class="product-name">${productName}</div>
    <div class="product-price-unavailable">فعلا موجود نیست
    </div>
</div>`
  );
}
function productPageInsertByPagination(
  currentPage,
  productInOnePageCount,
  productArray,
  productPageProductsContainer
) {
  let startProductIndex = productInOnePageCount * (currentPage - 1);
  for (let i = 0; i < productInOnePageCount; i++) {
    if (productArray[startProductIndex]) {

      if (!productArray[startProductIndex].isAvail) {
        productPageProductInsertNotAvail(
          productPageProductsContainer,
          productArray[startProductIndex].imgUrl[0],
          productArray[startProductIndex].category,
          productArray[startProductIndex].name
        );
      } else if (productArray[startProductIndex].price[1]) {
        productPageProductInsertAfterOff(
          productPageProductsContainer,
          productArray[startProductIndex].imgUrl[0],
          enNumToPerNum(
            offPercent(
              productArray[startProductIndex].price[0],
              productArray[startProductIndex].price[1]
            )
          ),
          productArray[startProductIndex].category,
          productArray[startProductIndex].name,
          enNumToPerNum(productArray[startProductIndex].price[0]),
          enNumToPerNum(productArray[startProductIndex].price[1])
        );
      } else {
        productPageProductInsert(
          productPageProductsContainer,
          productArray[startProductIndex].imgUrl[0],
          productArray[startProductIndex].category,
          productArray[startProductIndex].name,
          enNumToPerNum(productArray[startProductIndex].price[0])
        );
      }
      startProductIndex++;
    } else {
      break;
    }
  }
  
}

function submitFilters(
  product,
  afterFilterArray,
  categoryFilterArray,
  colorFilterArray,
  isAvailableCheckboxBool
) {
  let isCategoryFlag = true;
  let isColorFlag = true;
  let isAvailFlag = true;
  isCategoryFlag = categoryFilterArray.some((category) => {
    return category == product.category;
  });

  isColorFlag = colorFilterArray.some((color) => {
    return color == product.color;
  });

  if (!categoryFilterArray[0]) {
    isCategoryFlag = true;
  }
  if (!colorFilterArray[0]) {
    isColorFlag = true;
  }
  if (product.isAvail == false && isAvailableCheckboxBool == true) {
    isAvailFlag = false;
  }
  if (isCategoryFlag && isColorFlag && isAvailFlag) {
    afterFilterArray.push(product);
  }
}

function checkLoginInput(
  target,
  signUpAllInput,
  signUpinvalidLoginError,
  signUpemailInput,
  signInemailInput,
  loginAllInput
) {
  if (
    target.className.includes("signup-btn") &&
    !target.previousElementSibling.firstElementChild.checked
  ) {
    iziToast.show({
      message: "برای ورود باید قوانین را بپذرید",
      position: "topRight",
      timeout: 2000,
      rtl: true,
      zindex: 999999999,
      backgroundColor: "#e23636",
      messageColor: "#fff",
      theme: "dark",
      progressBarColor: "#fff",
      progressBar: false,
    });

  } else {
    let isInputFill = null;
    for (let input of signUpAllInput) {
      if (!input.value) {
        iziToast.show({
          message: "لطفا همه موارد را پر کنید",
          position: "topRight",
          timeout: 2000,
          rtl: true,
          zindex: 999999999,
          backgroundColor: "#e23636",
          messageColor: "#fff",
          theme: "dark",
          progressBarColor: "#fff",
          progressBar: false,
        });
        isInputFill = false;
        break;
      } else {
        isInputFill = true;
      }
    }

    if (isInputFill) {
      let hasFaLetter = null;
      for (let input of signUpAllInput) {
        hasFaLetter = faLetterArray.some((letter) => {
          return input.value.includes(letter);
        });
        if (hasFaLetter) {
          iziToast.show({
            message: "لطفا با حروف انگلیسی موارد را پر کنید",
            position: "topRight",
            timeout: 2000,
            rtl: true,
            zindex: 999999999,
            backgroundColor: "#e23636",
            messageColor: "#fff",
            theme: "dark",
            progressBarColor: "#fff",
            progressBar: false,
          });
          break;
        }
      }
      if (!hasFaLetter) {
        let hasSpace = null;
        for (let input of signUpAllInput) {
          if (input.value.includes(" ")) {
            hasSpace = true;
            iziToast.show({
              message: "لطفا موارد را بدون فاصله پر کنید",
              position: "topRight",
              timeout: 2000,
              rtl: true,
              zindex: 999999999,
              backgroundColor: "#e23636",
              messageColor: "#fff",
              theme: "dark",
              progressBarColor: "#fff",
              progressBar: false,
            });
            break;
          } else {
            hasSpace = false;
          }
        }
        if (!hasSpace) {
          let hasError = null;
          for (let error of signUpinvalidLoginError) {
            if (error.style.display == "unset") {
              iziToast.show({
                message: "لطفا موارد را به درستی پر کنید",
                position: "topRight",
                timeout: 2000,
                rtl: true,
                zindex: 999999999,
                backgroundColor: "#e23636",
                messageColor: "#fff",
                theme: "dark",
                progressBarColor: "#fff",
                progressBar: false,
              });
              hasError = true;
              break;
            } else {
              hasError = false;
            }
          }
          if (!hasError) {
            let isInUsersDatabase = null;
            let isInUsersDatabase2 = null;
            fetch(
              "https://api.backendless.com/E00D2420-4B94-448F-91C9-CD735A45C196/2360764B-B7DE-46FA-B8FB-8DEEF590B988/data/all%20users?pagesize=100"
            )
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                if (target.className.includes("signup-btn")) {
                  isInUsersDatabase = data.some((user) => {
                    return signUpemailInput.value.trim() == user.email;
                  });
                  if (isInUsersDatabase) {
                    iziToast.show({
                      message: "این ایمیل قبلا در سایت ثبت شده است",
                      position: "topRight",
                      timeout: 2000,
                      rtl: true,
                      zindex: 999999999,
                      backgroundColor: "#e23636",
                      messageColor: "#fff",
                      theme: "dark",
                      progressBarColor: "#fff",
                      progressBar: false,
                    });
                  } else {
                    fetch(
                      "https://api.backendless.com/E00D2420-4B94-448F-91C9-CD735A45C196/2360764B-B7DE-46FA-B8FB-8DEEF590B988/data/all%20users?pagesize=100",
                      {
                        method: "Post",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({
                          username: userNameInput.value.trim(),
                          email: signUpemailInput.value.trim(),
                          password: signUpPasswordInput.value.trim(),
                        }),
                      }
                    ).then((res) => {
                      loginAllInput.forEach((input) => {
                        if (input.type == "checkbox") {
                          input.checked = false;
                        } else {
                          input.value = "";
                        }
                      });
                      hideElement(loginPageContainer);
                      localStorage.setItem(
                        "login-visible",
                        JSON.stringify("hidden")
                      );
                      iziToast.show({
                        message: "ثبت نام شما با موفقیت انجام شد",
                        position: "topRight",
                        timeout: 2000,
                        rtl: true,
                        zindex: 999999999,
                        backgroundColor: "#82dd55",
                        messageColor: "#181818",
                        theme: "light",
                        progressBarColor: "#fff",
                        progressBar: false,
                      });
                    });
                  }
                } else {
                  isInUsersDatabase2 = data.some((user) => {
                    return (
                      signInemailInput.value.trim() == user.email &&
                      signInPasswordInput.value.trim() == user.password
                    );
                  });
                  if (isInUsersDatabase2) {
                    loginAllInput.forEach((input) => {
                      if (input.type == "checkbox") {
                        input.checked = false;
                      } else {
                        input.value = "";
                      }
                    });
                    hideElement(loginPageContainer);
                    localStorage.setItem(
                      "login-visible",
                      JSON.stringify("hidden")
                    );
                    iziToast.show({
                      message: "خوش آمدید",
                      position: "topRight",
                      timeout: 2000,
                      rtl: true,
                      zindex: 999999999,
                      backgroundColor: "#82dd55",
                      messageColor: "#181818",
                      theme: "light",
                      progressBarColor: "#fff",
                      progressBar: false,
                    });
                  } else {
                    iziToast.show({
                      message: "ایمیل یا رمز عبور اشتباه است",
                      position: "topRight",
                      timeout: 2000,
                      rtl: true,
                      zindex: 999999999,
                      backgroundColor: "#e23636",
                      messageColor: "#fff",
                      theme: "dark",
                      progressBarColor: "#fff",
                      progressBar: false,
                    });
                  }
                }
              });
          }
        }
      }
    }
  }
}
function noticePageMaker(noticeContainer,noticeSubject){
  if(noticeSubject=='سیاست حریم خصوصی'){
    noticeContainer.insertAdjacentHTML("beforeEnd",`<div class="notice-title-container">
    <span class="notice-title">حریم خصوصی کاربران
    </span>
  </div>
  <div class="notice-text">
    فروشگاه کِرب ضمن احترامی که برای حریم شخصی کاربران قائل است، برای خرید، ثبت نظر یا استفاده از برخی امکانات وب سایت اطلاعاتی را از کاربران درخواست می‌کند تا بتواند خدماتی امن و مطمئن را به کاربران ارائه دهد. برای پردازش و ارسال سفارش، اطلاعاتی مانند آدرس، شماره تلفن و ایمیل مورد نیاز است. همچنین آدرس ایمیل و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها آدرس ایمیل و تلفن‌های رسمی و مورد تایید مشتری است و تمام مکاتبات و پاسخ‌های فروشگاه از طریق آنها صورت می‌گیرد.
  <br>
  <br>
  بنابراین درج آدرس، ایمیل و شماره تماس‌های همراه و یا ثابت توسط مشتری، به منزله مورد تایید بودن صحت آنها است و در صورتی که این موارد به صورت صحیح یا کامل درج نشده باشد، فروشگاه کِرب جهت اطمینان از صحت و قطعیت ثبت سفارش می‌تواند از مشتری، اطلاعات تکمیلی و بیشتری درخواست کند.
  <br>
  <br>
  حفظ و نگهداری رمز ورود بر عهده کاربران است و برای جلوگیری از هرگونه سوء استفاده احتمالی، کاربران نباید آن را برای شخص دیگری فاش کنند. فروشگاه کِرب هویت شخصی کاربران را محرمانه می‌داند و اطلاعات شخصی آنان را به هیچ شخص یا سازمان دیگری منتقل نمی‌کند، مگر اینکه با حکم قانونی مجبور باشد در اختیار مراجع ذی‌صلاح قرار دهد.
  <br>
  <br>
  همچنین بدین وسیله به اطلاع کاربران رسانده می‌شود که فروشگاه کِرب همانند سایر وب‌سایت‌ها از جمع‌آوری IP و کوکی‌ها استفاده می‌کند، کوکی فایلی است که به درخواست یک سایت، توسط مرورگر ایجاد می‌شود و به سایت امکان ذخیره بازدید‌های شما و مناسب‌سازی آنها را فراهم می‌نماید. بسیاری از مرورگرها امکان غیرفعال کردن کوکی را فراهم کرده‌اند، به این منظور می‌توانید راهنمای مرورگرها را مطالعه کنید. اما پروتکل، سرور و لایه‌های امنیتی فروشگاه کرب و روش‌های مناسب مدیریت داده‌ها اطلاعات کاربران را محافظت و از دسترسی‌های غیر قانونی جلوگیری می‌کند.
  <br>
  <br>
  در صورتی که تمایلی به دریافت ایمیل‌ها و خبرنامه های فروشگاه کِرب ندارید، می توانید بر روی کلمه لغو عضویت در انتهای صفحه ایمیل کلیک کنید.
  </div>`)
  }else if(noticeSubject=='شرایط استفاده'){
    noticeContainer.insertAdjacentHTML("beforeEnd",`<div class="notice-title-container">
    <span class="notice-title">شرایط و قوانین استفاده از فروشگاه آنلاین کِرب </span>
    </div>
<div class="notice-text">ورود کاربران به وب‏‌سایت فروشگاه کِرب هنگام استفاده از پروفایل شخصی، به معنای آگاه بودن و پذیرفتن شرایط و قوانین است. توجه داشته باشید که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین فروشگاه کِرب از سوی کاربر است.
<br>
<br>
    توجه داشته باشید کلیه اصول و رویه‏‌های فروشگاه آنلاین کِرب منطبق با قوانین جمهوری اسلامی ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا کاربر نیز موظف به رعایت قوانین مرتبط با کاربر است. در صورتی که در قوانین مندرج، رویه‏‌های فروشگاه کِرب تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می شود و شما توافق می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.
    <br>
    <br>
    مشتری یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم ثبت‌نام درج کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات فروشگاه کِرب اقدام کند.
</div>
    <div class="notice-title-container">
        <span class="notice-title">قوانین انتشار نظرات کاربران
        </span>
    </div>
    <div class="notice-text">
        نظر ارسال شده‌ی شما برای محصولات فروشگاه و راهنمایی سایر کاربران اهمیت بسیاری دارد و پیش از هر چیز از زمانی که برای ثبت آن صرف می‌کنید سپاسگزاریم. محتوای ارائه شده‌ی شما پس از ثبت، توسط کارشناسان فروشگاه کِرب مورد بررسی و سپس مورد تایید و پیگیری قرار خواهد گرفت. خواهشمندیم برای استفاده‌ی همگان از تجربه‌ی ارزشمند خرید خود موارد ذیل را در هنگام ثبت نظر خود مدنظر داشته باشید:
<br>
<br>
لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با بیانی رسمی و عاری از لحن تند، تمسخرو توهین باشد.<br>

محتوای ارسالی نمی‌تواند شامل اطلاعات شخصی، راه‌های ارتباطی، آدرس لینک و وب‌سایت‌ها و شبکه‌های اجتماعی باشد.<br>

در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی اطلاعات مشخص و دقیق برای راهنمایی سایر کاربران در پروسه‌ی خرید یک محصول توسط ایشان است؛ به همین منظور از درج نظرات گمراه‌کننده یا نظراتی که جنبه‌ی تبلیغاتی برای سایر محصولات یا فروشندگان داشته باشند یا منافع سایر کاربران را تحت الشعاع قرار دهند، خودداری کنید.<br>

کاربران می‌توانند نقد خود به هر بخش از وب سایت کِرب را در قسمت مربوط اعلام کنند؛ لذا هیچ‌گونه نقدی را درباره‌ی سایت یا خدمات آن در قسمت نظرات ننویسید.<br>

نظرات کاربرانی که دارای نام کاربری (نام و نام خانوادگی در حساب کاربری) نامناسب هستند مورد تایید قرار نخواهد گرفت.
    </div>
    <div class="notice-title-container">
        <span class="notice-title">
            توجه داشته باشید
        </span>
    </div>
    <div class="notice-text">
        نظرات ثبت شده توسط کاربران در وب ‌سایت، تجربه یا اطلاعات شخصی آنها در مورد محصولات است و برای نظر دهنده و فروشگاه کِرب ایجاد مسئولیت نمی‌کند. نظر باید در رابطه با کالا باشد، بنابراین برای پیگیری یا سوال درباره سفارش با امور مشتریان فروشگاه کِرب تماس بگیرید یا از طریق فرم صفحه “تماس با ما” با انتخاب موضوع پیگیری سفارش سوال یا درخواست خود را مطرح کنید. برای ارسال سایر درخواست‌ها یا پیشنهادات، انتقاد یا شکایت های خود و نیز از فرم صفحه “تماس با ما” استفاده کنید یا به ایمیل آدرس info@curbclothing.co ایمیل ارسال کنید.
    </div>`)
  }
}
function preLoaderDisappear(){
  loaderContainer.style.display="none";
  $.body.style.overflowY="scroll"
  $.body.style.overflowX="hidden"
}