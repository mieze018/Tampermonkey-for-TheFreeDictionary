# Tampermonkey-for-TheFreeDictionary
### Tamplemonkey用英単語学習支援UserScript
The free dictionaryの単語ページにアクセスしたときに以下の各子ウィンドウを表示する

- iconfinder, everypixelで単語を画像を検索

- 単語と定義をdeepLで翻訳する


```
// ==UserScript==
// @name         wrapper_script_in_tempermonkey
// @namespace    wrapper_script_in_tempermonkey
// @version      0.1
// @description  wrapper in tempermonkey
// @author       You
// @match        https://www.thefreedictionary.com/*
// @match        https://www.freethesaurus.com/*
// @match        https://acronyms.thefreedictionary.com/*
// @match        https://encyclopedia2.thefreedictionary.com/*
// @match        https://encyclopedia.thefreedictionary.com/*
// @match        https://medical-dictionary.thefreedictionary.com/*
// @match        https://idioms.thefreedictionary.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freethesaurus.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.slim.min.js
// @require      ローカルのscript_in_local.jsのパス
// ==/UserScript==
```
