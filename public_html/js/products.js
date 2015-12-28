(function() {
    
    var app = angular.module('gemStore-products',[]);

    app.directive('productTitle', function(){
        return {
            restrict: 'E',  // element
            templateUrl: 'product-title.html'
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
    
})();