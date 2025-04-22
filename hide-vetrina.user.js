// ==UserScript==
// @name         Hide featured Items on Subito.it
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide ads marked as "Vetrina" (featured) on Subito.it listings
// @match        *://www.subito.it/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("Vetrina Hider Script Running");

    function removeVetrinaItems() {
        const cards = document.querySelectorAll('.SmallCard-module_card__3hfzu');

        cards.forEach(card => {
            const badge = card.querySelector('span.index-module_badge__LFSGS');
            if (badge && badge.textContent.trim().toLowerCase() === 'vetrina') {
                console.log('Removing featured card');
                card.remove();
            }
        });
    }

    // Initial run
    removeVetrinaItems();

    // Observe dynamically loaded content
    const observer = new MutationObserver(() => {
        removeVetrinaItems();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
