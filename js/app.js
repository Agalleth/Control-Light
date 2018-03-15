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
                    <button data-id="${id}" data-price="${price}"
                    onclick='addToCartOne()' href='../checkout.html'
                    class='btn item_add'>Agregar a carrito</button>
                    </div>
                </div>
            </div> `
    containerPorductsML.insertAdjacentHTML('beforeEnd', template)
    // return containerPorductsML;
};
let array = [];
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
    .reduce((a, b) => a + b, 0);
    console.log(newArr);
    
};
