/// <reference types="gtag.js" />
type ConsentOptions = {
    arg: Gtag.ConsentArg;
    params: Gtag.ConsentParams;
};
export declare function consent({ arg, params }: ConsentOptions): void;
export {};
