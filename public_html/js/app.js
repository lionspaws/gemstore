(function() {
    
    var app = angular.module('gemStore',[]);
    
    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    app.controller('PanelController', function(){
        this.panel = 1;

        this.selectPanel = function(setPanel) {
            this.panel = setPanel;
        };

        this.isSelected = function(checkPanel) {
            return this.panel === checkPanel;
        };
    });
    
    /*
    app.controller('GalleryController', function() {
        this.current = 0;

        this.setCurrent = function(newGallery) {
            this.current = newGallery || 0;
        };
    });
    */
   
    app.controller('ReviewController', function() {
        this.review = {};
        
        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    app.directive('productTitle', function(){
        return {
            restrict: 'E',  // element
            templateUrl: 'product-title.html'
        };
    });
    
    app.directive('storeTitle', function(){
        return {
            restrict: 'A',  // attribute
            templateUrl: 'store-title.html'
        };
    });
    
    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            /*
            controller: function(){
                this.panel = 1;

                this.selectPanel = function(setPanel) {
                    this.panel = setPanel;
                };

                this.isSelected = function(checkPanel) {
                    return this.panel === checkPanel;
                };
            },
            controllerAs: "panel"
            */
        };
    });
    
    app.directive('productGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
    
    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html'
        };
    });

    app.directive('productSpecification', function() {
        return {
            restrict: 'E',
            templateUrl: "product-specification.html"
        };
    });
    
    var gems = [
        {
            name: 'Jupiter Gem',
            price: 2.99,
            description: 'Shiny gem, that reminded it\'s discoverer, Lord Gemsworth, of the striking planet Jupiter.',
            sides: '12',
            colour: 'Mauve',
            rarity: 'Common',
            shininess: '3',
            images: [
                'img/gem-04.gif',
                'img/gem-05.gif',
                'img/gem-06.gif'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this gem!",
                    author: "alice@email.com",
                    createdOn: Date.now()
                },
                {
                    stars: 1,
                    body: "It broke really quickly",
                    author: "bob@email.com",
                    createdOn: Date.now()
                }
            ]
        },
        {
            name: 'Titan Gem',
            price: 5.99,
            description: 'Found by Lord Gemsworth in the early 12th Century, this gem is one of a kind, with no others like it having yet been discovered!',
            sides: '5',
            colour: 'Opalescent',
            rarity: 'Extremely',
            shininess: '5',
            images: [
                'img/gem-07.gif',
                'img/gem-08.gif',
                'img/gem-09.gif'
            ],
            reviews: [
                {
                    stars: 3,
                    body: "Not bad...",
                    author: "charlie@email.com",
                    createdOn: Date.now()
                }
            ]
        }
    ];
    
})();