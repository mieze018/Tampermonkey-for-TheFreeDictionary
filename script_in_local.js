// ==UserScript==
// @require    https://code.jquery.com/jquery-3.6.0.slim.min.js
// ==/UserScript==
(function () {
  'use strict';
  const undecodedSearchedWord = location.href.split('/')[3];
  //url query decode
  const searchedWord = decodeURIComponent(undecodedSearchedWord).replace(/\+/g, ' ');

  const commonPopupFeatures = 'menubar=no,toolbar=no,location=no,scrollbars=no,status=no,width=500,height=500,right=0';
  const languageSource = 'en'
  const languageTargetTranslation = 'ja'

  // icon finder
  const IconFinderPopupWindow = window.open(`https://www.iconfinder.com/search/?q=${searchedWord}`, "icon8", `${commonPopupFeatures}`);

  //everyPixel
  const EveryPixelPopupWindow = window.open(`https://everypixel.com/search?q=${searchedWord}`, "everyPixel", `${commonPopupFeatures} top=580 `);

  //deepL
  const newLineForDeepL = '%0A'
  const selectorInDictionary = '#Definition > section:nth-child(1) :where(.ds-list,.ds-single)'
  const selectorInThesaurus = '#MainTxt > section:nth-child(5) > div.TM h3'
  const selectorInEncyclopedia = '#Definition > section .runseg'
  let definitionElements1 = document.querySelectorAll(`:is(${selectorInDictionary}, ${selectorInThesaurus} , ${selectorInEncyclopedia})`);
  // definitionElements1 = definitionElements1.length === 0 ? document.querySelectorAll('#Definition') : definitionElements1

  console.log(definitionElements1);

  const definitionText1All = Array.from(definitionElements1).
    map(element => element.innerText)
    .join(newLineForDeepL)
    .replace(/\n/g, newLineForDeepL);
  console.log(definitionText1All);

  const DeepPopupWindow = window.open(`https://www.deepl.com/translator#en/${languageTargetTranslation}/${searchedWord}
  ${newLineForDeepL}
  ${definitionText1All ?? ''}
  ${newLineForDeepL}${newLineForDeepL}
  `, "deepL", `${commonPopupFeatures} top=1160 width=500 `);

  // focus
  IconFinderPopupWindow.focus();
  EveryPixelPopupWindow.focus();
  DeepPopupWindow.focus();

  //on leave page
  window.onbeforeunload = () => {
    IconFinderPopupWindow?.close();
    DeepPopupWindow?.close();
    EveryPixelPopupWindow?.close();
  }

})();
