fetch(`https://api.mercadolibre.com/sites/MLM/search?q=ropainterior`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Request successful', data);
        getUnderware(data)
    })
    .catch(function (error) {
        console.log('Request failed', error)
    });


function  getUnderware(data) {
    const underWare = data.results;
    console.log(underWare);
    underWare.forEach(element => {
        console.log(element);
        const idUnderWare = element.id;
        console.log(idUnderWare);
        const titleUnderWare = element.title;
        console.log(titleUnderWare);
        const priceUnderWare = element.price;
        console.log(priceUnderWare);
        const pictureUnderWare = element.thumbnail;
        console.log(pictureUnderWare);
        
    });
}
// function getData() {

// https://api.mercadolibre.com/sites/MLM/search?q=ropainterior

// $.ajax({
//     url: ` https://api.mercadolibre.com/sites/MLM/search?q=ropainterior`,
//     contentType: 'application/json',
//     method: 'GET',

// }).done(function(response){
//     console.log('exito');
//     console.log(response);
//     var $result = response.children_categories;
//     // getBodies($result);
//     console.log($result);
// }).fail(function(handleFailure){
//     console.log('vuelve a intentar')
// })

// function getBodies($result){
//     console.log($result[0]);

//     $.ajax({
//         url: ` https://api.mercadolibre.com/categories/MLM24641`,
//         contentType: 'application/json',
//         method: 'GET',
    
//     }).done(function(response){
//         console.log('exito');
//         console.log(response);
//         var $resultBodies = response;
//         console.log($resultBodies);
//     }).fail(function(handleFailure){
//         console.log('vuelve a intentar')
//     })

// }




