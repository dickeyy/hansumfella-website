"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagesViews = void 0;
const usePageViews_1 = require("./usePageViews");
function usePagesViews(options) {
    console.warn("Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme");
    (0, usePageViews_1.usePageViews)(options);
}
exports.usePagesViews = usePagesViews;
//# sourceMappingURL=usePagesViews.js.map