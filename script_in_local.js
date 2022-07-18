// ==UserScript==
// @require    https://code.jquery.com/jquery-3.6.0.slim.min.js
// ==/UserScript==
(function () {
  'use strict';
  const searchedWord = location.href.split('/')[3];
  //bing images
  $('aside#sidebar').append(`<section class="widget"><iframe src="https://www.bing.com/images/search?q=${searchedWord}&amp;FORM=HDRSC2" style=" height: 500px;"></section>`);

  const commonPopupFeatures = 'menubar=no,toolbar=no,location=no,scrollbars=no,status=no,width=250,height=500';

  //flaticon
  const openFlaticonPopupWindow = window.open(`https://www.flaticon.com/search?word=${searchedWord}`, "flaticon", `${commonPopupFeatures}`);
  openFlaticonPopupWindow.focus();


  const openIconFinderPopupWindow = window.open(`https://www.iconfinder.com/search/?q=${searchedWord}`, "icon8", `${commonPopupFeatures} top=500 `);
  openIconFinderPopupWindow.focus();

})();
