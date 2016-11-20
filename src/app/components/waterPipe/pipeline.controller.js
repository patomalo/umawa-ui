(function () {
  'use strict';

  angular
    .module('umawaUi')
    .controller('PipeController', PipeController);

  function PipeController($scope, $interval) {
    $scope.pipeFlag = false;

    $('.reset').hide();
    var water = $('.tube .water');
    $interval(function(){
      $scope.pipeFlag = !$scope.pipeFlag;
      $scope.change($scope.pipeFlag);
    },3000);

    $scope.change = function(x){
      x ? $scope.start():$scope.reset();
    };

    $scope.start = function(){
      $('.start').hide();
      $(water[0]).animate({
        width: "100%"
      }, 420, 'linear', function(){
        $(water[1]).animate({
          height: "100%"
        }, 190, 'linear', function(){
          $(water[2]).animate({
            width: "100%"
          }, 190, 'linear', function(){
            $(water[3]).animate({
              height: "100%"
            }, 80, 'linear', function(){
              $(water[4]).animate({
                width: "100%"
              }, 80, 'linear', function(){
                $(water[5]).animate({
                  height: "100%"
                }, 370, 'linear', function(){
                  $('.reset').show();
                });
              });
            });
          });
        });
      });
    };

    $scope.reset = function(){
      $(this).hide();
      $('.tube.x .water').css('width', '0%');
      $('.tube.y .water').css('height', '0%');
      $('.start').show();
    };


  }
})();
