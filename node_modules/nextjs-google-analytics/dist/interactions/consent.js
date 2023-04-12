"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consent = void 0;
function consent({ arg, params }) {
    if (!window.gtag) {
        return;
    }
    window.gtag('consent', arg, params);
}
exports.consent = consent;
//# sourceMappingURL=consent.js.map