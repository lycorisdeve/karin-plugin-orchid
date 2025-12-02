import { karin } from 'node-karin';
declare const commandAll: ReturnType<typeof karin.command>[];
/** 表情包列表 */
export declare const memesList: import("node-karin").Command<keyof import("node-karin").MessageEventMap>;
/** 随机meme */
export declare const randomMemes: import("node-karin").Command<keyof import("node-karin").MessageEventMap>;
/** meme帮助 */
export declare const memesHelp: import("node-karin").Command<keyof import("node-karin").MessageEventMap>;
/** meme搜索 */
export declare const memesSearch: import("node-karin").Command<keyof import("node-karin").MessageEventMap>;
/** meme更新 */
export declare const memesUpdate: import("node-karin").Command<keyof import("node-karin").MessageEventMap>;
export declare const task: import("node-karin").Task;
export { commandAll };
