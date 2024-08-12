// ==UserScript==
// @name        屏蔽weblio广告
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  屏蔽weibo进入时的广告
// @author        wood
// @match        *://www.weblio.jp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var weblio= /www.weblio.jp/
    var currentURL = window.location.href;

    setTimeout(function () {
         if(weblio.test(currentURL)){
          document.getElementsByClassName("fc-message-root")[0].remove();
          document.getElementsByClassName("firstDictVideoAd")[0].remove();
        }
    }, 2100);
})();