// ==UserScript==
// @name         Chzzk Popup Remover
// @namespace    https://github.com/sullung2yo/chzzk-popup-remover
// @version      0.2.0
// @description  치지직 방송 페이지의 팝업, 불필요한 배너와 같은 거슬리는 요소를 자동으로 숨김
// @match        https://chzzk.naver.com/live/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(() => {
    'use strict';
    const HIDDEN_SELECTORS = [ // Need to be changed if there is an update
        '.streamer_shop_banner',
        '[class*="aside_banner__"]',
    ];
    GM_addStyle(`${HIDDEN_SELECTORS.join(', ')} { display: none !important; }`);
})();
