"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const tslib_1 = require("tslib");
function event(action, _a = {}) {
    var { category, label, value, nonInteraction, userId } = _a, otherOptions = tslib_1.__rest(_a, ["category", "label", "value", "nonInteraction", "userId"]);
    if (!window.gtag) {
        return;
    }
    const eventOptions = Object.assign({}, otherOptions);
    if (category !== undefined) {
        eventOptions.event_category = category;
    }
    if (label !== undefined) {
        eventOptions.event_label = label;
    }
    if (value !== undefined) {
        eventOptions.value = value;
    }
    if (nonInteraction !== undefined) {
        eventOptions.non_interaction = nonInteraction;
    }
    if (userId !== undefined) {
        eventOptions.user_id = userId;
    }
    window.gtag("event", action, eventOptions);
}
exports.event = event;
//# sourceMappingURL=event.js.map