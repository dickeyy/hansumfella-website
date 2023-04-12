type PageViewOptions = {
    title?: string;
    location?: string;
    path?: string;
    sendPageView?: boolean;
    userId?: string;
};
export declare function pageView({ title, location, path, sendPageView, userId }?: PageViewOptions, measurementId?: string): void;
export {};
