// ==UserScript==
// @require    https://code.jquery.com/jquery-3.6.0.slim.min.js
// ==/UserScript==
(function () {
  'use strict';
  const searchedWord = location.href.split('/')[3];
  $('aside#sidebar').append(`<section class="widget"><iframe src="https://www.bing.com/images/search?q=${searchedWord}&amp;FORM=HDRSC2" style=" height: 500px;"></section>`);

})();
