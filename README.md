angular-preventorphan
=====================

angular-preventorphan is a simple Angular.js directive for preventing
[typographic orphans](http://en.wikipedia.org/wiki/Widows_and_orphans) --
single-word lines at the end of paragraphs (or any other block-level text
element).

This directive is based on [Ilan Frumer's solution for watching transcluded
content changes with interpolation](http://stackoverflow.com/a/21029880).
Thanks, Ilan!


Usage
-----

JS:

    var module = angular.module('myApp', ['ff.preventorphan']);

Markup:

    <h1 prevent-orphan>Please don't let me wrap awkwardly</h1>
