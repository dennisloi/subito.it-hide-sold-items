// ==UserScript==
// @name         Hide Sold Items on Subito.it
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Hide ads marked as "Venduto" on Subito.it listings
// @match        *://www.subito.it/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("Sold Items Hider Script Running");

    function removeVendutoItems() {
        const soldBadges = document.querySelectorAll('span.item-sold-badge');

        soldBadges.forEach(badge => {
            const card = badge.closest('.SmallCard-module_card__3hfzu');
            if (card) {
                console.log('Removing a card marked Venduto');
                card.remove();
            }
        });
    }

    // Initial run
    removeVendutoItems();

    // Observe dynamically loaded content
    const observer = new MutationObserver(() => {
        removeVendutoItems();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
