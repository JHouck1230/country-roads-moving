'use strict';

var app = angular.module('cormo');

app.directive('scrollProgress', ['$window', function($window) {
    var fps = 30;
    return function(scope, element, attr) {
      var meter = angular.element(attr.scrollProgress);

      var throttledHandler = _.throttle(function() {
        var top = element.offset().top;
        var bottom = top + element.outerHeight();
        var scrollTop = angular.element($window).scrollTop();

        var meterOffsetParent = meter.offsetParent();
        if (meterOffsetParent.css('position') === 'fixed') {
          scrollTop = scrollTop + meterOffsetParent.outerHeight();
        }

        var progress = ((bottom - scrollTop)/(bottom - top)) * 100;

        if (progress > 100) progress = 100;
        else if (progress < 0) progress = 0;

        meter.css('width', progress + '%');
      }, 1000/fps);

      angular.element($window).on('scroll resize', throttledHandler);
    }
  }]);