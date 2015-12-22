(function(){
    
    var app = angular.module('gemStore',[]);
    
    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.99,
            description: 'Shiny',
            canPurchase: true,
            soldOut: false,
        },
        {
            name: 'Pentagonal Gem',
            price: 5.99,
            description: 'Sanguine',
            canPurchase: true,
            soldOut: false,
        },
    ];
    
})();