import type { ParserOptions } from 'rss-parser';
/** RSS Preset Type */
type RSSPresetType = string;
/** RSS Preset */
type RSSPreset = object;
/** 基本配置 */
export type Config = {
    /** API 地址 */
    api: string;
    /** 机器人发表情是否引用回复用户消息 */
    reply: boolean;
    /** 是否强制前缀 */
    forcePrefix: boolean;
    /** 若开启强制前缀，必须以前缀开头 */
    prefix: string;
    /** 主人反撅 */
    masterProtect: boolean;
    /** 用户输入的图片最大支持的文件大小，单位为MB */
    maxFileSize: number;
    /** 填了部分境外请求会走代理加速 */
    proxy: string;
    luck: {
        /** 今日运气每个人每天最多获取次数 */
        maxNum: number;
        /** 若为true，主人可以无限刷新 */
        masterInfinite: boolean;
        /** 低运气模板 */
        lowTemplate: string;
        /** 中运气模板 */
        middleTemplate: string;
        /** 高运气模板 */
        highTemplate: string;
        /** 最高运气模板 */
        maxTemplate: string;
        /** 无限运气模板 */
        infiniteTemplate: string;
    };
    tools: {
        /** IP 源 */
        ip_source: Array<'ip-api.com' | 'ip.sb' | 'ipinfo.io'>;
    };
    rss: {
        /** 控制检查更新频率 */
        cron?: string;
        /** 发送主动推送消息的bot，填入字符串qq号，例如["12345667"] */
        sender?: Array<string>;
        /** 默认发送到哪些群，如["12345678", "23456789"] */
        default_group: Array<string>;
        /** rsshub地址，可以填自建地址或官方反代 */
        rsshub_url?: string | string[];
        /** 默认图片背景 */
        background: string;
        /** 订阅rss列表 */
        subscribe_list: Array<{
            /** 名称，必须唯一 */
            name: string;
            /** RSS 链接 */
            url: string;
            /** 发送到哪些群 */
            group?: Array<string>;
            /** 使用预设 */
            preset: RSSPresetType;
            /** 预设的配置 */
            presetConfig: RSSPreset;
            /** 图片背景 */
            background: string;
            /** 后处理器列表 */
            postHandlers: Array<{
                /** 处理器名称 */
                name: string;
                /** 处理器参数 */
                args: object;
            }>;
            /** RSS 解析器配置 */
            rssParserConfig: ParserOptions<any, any>;
        }>;
    };
};
export {};
