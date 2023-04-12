type EventOptions = Record<string, any> & {
    category?: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
    userId?: string;
};
export declare function event(action: string, { category, label, value, nonInteraction, userId, ...otherOptions }?: EventOptions): void;
export {};
