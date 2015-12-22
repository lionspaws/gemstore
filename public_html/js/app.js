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
            images: [
                'img/gem-04.gif',
                'img/gem-05.gif',
                'img/gem-06.gif'
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.99,
            description: 'Sanguine',
            images: [
                'img/gem-07.gif',
                'img/gem-08.gif',
                'img/gem-09.gif'
            ]
        },
    ];
    
})();