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
      start: function () {
        if (!this.isRunning()) {
          evtSource = new EventSource(eventUrl, {withCredentials: false});
          running = true;
          evtSource.addEventListener('brokenPipe', function (boom) {
            // console.log('boom-->', boom);
          });

          evtSource.onmessage = function(event) {
            // document.getElementById("result").innerHTML += event.data + "<br>";
            // console.log('--->', event);
          };


          console.log('boom');
          var source = new EventSource('http://192.168.3.110:8080/brokenPipe', {withCredentials: false});

          source.addEventListener('open', function(e) {
           // console.log('gg', e)
          }, false);
          source.onmessage = function(e) {
            // console.log('ee', e)
          };
          // document.getElementById('stopButton').onclick=function(){
          //
          // }



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
