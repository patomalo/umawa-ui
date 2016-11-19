/**
 * Created by micky on 19-11-16.
 */

(function() {
  'use strict';

  /*global EventSource*/

  angular.module('umawaUi').factory('EventsServices', function () {

    var evtSource,
      eventUrl = 'http://192.168.3.110:3000/',
      running = false;

    return {
      start: function () {
        if (!this.isRunning()) {
          evtSource = new EventSource(eventUrl, {withCredentials: false});
          running = true;
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
  })()
});
