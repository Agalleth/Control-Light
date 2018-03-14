const containerPorductsML = document.getElementById('productsML');
const containerOtherPorductsML = document.getElementById('productsBodiesML');
const productsTotal = document.getElementById('products');
const buyProducts = document.getElementById('productsBuy');

fetch(`https://api.mercadolibre.com/sites/MLM/search?q=ropainterior`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Request successful');
        getUnderware(data)
    })
    .catch(function (error) {
        console.log('Request failed', error)
    });


function  getUnderware(data) {
    let template = ``;
    const underWare = data.results;
    // console.log(underWare);
    underWare.forEach(element => {
        // console.log(element);
        const idUnderWare = element.id;
        // console.log(idUnderWare);
        const titleUnderWare = element.title;
        // console.log(titleUnderWare);
        const priceUnderWare = element.price;
        // console.log(priceUnderWare);
        const pictureUnderWare = element.thumbnail;
        // console.log(pictureUnderWare);

    template +=

        ` <div id="myTabContent" class="tab-content">
        <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
            <div class="agile_ecommerce_tabs">
                <div class="col-md-4 agile_ecommerce_tab_left">
                    <div class="hs-wrapper">
                        <img src="${pictureUnderWare}" alt=" " class="img-responsive" width='100px' />
                        <div class="w3_hs_bottom">
                            <ul>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h5>
                        <a href="single.html">Id: ${idUnderWare}</a>
                    </h5>
                    <h5>
                        <a href="single.html">${titleUnderWare}</a>
                    </h5>
                    <div class="simpleCart_shelfItem">
                        <p>
                            </span>
                            <i class="item_price">$ ${priceUnderWare}</i>
                        </p>
                        <p>
                            <a class="item_add" href="#">Add to cart</a>
                        </p>
                    </div>
                </div> `


    containerPorductsML.innerHTML = template;

        
    });
}


fetch(`https://api.mercadolibre.com/sites/MLM/search?q=bodies`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Request successful');
        getBodies(data);
    })
    .catch(function (error) {
        console.log('Request failed', error)
    });


function getBodies(data) {
    console.log(data.results);
    let templateTwo = ``;
    const bodies = data.results;
    // console.log(underWare);
    bodies.forEach(element => {
        // console.log(element);
        const idBodies = element.id;
        // console.log(idBodies);
        const titleBodies = element.title;
        // console.log(titleBodies);
        const priceBodies = element.price;
        // console.log(priceBodies);
        const pictureBodies = element.thumbnail;
        // console.log(pictureBodies);

    templateTwo +=

        ` <div id="myTabContent" class="tab-content">
        <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
            <div class="agile_ecommerce_tabs">
                <div class="col-md-4 agile_ecommerce_tab_left">
                    <div class="hs-wrapper">
                        <img src="${pictureBodies}" alt=" " class="img-responsive" width='100px' />
                        <div class="w3_hs_bottom">
                            <ul>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h5>
                        <a href="single.html">Id: ${idBodies}</a>
                    </h5>
                    <h5>
                        <a href="single.html">${titleBodies}</a>
                    </h5>
                    <div class="simpleCart_shelfItem">
                        <p>
                            </span>
                            <i class="item_price">$ ${priceBodies}</i>
                        </p>
                        <p>
                            <a class="item_add" href="#">Add to cart</a>
                        </p>
                    </div>
                </div>`


        containerOtherPorductsML.innerHTML = templateTwo;

        
    });

}

function addToCart(data) {
    console.log(data);
    // let carritoStorage = localStorage.getItem("products");
    // let cartIds;
    // if (carritoStorage === null) {
    //   cartIds = [];
    // } else {
    //   cartIds = JSON.parse(carritoStorage);
    // }
    // cartIds.push(id);
    // console.log(cartIds);
    // localStorage.setItem("products", JSON.stringify(cartIds));
    
  }
  
  addToCart(id)

// `<div class="checkout-right">
// <table class="timetable_sub">
//     <thead>
//         <tr>
//             <th>SL No.</th>
//             <th>Product</th>
//             <th>Product Name</th>
//             <th>Service Charges</th>
//             <th>Price</th>
//             <th>Remove</th>
//         </tr>
//     </thead>
//     <tr class="rem1">
//         <td class="invert">1</td>
//         <td class="invert-image"><a href="single.html"><img src="images/j3.jpg" alt=" " class="img-responsive" /></a></td>
//         <td class="invert">
// </td>
//         <td class="invert">Beige solid Chinos</td>
//         <td class="invert">$5.00</td>
//         <td class="invert">$200.00</td>
//         <td class="invert">
//             <div class="rem">
//                 <div class="close1"> </div>
//             </div>
//             <script>$(document).ready(function(c) {
//                 $('.close1').on('click', function(c){
//                     $('.rem1').fadeOut('slow', function(c){
//                         $('.rem1').remove();
//                     });
//                     });
//                 });
//            </script>
//         </td>
//     </tr>
// </table>
// </div>`
// pintandoseccion de nuevos productos
const drawProducts = (data) => {
    conosole.log(data);
    let products = data.products;
    let productsContainer = document.getElementById("products-container");
    products.forEach((product, index) => {
      let productsHtml = createProductHTML(product);
      productsContainer.appendChild(productsHtml);
    });
  }
  
    function createProductHTML(product) {
      let template = `<div class="agileinfo_new_products_grids">
                  <div class="col-md-4 agileinfo_new_products_grid">
                      <div class="agile_ecommerce_tab_left agileinfo_new_products_grid1">
                          <div class="hs-wrapper hs-wrapper1">
                              <img src='${product.imageUrl}' alt='blusa'/>
                              <div class="w3_hs_bottom w3_hs_bottom_sub">
                                  <ul>
                                      <li>
                                          <a href="#" data-toggle="modal" data-target="#myModal1"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <h5>Blusa</h5>
                          <div class="simpleCart_shelfItem">
                              <p><i class='${products.price}'></i></p>
                              <p><a class="item_add" href="#">Add to cart</a></p>
                          </div>
                      </div>
                  </div>
                  <div class="clearfix"> </div>
              </div>
          </div>
      </div>`
}
drawProducts(data);      
    
      // inicia sesion con facebook.
    
      var provider = new firebase.auth.FacebookAuthProvider();
    
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    
      firebase.auth().signInWithRedirect(provider);
    
      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
