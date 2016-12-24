//http://plnkr.co/edit/iUBtrrLAF2fUtqFEre4r?p=preview
//http://cssdeck.com/labs/pure-css-slider-target
//http://cssdeck.com/labs/pure-css3-content-slider/
//http://bashooka.com/coding/pure-css3-image-sliders/
//http://www.trevordjones.com/angularjs-slick-image-carousel/


var module = angular.module('grocery', ['ui.bootstrap','ngMessages']);

module.controller('navController', function ($scope) {

});

module.controller('slideController', function ($scope) {
	$scope.slides = [];
	$scope.slides.push({heading: 'Cats Creative Lifesaver Image 1!', image: 'resources/img/image-1.jpg', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"});
	$scope.slides.push({heading: 'Dogs Creative Lifesaver Image 2!', image: 'resources/img/image-2.jpg', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"});
	$scope.slides.push({heading: 'Lion Creative Lifesaver Image 3!', image: 'resources/img/image-3.jpg', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"});
  	
  	$scope.setActive = function(idx) {
	    $scope.slides[idx].active=true;
  	}
  	$scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
});

module.controller('productListController', function ($scope) {
	$scope.product_collection = [];
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
  	
  	$scope.setActive = function(idx) {
	    $scope.slides[idx].active=true;
  	}
  	$scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
});

module.controller('newArivalController', function ($scope) {
	
	var newArivals = $scope.newArivals = [];
	
	$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35"});
	$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35"});
  	
  	$scope.setActive = function(idx) {
	    $scope.newArivals[idx].active=true;
  	}

  	$scope.getSecondIndex = function(index)
	  {
	    if(index-newArivals.length>=0)
	      return index-newArivals.length;
	    else
	      return index;
	  }
});

module.controller('loginController', function($scope) {


  $scope.submit = function() {
    if ($scope.loginForm.$valid)
     alert('send to server: ' + $scope.loginData.email);
  }

  // $scope.rememberMe = function($event){
  //   if($event.target.checked){
  //       angular.element($event.target).addClass('notRem');
  //   } else{
  //     angular.element($event.target).removeClass('notRem');
  //   }
  // }

});

module.controller('registerController', function($scope) {

  // var model = this;

  //  model.registerData = {
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   };
  
});

module.directive('highlightOnFocus',function(){
  return {
    restrict: 'A',
    link: function (scope, element, attrs){  
      element.on('focus', function(){
        if(element.siblings(".field-label").hasClass("wrapped")){
          element.parent().parent().addClass('focus');
        } else{
          element.parent().addClass('focus');
        }
        element.siblings(".field-label").css("display","block");
      });
      element.on('blur', function(){ 
        if(element.val() != ""){
          element.siblings(".field-label").css("display","none");
        }
        if(element.siblings(".field-label").hasClass("wrapped")){
          element.parent().parent().removeClass('focus');
        } else{
          element.parent().removeClass('focus');
        }
      });
    }
  };
});

module.directive("passwordStrength", function(){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    return {        
        restrict: 'A',
        require: '?ngModel',
        scope: {
          passwordStrength: '='
        },
        link: function(scope, element, attrs,ctrl){ 
          if(!ctrl) return;
          
          ctrl.$validators.passwdStrength = function(modelValue, viewValue) {
            var value = modelValue || viewValue;
              if(angular.isDefined(value)){
                  if(strongRegex.test(value)) {
                      scope.passwordStrength = 'strong';
                      ctrl.$setValidity("passwordWeak",true);
                      return true;
                  } else if(mediumRegex.test(value)) {
                      scope.passwordStrength = 'medium';
                      ctrl.$setValidity("passwordWeak",true);
                      return true;
                  } else if(value != '') {
                      scope.passwordStrength = 'weak';
                      ctrl.$setValidity("passwordWeak",false);
                      return false;
                  }
              }
              scope.passwordStrength = 'required';
              return false;
          }
        }
    };
});
module.directive("confirmPassword", function(){
    return {        
        restrict: 'A',
        require: 'ngModel',
        scope: {
          confirmPassword: '=confirmPassword'
        },
        link: function(scope, element, attrs,ngModel){ 
          if(!ngModel) return;
          ngModel.$validators.confirmPassword = function(modelValue, viewValue) {
            var value = modelValue || viewValue;
              if(angular.isDefined(value)){
                if(scope.confirmPassword === value) {
                    scope.confirmStrength = 'valid';
                    ngModel.$setValidity("confirmInvalid",true);
                    return true;
                } else {
                    scope.confirmStrength = 'invalid';
                    ngModel.$setValidity("confirmInvalid",false);
                    return false;
                }
              }
              return false;
          }
          scope.$watch('confirmPassword',function(){
               ngModel.$validate();
          });
        }
    };
});

module.directive('numbersOnly', function(){
   return {
     restrict: 'A',
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           // this next if is necessary for when using ng-required on your input. 
           // In such cases, when a letter is typed first, this parser will be called
           // again, and the 2nd time, the value will be undefined
           if (inputValue == undefined) return '' 
           var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
           if (transformedInput!=inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }         

           return transformedInput;         
       });
     }
   };
});



/*var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function(value) {
              console.log(value);
              // if(scope.otherModelValue ==  undefined) return;
              ngModel.$validate();
            });
        }
    };
};
 
module.directive("compareTo", compareTo);*/


//Inject in $cookieStore, SwagService and app config
module.factory('CartService', function() {

	// Private items object
	var items = {};
	
	// Update cookies
	function updateItemsCookie() {
		
	}

	// Angular factories return service objects
	return {

		getItems: function() {
			// Initialize itemsCookie variable
            		var itemsCookie;
			// Check if items object has been populated
	                if(!items.length) {
	                    // Populate items object from cookie
	                    
	                    // Check if cookie exists
	                    if(itemsCookie) {
	                        // Loop through cookie and get the item by it's id
	                        // Add each item to the items object and set it's quantity
	                        
	                    }
	                }
	                // Return the items object
            		return items;
		},

		addItem: function(item) {
			// Checks if item already exists
			// If it doesn't exist, adds quantity property with value of 1 then
			if(!items[item.id]) {
				item.quantity = 1;
				items[item.id] = item;
			}
			// If it exists, updates the quantity
			else {
				items[item.id].quantity += 1;
			}
			// pushes the item onto the items array
//			var total = 0;
//			angular.forEach(items, function(item) {
//			    total += parseInt(item.quantity);
//			});
//			console.log(total);
            // Update cookie
    		updateItemsCookie();
		},

		removeItem: function(id) {
			// Removes an item from the items object
			if(items[id].quantity > 1){
				items[id].quantity -= 1;
			} else{
				delete items[id];
			}
            // Update cookie
            updateItemsCookie();
		},

		emptyCart: function() {
			// Re-initialize items object to an empty object
            items = {};
            // Remove items cookie using $cookieStore
	                
		},

		getItemCount: function() {
			// Initialize total counter
            var total = 0;
            // Loop through items and increment the total by the item quantity
            angular.forEach(items, function(item) {
                total += parseInt(item.quantity);
            });
            // Returns number of items, including item quantity
            return total;
		},

		getCartSubtotal: function() {
			// Initialize the total counter
            var total = 0;
            // Loop through the items and multiply the quantity by the item price and increment the total
            angular.forEach(items, function(item) {
            	   total += parseInt(item.quantity) * parseFloat(item.specialPrice || item.price);
            	});
            // Return the item quantity times item price for each item in the array
            return total;
		},

		getCartTotal: function() {
			return this.getCartSubtotal();
		},

		checkout: function() {
			// Impliment the checkout
		}
			
	};

});


module.controller('CartController', function($scope,CartService) {
	
var newArivals = $scope.newArivals = [];
	
$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35",id:"1"});
$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35",id:"2"});
$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35",id:"3"});
$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35",id:"4"});
$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35",id:"5"});
$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35",id:"6"});
$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35",id:"7"});
$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35",id:"8"});
$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35",id:"9"});
$scope.newArivals.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35",id:"10"});
$scope.newArivals.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35",id:"11"});
$scope.newArivals.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35",id:"12"});
  	
  	$scope.setActive = function(idx) {
	    $scope.newArivals[idx].active=true;
  	}

  	$scope.getSecondIndex = function(index)
	  {
	    if(index-newArivals.length>=0)
	      return index-newArivals.length;
	    else
	      return index;
	  }

  	$scope.product_collection = [];
  	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35", id:"1"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35", id:"2"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35", id:"3"});
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35", id:"4"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35", id:"5"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35", id:"6"});
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35", id:"7"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35", id:"8"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35", id:"9"});
	$scope.product_collection.push({product_alt: 'Cats Creative Lifesaver Image 1!', product_image: 'resources/img/image-1.jpg', product_title: "Product 1", product_sp: "30", product_mrp: "35", id:"10"});
	$scope.product_collection.push({product_alt: 'Dogs Creative Lifesaver Image 2!', product_image: 'resources/img/image-2.jpg', product_title: "Product 2", product_sp: "30", product_mrp: "35", id:"11"});
	$scope.product_collection.push({product_alt: 'Lion Creative Lifesaver Image 3!', product_image: 'resources/img/image-3.jpg', product_title: "Product 3", product_sp: "30", product_mrp: "35", id:"12"});
  	
  	$scope.setActive = function(idx) {
	    $scope.slides[idx].active=true;
  	}
  	$scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
  	
	// Set the items on the scope to the items in the CartService using the getItems method
	$scope.items = CartService.getItems();
	
	$scope.addItem = function(item) {
		// Pass the item into the addItem method of the CartService
		CartService.addItem(item);
	};

	$scope.getItemCount = function() {
		// Return the item count from the CartService
		return CartService.getItemCount();
	};
	
	$scope.getCartSubtotal = function() {
		// Return the subtotal using the getCartSubtotal method of the CartService
		return CartService.getCartSubtotal();
	};
    	
	$scope.getCartTotal = function() {
		// Return the cart total using the getCartTotal methode of the CartService
		return CartService.getCartTotal();
	};
	
	$scope.removeItem = function(id) {
		// Pass the item id into the removeItem method of the CartService
		CartService.removeItem(id);
	};
	
	$scope.emptyCart = function() {
		// Invoke the emptyCart method of the CartService
		CartService.emptyCart();
	}

	$scope.checkout = function() {
		// Invoke the checkout method of the CartService
		CartService.checkout();
	};

});


module.controller('CartCountController', function($scope,CartService) {
	$scope.getItemCount = function() {
		// Return the item count from the CartService
//		console.log("In CartCountController"+CartService.getItemCount());
		return CartService.getItemCount();
	};
	
	$scope.show = function() {
//		Show all items on to the console.
		var items = CartService.getItems();
		angular.forEach(items, function(item) {
     	   console.log(item.id+" - "+item.product_title+" - "+item.quantity);
     	});
	};
});