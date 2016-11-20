/* global malarkey:false, moment:false */
(function () {
  'use strict';

  angular
    .module('umawaUi')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('URL_SERVER', 'http://192.168.3.110:8080/');

})();
