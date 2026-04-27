// ==UserScript==
// @name         Chzzk Popup Remover
// @namespace    https://github.com/sullung2yo/chzzk-popup-remover
// @version      0.1.0
// @description  치지직 방송 페이지의 굿즈 배너와 같은 거슬리는 팝업을 자동으로 숨김
// @match        https://chzzk.naver.com/live/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(() => {
    'use strict';
    const HIDDEN_SELECTORS = [
        '.streamer_shop_banner', // Need to be changed if there is an update
    ];
    GM_addStyle(`${HIDDEN_SELECTORS.join(', ')} { display: none !important; }`);
})();
