export interface UsePageViewsOptions {
    gaMeasurementId?: string;
    ignoreHashChange?: boolean;
    disabled?: boolean;
}
export declare function usePageViews({ gaMeasurementId, ignoreHashChange, disabled, }?: UsePageViewsOptions): void;
