let containerOtherPorductsML = document.getElementById('productsBodiesML');
let containerPorductsML = document.getElementById('productsML');

fetch(`https://api.mercadolibre.com/sites/MLM/search?q=ropainterior`)
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
})
.catch(error => {
    console.log('Request failed', error)
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
                    <button data-element=("${id}")
                    onclick='addToCartOne()'
                    class='btn item_add'>Agregar a carrito</button>
                    </div>
                </div>
            </div> `
            containerPorductsML.insertAdjacentHTML('beforeEnd',template)
            // return containerPorductsML;

    };

// let keptIdAndPrice = localStorage.setItem("products", simpleCart_items);
// console.log(keptIdAndPrice);

function addToCartOne(){
  console.log(event.target)
}






// fetch(`https://api.mercadolibre.com/sites/MLM/search?q=bodies`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log('Request successful');
//         let bodies = data.results;
//         bodies.forEach((element,index) => {
//             // console.log(element)
//             // console.log(index)
//             const id = element.id;
//             const price = element.price;
//             // console.log(id);
//             let productHTML = createProductBodiesHTML(element,id,price);
//         })
//     })
//     .catch(function (error) {
//         console.log('Request failed', error)
//     });
//
// function createProductBodiesHTML(element,id,price) {
//         templateTwo =
//             ` <div id="myTabContent" class="tab-content">
//         <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
//             <div class="agile_ecommerce_tabs">
//                 <div class="col-md-4 agile_ecommerce_tab_left">
//                     <div class="hs-wrapper">
//                         <img src="${element.thumbnail}" alt=" " class="img-responsive" width='100px' />
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
//                         <a href="single.html">Id: ${id}</a>
//                     </h5>
//                     <h5>
//                         <a href="single.html">${element.title}</a>
//                     </h5>
//                     <div class="simpleCart_shelfItem">
//                         <p>
//                             </span>
//                             <i class="item_price">$ ${price}</i>
//                         </p>
//                         <div>
//                         <button data-results=("${id}")
//                         onclick='addToCartTwo()'
//                         class='btn item_add'>Agregar a carrito</button>
//                         </div>
//                     </div>
//                 </div>`
//         containerOtherPorductsML.innerHTML = templateTwo;
//     };


//Modal
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
