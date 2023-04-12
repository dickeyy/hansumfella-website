"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageViews = void 0;
const react_1 = require("react");
const router_1 = require("next/router");
const interactions_1 = require("../interactions");
function usePageViews({ gaMeasurementId, ignoreHashChange, disabled, } = {}) {
    (0, react_1.useEffect)(() => {
        if (disabled) {
            return;
        }
        const handleRouteChange = (url) => {
            var _a;
            const _gaMeasurementId = (_a = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) !== null && _a !== void 0 ? _a : gaMeasurementId;
            (0, interactions_1.pageView)({ path: url.toString() }, _gaMeasurementId);
        };
        router_1.Router.events.on("routeChangeComplete", handleRouteChange);
        if (!ignoreHashChange) {
            router_1.Router.events.on("hashChangeComplete", handleRouteChange);
        }
        return () => {
            router_1.Router.events.off("routeChangeComplete", handleRouteChange);
            if (!ignoreHashChange) {
                router_1.Router.events.off("hashChangeComplete", handleRouteChange);
            }
        };
    }, [router_1.Router.events, gaMeasurementId, ignoreHashChange]);
}
exports.usePageViews = usePageViews;
//# sourceMappingURL=usePageViews.js.map