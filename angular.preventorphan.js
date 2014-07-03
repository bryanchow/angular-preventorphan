/*jslint browser:true */
/*global angular */

/*
 * angular-preventorphan
 * https://github.com/bryanchow/angular-preventorphan
 */

(function(angular) {

    var module = angular.module('ff.preventorphan', []);

    var regex = new RegExp(/\s+([^\s]+)$/);
    var replacement = "&nbsp;$1";

    module.directive('preventOrphan', [
        '$interpolate',
        function($interpolate) {
            return {
                compile: function (tElement, tAttrs) {
                    var interpolateFn = $interpolate(tElement.html(), true);
                    tElement.empty();
                    return function(scope, elem, attrs){
                        scope.$watch(interpolateFn, function (value) {
                            elem.html(value.replace(regex, replacement));
                        });
                    };
                }
            };
        }
    ]);

}(angular));
