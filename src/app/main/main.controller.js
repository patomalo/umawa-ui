(function () {
  'use strict';

  angular
    .module('umawaUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, EventsServices) {
    var vm = this;

    vm.initialize = function () {
      // EventsServices.start();
      //
      // EventsServices.addListeners({
      //   open: function (msg) {
      //     console.log('msg')
      //   }, error: function (data) {
      //     console.log('error-->', data)
      //   }
      // });
    };

    $scope.openNav = function () {
      document.getElementById("mySidenav").style.width = "50%";
      document.getElementById("main").style.marginLeft = "50%";
    };

    $scope.closeNav = function(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    };

    Highcharts.chart('container', {
      title: {
        text: 'Temperature Data'
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
