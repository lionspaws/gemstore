(function() {
    
    var app = angular.module('gemStore',[]);
    
    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    app.controller('PanelController', function() {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    
    app.controller('GalleryController', function() {
        this.current = 0;

        this.setCurrent = function(newGallery) {
            this.current = newGallery || 0;
        };
    });
    
    app.controller('ReviewController', function() {
        this.review = {};
        
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.99,
            description: 'Shiny',
            sides: '12',
            images: [
                'img/gem-04.gif',
                'img/gem-05.gif',
                'img/gem-06.gif'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this gem!",
                    author: "alice@email.com"
                },
                {
                    stars: 1,
                    body: "It broke really quickly",
                    author: "bob@email.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.99,
            sides: '5',
            description: 'Sanguine',
            images: [
                'img/gem-07.gif',
                'img/gem-08.gif',
                'img/gem-09.gif'
            ],
            reviews: [
                {
                    stars: 3,
                    body: "Not bad...",
                    author: "charlie@email.com"
                }
            ]
        },
    ];
    
})();