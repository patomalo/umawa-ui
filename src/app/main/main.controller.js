(function () {
  'use strict';

  angular
    .module('umawaUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, EventsServices) {
    var vm = this;
    $scope.sidebarFlag = false;

    $scope.flags = {
      uno:false,
      dos:false,
      tres:false,
      cuatro:false
    };

    vm.initialize = function () {
      EventsServices.start(function(msg){
        // console.log('msg', msg)
      });
    };

    $scope.switchSidebar = function(){
      $scope.sidebarFlag = !$scope.sidebarFlag;
      if($scope.sidebarFlag){
        $scope.openNav();
        $scope.clickSensor({code:'luz'})
      }
      else{
        $scope.closeNav();
      }
      EventsServices.start(pipeBroke);
    };
    var pipeBroke = function(event){
      console.log(JSON.parse(event.data));
    };

    $scope.openNav = function () {
      document.getElementById("mySidenav").style.width = "42%";
      document.getElementById("main").style.marginLeft = "58%";
      $scope.sidebarFlag = true;
    };

    $scope.closeNav = function(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      $scope.sidebarFlag = false;
    };

    $scope.clickSensor = function(sensor){
      console.log('sensor', sensor);
      if(sensor.code === 'luz'){
        $scope.flags.uno = true;
        $scope.flags.dos = false;
        $scope.flags.tres = false;
        $scope.flags.cuatro = false;
      }
      if(sensor.code === 'hsuelo'){
        $scope.flags.uno = false;
          $scope.flags.dos = true;
          $scope.flags.tres = false;
          $scope.flags.cuatro = false;
      }
      if(sensor.code === 'hrelativa'){
        $scope.flags.uno = false;
          $scope.flags.dos = false;
          $scope.flags.tres = true;
          $scope.flags.cuatro = false;
      }
      if(sensor.code === 'flujo'){
        $scope.flags.uno = false;
          $scope.flags.dos = false;
          $scope.flags.tres = false;
          $scope.flags.cuatro = true;
      }

      // $scope.flags.
        // if(){}
    };


    Highcharts.chart('container1', {
      title: {
        text: 'Luz'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    });

    Highcharts.chart('container2', {
      title: {
        text: 'Humedad del Suelo'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    });

    Highcharts.chart('container3', {
      title: {
        text: 'Humedad Relativa'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    });

    Highcharts.chart('container4', {
      title: {
        text: 'Flujo'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    });

    vm.initialize();
  }
})();
