"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageView = void 0;
function pageView({ title, location, path, sendPageView, userId } = {}, measurementId) {
    var _a;
    const gaMeasurementId = (_a = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) !== null && _a !== void 0 ? _a : measurementId;
    if (!gaMeasurementId || !window.gtag) {
        return;
    }
    const pageViewOptions = {};
    if (title !== undefined) {
        pageViewOptions.page_title = title;
    }
    if (location !== undefined) {
        pageViewOptions.page_location = location;
    }
    if (path !== undefined) {
        pageViewOptions.page_path = path;
    }
    if (sendPageView !== undefined) {
        pageViewOptions.send_page_view = sendPageView;
    }
    if (userId !== undefined) {
        pageViewOptions.user_id = userId;
    }
    window.gtag("config", gaMeasurementId, pageViewOptions);
}
exports.pageView = pageView;
//# sourceMappingURL=pageView.js.map