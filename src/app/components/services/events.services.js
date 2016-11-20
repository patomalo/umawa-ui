/**
 * Created by micky on 19-11-16.
 */

(function () {
  'use strict';
  angular.module('umawaUi').factory('EventsServices', function (URL_SERVER) {
    var evtSource,
      eventUrl = URL_SERVER+'brokenPipe',
      running = false;

    return {
      start: function (callback) {
        if (!this.isRunning()) {
          evtSource = new EventSource(eventUrl, {withCredentials: false});
          running = true;
          evtSource.onmessage = callback
        }
      },
      stop: function () {
        if (evtSource) {
          evtSource.close();
        }
        running = false;
      },
      addListeners: function (listeners) {
        for (var key in listeners) {
          if (listeners.hasOwnProperty(key)) {
            evtSource.addEventListener(key, listeners[key], false);
          }
        }
      },
      removeListeners: function (listeners) {
        for (var key in listeners) {
          if (listeners.hasOwnProperty(key)) {
            evtSource.removeEventListener(key, listeners[key]);
          }
        }
      },
      isRunning: function () {
        return running;
      }
    };
  });
})();
