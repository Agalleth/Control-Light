const containerOtherPorductsML = document.getElementById('productsBodiesML');
let containerPorductsML = document.getElementById('productsML');

fetch(`https://api.mercadolibre.com/sites/MLM/search?q=ropainterior`)
.catch(error => {
    console.log('Request failed', error)
})
.then(response => {
    return response.json();
})
.then(data => { 
    console.log('Request successful');
    let underWare = data.results;
    underWare.forEach((element,index) => {
        // console.log(element)
        // console.log(index)
        const id = element.id;
        const price = element.price;
        // console.log(id);
        let productHTML = createProductHTML(element,id,price);
    })
});

function createProductHTML(element,id,price) {

    let template =
  
    ` <div id="myTabContent" class="tab-content">
    <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
        <div class="agile_ecommerce_tabs">
            <div class="col-md-4 agile_ecommerce_tab_left">
                <div class="hs-wrapper">
                    <img src="${element.thumbnail}" alt=" " class="img-responsive" width='100px' />
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
                    <a href="single.html">Id: ${id}</a>
                </h5>
                <h5>
                    <a href="single.html">${element.title}</a>
                </h5>
                <div class="simpleCart_shelfItem">
                    <p>
                        </span>
                        <i class="item_price">$ ${price}</i>
                    </p>
                    <div>
                    <button 
                    onclick='addToCartOne(${id},${price})'
                    class='btn item_add'>Agregar a carrito</button>
                    </div>
                </div>
            </div> `

            containerPorductsML.insertAdjacentHTML('beforeEnd',template)  
            // return containerPorductsML;


        }

// let localStorageProduct = localStorage.setItem('productsTotal', JSON.stringify(id));
// let infoPrice = localStorage.getItem('productsTotal');
// console.log(localStorageProduct);
// console.log(infoPrice);

let keptIdAndPrice = localStorage.setItem("products", simpleCart_items);
console.log(keptIdAndPrice);

const addToCartOne = ((id,price) => {
    console.log(id,price);
    var info = localStorage.getItem("products");
    console.log(info);
    // let carritoStorage = localStorage.getItem(productsTotal);
    // console.log(carritoStorage);
    // let cartIds;
    // if (carritoStorage === null) {
    //   cartIds = [];
    // } else {
    //   cartIds = JSON.parse(carritoStorage);
    // }
    // cartIds.push(id);
    // console.log(cartIds);
    // localStorage.setItem(productsTotal, JSON.stringify(cartIds));
})



// function getUnderware(data) {
//     let template = ``;
//     const underWare = data.results;
//     // console.log(underWare);
//     underWare.forEach(element => {
//         // console.log(element);
//         const idUnderWare = element.id;
//         // console.log(idUnderWare);
//         const titleUnderWare = element.title;
//         // console.log(titleUnderWare);
//         const priceUnderWare = element.price;
//         // console.log(priceUnderWare);
//         const pictureUnderWare = element.thumbnail;
//         // console.log(pictureUnderWare);

//         template +=

//             ` <div id="myTabContent" class="tab-content">
//         <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
//             <div class="agile_ecommerce_tabs">
//                 <div class="col-md-4 agile_ecommerce_tab_left">
//                     <div class="hs-wrapper">
//                         <img src="${pictureUnderWare}" alt=" " class="img-responsive" width='100px' />
//                         <div class="w3_hs_bottom">
//                             <ul>
//                                 <li>
//                                     <a href="#" data-toggle="modal" data-target="#myModal">
//                                         <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <h5>
//                         <a href="single.html">Id: ${idUnderWare}</a>
//                     </h5>
//                     <h5>
//                         <a href="single.html">${titleUnderWare}</a>
//                     </h5>
//                     <div class="simpleCart_shelfItem">
//                         <p>
//                             </span>
//                             <i class="item_price">$ ${priceUnderWare}</i>
//                         </p>
//                         <div>
//                         <button 
//                         onclick='addToCartOne(${idUnderWare})'
//                         class='btn item_add'>Agregar a carrito</button>
//                         </div>
//                     </div>
//                 </div> `


//         containerPorductsML.innerHTML = template;

//         addToCart(idUnderWare, titleUnderWare, priceUnderWare, pictureUnderWare)
//     });
// }


