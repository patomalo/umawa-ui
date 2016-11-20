(function () {
  'use strict';

  angular
    .module('umawaUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, EventsServices, RestServices) {
    var vm = this;
    $scope.data = {
      all: [],

      humiditySensorRate: [],
      pressionSensorRate: [],
      soilHumidityRate: []
    };

    $scope.sidebarFlag = false;

    vm.initialize = function () {
      EventsServices.start(function(msg){
        // console.log('msg', msg)
      });
    };

    $scope.switchSidebar = function(){
      $scope.sidebarFlag = !$scope.sidebarFlag;
      if($scope.sidebarFlag){
        $scope.openNav();
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
    };

    var getAllData = function () {
      RestServices.allHistory().then(function (response) {
        console.log('response', response);
      })
    };

    var updateAllData = function () {
      RestServices.allUltimateValue().then(function(response){
        $scope.data.all.push(response);
      })
    };
    //
    // humiditySensorRate: [],
    //   pressionSensorRate: [],
    //   soilHumidityRate: []

    ///////
    var getAllHumity = function(){

    };

    var updateHumity = function () {

    };

    ///////
    var getAllPression = function(){

    };

    var updatePression = function () {

    };

    ////////
    var getAllSoilHumidity = function(){

    };

    var updateSoilHumidity = function () {

    };


    // Highcharts.chart('container', {
    //   title: {
    //     text: 'Temperature Data'
    //   },
    //   xAxis: {
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    //     ]
    //   },
    //   series: [{
    //     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    //   }]
    // });

    vm.initialize();
  }
})();
