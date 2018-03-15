var givens = {
    newProducts: [
      {
        title: "Blusa",
        imageUrl: "images/1blusa-tirantes.jpg",
        description: "Blusa CONTROL LIGHT tirantes encaje frente y lateral",
        id: 1003,
        price: 199,
        color: ['blanco', 'negro' , 'nude' , 'azul Marino','fiusha'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Blusa",
        imageUrl: "images/2camisa.jpg",
        description: "Camisa CONTROL LIGHT encaje lateral",
        id: 1004,
        price: 179,
        color: ['blanco', 'negro' , 'nude'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Blusa",
        imageUrl: "images/3blusa-encaje.jpg",
        description: "Blusa CONTROL LIGHT manga corta encaje lateral",
        id: 1005,
        price: 199,
        color: ['blanco', 'negro'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Blusa",
        imageUrl: "images/4manga-tres-cuartos.jpg",
        description: "Blusa CONTROL LIGHT manga tres cuartos encaje lateral",
        id: 1006,
        price: 199,
        color: ['blanco', 'negro'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Blusa",
        imageUrl: "images/5blusa.jpg",
        description: "Blusa CONTROL LIGHT tirantes encaje lateral y pedreria",
        id: 1007,
        price: 199,
        color: ['negro' , 'nude', 'gris'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Blusa",
        imageUrl: "images/6blusa.jpg",
        description: "Blusa CONTROL LIGHT red lateral y encaje al frente",
        id: 1008,
        price: 199,
        color: ['negro' , 'nude'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Blusa",
        imageUrl: "images/7blusa.jpg",
        description: "Blusa CONTROL RED bicolor ",
        id: 1009,
        price: 199,
        color: ['negro' , 'rojo', 'amarillo'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  15% Elastano',
        stock : 20
      },
      {
        title: "Pantaleta",
        imageUrl: "images/1pantaleta.jpg",
        description: "Pantaleta Faja CONTROL LIGHT corte frances",
        id: 2001,
        price: 69,
        color: ['negro' , 'rojo', 'amarillo'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodón',
        stock : 20
      },
      {
        title: "Pantaleta",
        imageUrl: "images/2pantaleta.jpg",
        description: "Pantaleta Faja CONTROL LIGHT corte frances algodón",
        id: 2002,
        price: 79,
        color: ['negro' , 'rojo', 'amarillo', 'rosa','nude'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '35% Nylon  12% Elastano y 53% Algodon',
        stock : 20
      },
      {
        title: "Boxer",
        imageUrl: "images/1boxer.jpg",
        description: "Boxer Faja CONTROL RED bicolor",
        id: 2004,
        price: 99,
        color: ['negro/rojo' , 'negro/amarillo', 'blanco/rojo'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      },
      {
        title: "Boxer",
        imageUrl: "images/2boxer.jpg",
        description: "Boxer Faja CONTROL LIGHT corte frances",
        id: 2005,
        price: 79,
        color: ['negro' , 'rojo', 'amarillo','blanco','nude'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      },
      {
        title: "Cinturilla",
        imageUrl: "images/cinturilla.jpg",
        description: "Cinturilla CONTROL LIGHT RED bicolor",
        id: 2006,
        price: 99,
        color: ['negro/plata' , 'negro/oro'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      },
      {
        title: "Bikini",
        imageUrl: "images/bikini.jpg",
        description: "Bikini Abundancia",
        id: 2008,
        price: 59,
        color: ['negro' , 'rojo', 'amarillo'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      },
      {
        title: "Body",
        imageUrl: "images/body-boxer.jpg",
        description: "Body Boxer CONTROL LIGHT RED de tirantes puente de algodón",
        id: 6000,
        price: 240,
        color: ['negro' , 'nude'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      },
      {
        title: "Body",
        imageUrl: "images/body-straple.jpg",
        description: "Body straples CONTROL LIGHT RED manga corta",
        id: 6002,
        price: 240,
        color: ['negro' , 'nude'],
        talla : ['CH','MED','GDE','XG', 'XPlus'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      },
      {
        title: "Baby Doll",
        imageUrl: "images/babydoll.jpg",
        description: "Baby Doll CONTROL LIGHT con bikini y medias",
        id: 7000,
        price: 240,
        color: ['negro'],
        talla : ['CH','MED','GDE','XG'],
        composicion: '85% Nylon  12% Elastano y 3% Algodon',
        stock : 20
      }
    ]
  };
let boxProducts = document.getElementById('box-products');
// pintando seccion de nuevos productos
function newBoxProducts(givens) {
  let template = ``;
  let products = givens.newProducts;
  products.forEach(element => {
  const idProducts = element.id;
  const titleProduct = element.title;
  const descriptionProduct = element.description;
  const priceProduct = element.price;
  const pictureProduct = element.imageUrl;
  const colorProduct = element.color;
  const sizeProduct = element.talla;
  const composicionProduct = element.composicion;
  const stockProduct = element.stock;
template +=
` <div id="myTabContent" class="tab-content">
<div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">

        <div class="col-md-4 agile_ecommerce_tab_left">
            <div class="hs-wrapper">
                <img src="${pictureProduct}" alt=" " class="img-responsive" width='100px' />
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
                <a href="single.html">${titleProduct}</a>
            </h5>
            <h5>${"$" + priceProduct}</h5>
        </div>`
boxProducts.innerHTML = template;
});
}
newBoxProducts(givens);
