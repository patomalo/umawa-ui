/**
 * Created by micky on 19-11-16.
 */

(function () {
  'use strict';
  angular.module('umawaUi').factory('RestServices', function (URL_SERVER, $q) {
    return {
      allHistory: function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: URL_SERVER + '/eventHistoric'
        }).then(function (response) {
          deferred.resolve(response);
        }, function (response) {
          deferred.reject(response);
        });
        return deferred.promise;
      },

      allUltimateValue: function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: URL_SERVER + '/event'
        }).then(function (response) {
          deferred.resolve(response);
        }, function (response) {
          deferred.reject(response);
        });
        return deferred.promise;
      },

      allSensorValue: function (param) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: URL_SERVER + '/eventHistoric/' + param
        }).then(function (response) {
          deferred.resolve(response);
        }, function (response) {
          deferred.reject(response);
        });
        return deferred.promise;
      },

      ultimateSensorValue: function (param) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: URL_SERVER + '/event/' + param
        }).then(function (response) {
          deferred.resolve(response);
        }, function (response) {
          deferred.reject(response);
        });
        return deferred.promise;
      }
    }
  });
})();
