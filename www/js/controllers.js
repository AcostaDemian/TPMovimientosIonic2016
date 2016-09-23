angular.module('app.controllers', ['firebase','ngCordova'])

.controller('menuCtrl', ['$scope', '$stateParams','$cordovaMedia' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaMedia) {

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.login = function(){    

  };


}])
   
.controller('movimientoCtrl', ['$scope', '$stateParams','$cordovaDeviceMotion','$cordovaMedia', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDeviceMotion,$cordovaMedia) {

  $scope.x;
  $scope.y;
  $scope.z;  
  $scope.timestamp;

  $scope.bocaarriba=0;
  $scope.bocaabajo=0;
  $scope.abajo=0;
  $scope.arriba=0;
  $scope.izquierda=0;
  $scope.derecha=0;

  $scope.imagen= "img/pokeball.png";

  var options = { frequency: 1000 };

  document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {

        //izquierda
        if(result.x > 5 && $scope.izquierda==0) 
        {
          window.plugins.NativeAudio.play('izquierda');
          $scope.imagen= "img/izquierda.png";

          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=1;
          $scope.derecha=0;

          $scope.x= result.x;
          $scope.y= result.y;
          $scope.z = result.z;
        }
        //derecha
        if(result.x < -5 && $scope.derecha==0)
        {
          window.plugins.NativeAudio.play('derecha');
          $scope.imagen= "img/derecha.png";

          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=1;
        }
        //abajo
        if(result.y > 5 && $scope.abajo==0)
        {
          window.plugins.NativeAudio.play('abajo');
          $scope.imagen= "img/abajo.png";


          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=1;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=0;
        }
        //arriba
        if(result.y < -5 && $scope.arriba==0)
        {
          window.plugins.NativeAudio.play('arriba');
          $scope.imagen= "img/arriba.png";


          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=1;
          $scope.izquierda=0;
          $scope.derecha=0;
        }
        //centro
        if(result.x <1 && result.x >-1 && result.y <1 && result.y >-1)
        {
          $scope.imagen= "img/pokeball.png";
        }
        //boca arriba
        if(result.z > 10.1 && result.z < 10.9 && $scope.bocaarriba==0)
        {
          try{
              window.plugins.NativeAudio.play('BocaArriba');
          }
          catch(error){
              console.log("No es un celular");
          }

          $scope.bocaarriba=1;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=0;
        }
        //boca abajo
        if(result.z < -9 && result.z > -10 && $scope.bocaabajo ==0)
        {
          try{
              window.plugins.NativeAudio.play('BocaAbajo');
          }
          catch(error){
              console.log("No es un celular");
          }

          $scope.bocaarriba=0;
          $scope.bocaabajo=1;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=0;
        }

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
 