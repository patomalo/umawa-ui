(function() {
  'use strict';

  angular
    .module('umawaUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
