// ==UserScript==
// @require    https://code.jquery.com/jquery-3.6.0.slim.min.js
// ==/UserScript==
(function () {
  'use strict';
  const undecodedSearchedWord = location.href.split('/')[3];
  //url query decode
  const searchedWord = decodeURIComponent(undecodedSearchedWord).replace(/\+/g, ' ');

  const commonPopupFeatures = 'menubar=no,toolbar=no,location=no,scrollbars=no,status=no,width=500,height=500';
  const languageSource = 'en'
  const languageTargetTranslation = 'ja'

  // icon finder
  const openIconFinderPopupWindow = window.open(`https://www.iconfinder.com/search/?q=${searchedWord}`, "icon8", `${commonPopupFeatures} top=580 `);
  openIconFinderPopupWindow.focus();

  //deepL
  const newLineForDeepL = '%0A'
  const definitionElements1 = document.getElementsByClassName('ds-single');
  const definitionElements2 = document.getElementsByClassName('ds-list');
  const definitionText1 = Array.from(definitionElements1).map(element => element.innerText).join(newLineForDeepL).replace(/\n/g, newLineForDeepL);
  console.log(definitionText1);
  const definitionText2 = Array.from(definitionElements2).map(element => element.innerText).join(newLineForDeepL);
  // console.log(definitionText);
  const openDeepPopupWindow = window.open(`https://www.deepl.com/translator#en/${languageTargetTranslation}/${searchedWord}
  ${newLineForDeepL}${newLineForDeepL}
  ${definitionText1}
  ${newLineForDeepL}${newLineForDeepL}
  ${definitionText2}
  `, "deepL", `${commonPopupFeatures} top=1160 left=0 width=500 `);


  //on leave page
  window.onbeforeunload = () => {
    openIconFinderPopupWindow?.close();
    openDeepPopupWindow?.close();
  }

})();
