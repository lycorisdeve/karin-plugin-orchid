/**
 *
 * @param subscribeName
 * @param url
 * @param options
 */
export declare const fetchRSS: (subscribeName: string, url: string, options?: import("rss-parser").ParserOptions<any, any>) => Promise<{
    item: import("rss-parser").Item;
    /** 是xml */
    raw: string;
}[]>;
