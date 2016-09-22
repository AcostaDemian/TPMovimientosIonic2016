angular.module('app.controllers', ['firebase','ngCordova'])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.login = function(){
    
  };


}])
   
.controller('movimientoCtrl', ['$scope', '$stateParams','$cordovaDeviceMotion', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDeviceMotion) {

  $scope.x;
  $scope.y;
  $scope.z;
  $scope.timestamp;

  $scope.imagen= "img/pokeball.png";

  var options = { frequency: 100 };

  document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {

        if(result.x > 8)
        {
          $scope.imagen= "img/izquierda.png";
        }
        if(result.x < -8)
        {
          $scope.imagen= "img/derecha.png";
        }

        if(result.y > 8)
        {
          $scope.imagen= "img/abajo.png";
        }
        if(result.y < -8)
        {
          $scope.imagen= "img/arriba.png";
        }
        if(result.x ==0 && result.y ==0)
          $scope.imagen= "img/pokeball.png";

    });

  }, false);

}])
   
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 