// fetch(`https://api.mercadolibre.com/sites/MLM/search?q=bodies`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log('Request successful');
//         getBodies(data);
//     })
//     .catch(function (error) {
//         console.log('Request failed', error)
//     });


// function getBodies(data) {
//     // console.log(data.results);
//     let templateTwo = ``;
//     const bodies = data.results;
//     // console.log(underWare);
//     bodies.forEach(element => {
//         // console.log(element);
//         const idBodies = element.id;
//         // console.log(idBodies);
//         const titleBodies = element.title;
//         // console.log(titleBodies);
//         const priceBodies = element.price;
//         // console.log(priceBodies);
//         const pictureBodies = element.thumbnail;
//         // console.log(pictureBodies);

//         templateTwo +=

//             ` <div id="myTabContent" class="tab-content">
//         <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
//             <div class="agile_ecommerce_tabs">
//                 <div class="col-md-4 agile_ecommerce_tab_left">
//                     <div class="hs-wrapper">
//                         <img src="${pictureBodies}" alt=" " class="img-responsive" width='100px' />
//                         <div class="w3_hs_bottom">
//                             <ul>
//                                 <li>
//                                     <a href="#" data-toggle="modal" data-target="#myModal">
//                                         <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <h5>
//                         <a href="single.html">Id: ${idBodies}</a>
//                     </h5>
//                     <h5>
//                         <a href="single.html">${titleBodies}</a>
//                     </h5>
//                     <div class="simpleCart_shelfItem">
//                         <p>
//                             </span>
//                             <i class="item_price">$ ${priceBodies}</i>
//                         </p>
//                         <div>
//                         <button data-results-id=${idUnderWare}
//                         onclick='addToCartTwo(${idUnderWare})'
//                         class='btn item_add'>Agregar a carrito</button>
//                         </div>
//                     </div>
//                 </div>`


//         containerOtherPorductsML.innerHTML = templateTwo;


//     });

// }

// function addToCartOne(idUnderWare){
//     console.log(idUnderWare);

// }

// function addToCartTwo(idUnderWare){
//     console.log(idUnderWare);

// }

// function addToCart(idUnderWare, titleUnderWare, priceUnderWare, pictureUnderWare) {
//     // console.log(data);

//     console.log(idUnderWare, titleUnderWare, priceUnderWare, pictureUnderWare);

    // let carritoStorage = localStorage.getItem(productsTotal);
    // console.log(carritoStorage);
    // let cartIds;
    // if (carritoStorage === null) {
    //   cartIds = [];
    // } else {
    //   cartIds = JSON.parse(carritoStorage);
    // }
    // cartIds.push(id);
    // console.log(cartIds);
    // localStorage.setItem(productsTotal, JSON.stringify(cartIds));

// }


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




// const login = document.getElementById('login')

// var provider = new firebase.auth.GoogleAuthProvider();
// //login
// login.click(function () {
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then(function (result) {
//             var token = result.credential.accesToken;
//             var usuario = result.user;
//             console.log(result);
//             console.log(usuario);
//             guardaDatos(usuario);

//             localStorage.setItem('usuario', JSON.stringify(usuario))
//             window.location.href = 'index.html';


//         }).catch(function (error) {
//             console.log(error);
//             var errorCode = error.code;
//             console.log(errorCode);
//             var errorMessage = error.message;
//             console.log(errorMessage);
//             // The email of the user's account used.
//             var email = error.email;
//             console.log(email);
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             console.log(credential);
//         });

// });

// //Guardar datos automaticamente
// function guardaDatos(user) {
//     var usuario = {
//         uid: user.uid,
//         nombre: user.displayName,
//         email: user.email,
//         foto: user.photoURL
//     };
//     firebase.database().ref("Control light/" + user.uid)
//         .set(usuario)
// };


// //leyendo de la base de guardaDatos
// firebase.database().ref("Control light")
//     .on("child_added", function (s) {
//         var user = s.val();

//     });

// var usuario = localStorage.getItem('usuario');
// usuario = JSON.parse(usuario)


// firebase.database().ref("user/" + usuario.uid).set(usuario);

// $('#photo').attr('src', usuario.photoURL);

