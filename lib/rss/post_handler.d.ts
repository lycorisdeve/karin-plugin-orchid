export declare class PostHandler {
    name: string;
    type: string;
    /**
     *
     * @param { import("rss-parser").Item } data
     * @param {object} raw json格式的数据
     * @param {object} args
     * @return {Promise<{
     *   valid?: boolean,
     *   content?: import("rss-parser").Item
     * }>} valid标识是否有效，content为处理后的数据。valid如果为false则不会被推送
     */
    handle(data: import('rss-parser').Item, raw: any, args: any): Promise<{
        valid?: boolean;
        content?: import('rss-parser').Item;
    }>;
}
export declare function collectHandlers(): Promise<Record<string, PostHandler>>;
