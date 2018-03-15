const containerOtherPorductsML = document.getElementById('productsBodiesML');
let containerPorductsML = document.getElementById('productsML');

fetch(`https://api.mercadolibre.com/sites/MLM/search?q=ropainterior`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log('Request successful');
        let underWare = data.results;
        underWare.forEach((element, index) => {
            // console.log(element)
            // console.log(index)
            const id = element.id;
            const price = element.price;
            // console.log(id);
            let productHTML = createProductHTML(element, id, price);
        })
    })
    .catch(error => {
        console.log('Request failed', error)
    });

function createProductHTML(element, id, price) {

    let template =

        ` <div id="myTabContent" class="tab-content">
    <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
            <div class="col-md-4 col-xs-4 col-sm-4 col-lg-4 agile_ecommerce_tab_left">
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
                    <button data-id="${id}" data-price="${price}"
                    onclick='addToCartOne()' href='../checkout.html'
                    class='btn item_add'>Agregar a carrito</button>
                    </div>
                </div>
            </div>
          </div>
         `
    containerPorductsML.insertAdjacentHTML('beforeEnd', template)
    // return containerPorductsML;


};

let array = [];
let sumPaypal;

function addToCartOne() {
    let obj = event.target.dataset;
    // console.log(obj);
    // let dataId = event.target.dataset.id;
    // console.log(dataId);
    // let dataPrice = event.target.dataset.price;
    // console.log(dataPrice);


    array.push(obj);
    // console.log(array);

    let product = localStorage.setItem("item", JSON.stringify(array))
    // console.log(product);
    let getProduct = localStorage.getItem("item");
    // console.log(getProduct)

    array = JSON.parse(getProduct);

    const newArr = array.map(element => {
        // console.log(element);
        let price = element.price;
        // console.log(price);
        let id = element.id;
        // console.log(id);
        return parseInt(price);

    })
    sumPaypal = newArr.reduce((a, b) => a + b, 0);


    // buttonPaypal(sum);
    // console.log(num);
};
// console.log(sumPaypal);

function buttonPaypal() {

    paypal.Button.render({

        env: 'sandbox', // sandbox | production

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: 'AZ9QqN7g_ufxmmG3HNwkEh5VdWwrsHmO0Y7XrhhBnTIp8dwuuu8AAtw196aZjl-r44W4POGP6DVu8FWK'
        },

        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,

        // payment() is called when the button is clicked
        payment: function(data, actions) {

            // Make a call to the REST api to create the payment
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '0.01', currency: 'USD' }
                        }
                    ]
                }
            });
        },

        // onAuthorize() is called when the buyer approves the payment
        onAuthorize: function(data, actions) {

            // Make a call to the REST api to execute the payment
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#paypal-button-container');

}
