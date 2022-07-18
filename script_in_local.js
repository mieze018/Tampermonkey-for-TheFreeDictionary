// ==UserScript==
// @require    https://code.jquery.com/jquery-3.6.0.slim.min.js
// ==/UserScript==
(function () {
  'use strict';
  const searchedWord = location.href.split('/')[3];

  const commonPopupFeatures = 'menubar=no,toolbar=no,location=no,scrollbars=no,status=no,width=500,height=500';
  const languageSource = 'en'
  const languageTargetTranslation = 'ja'

  //flaticon
  const openFlaticonPopupWindow = window.open(`https://www.flaticon.com/search?word=${searchedWord}`, "flaticon", `${commonPopupFeatures}`);
  openFlaticonPopupWindow.focus();

  // icon finder
  const openIconFinderPopupWindow = window.open(`https://www.iconfinder.com/search/?q=${searchedWord}`, "icon8", `${commonPopupFeatures} top=580 `);
  openIconFinderPopupWindow.focus();

  //deepL
  const openDeepPopupWindow = window.open(`https://www.deepl.com/translator#en/${languageTargetTranslation}/${searchedWord}`, "deepL", `${commonPopupFeatures} top=1160 left=0 width=500 `);

  //on leave page
  window.onbeforeunload = () => {
    openFlaticonPopupWindow?.close();
    openIconFinderPopupWindow?.close();
    openDeepPopupWindow?.close();
  }

})();
