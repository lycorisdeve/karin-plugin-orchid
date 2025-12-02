import type { WeatherRSSPreset } from './forecast.js';
import type { TelegramChannelRSSPreset } from './telegram.js';
import type { BilibiliDynamicChannelRSSPreset } from './bilibili.js';
import type { GithubCommitRSSPreset, GithubIssueRSSPreset, GithubPullRSSPreset, GithubReleaseRSSPreset } from './github.js';
/**
 * @typedef { 'github_commit' | 'github_release' | 'github_issue' | 'github_pr' | 'telegram_channel' | 'bilibili_dynamic' | 'earthquake' | 'weather_forecast' } RSSPresetType
 */
export type RSSPreset = GithubCommitRSSPreset | GithubReleaseRSSPreset | GithubIssueRSSPreset | GithubPullRSSPreset | TelegramChannelRSSPreset | BilibiliDynamicChannelRSSPreset | WeatherRSSPreset;
export type RSSPresetType = 'github_commit' | 'github_release' | 'github_issue' | 'github_pr' | 'telegram_channel' | 'bilibili_dynamic' | 'earthquake' | 'weather_forecast';
export declare const DEFAULT_RSS_HUB_BASEURL = "https://rsshub.app";
export declare function buildRssUrl(preset: RSSPreset, type: RSSPresetType, rsshubUrl: string): {
    url: string;
    parseOption: import('rss-parser').ParserOptions<any, any>;
    postHandlers: Array<{
        name: string;
        args: object;
    }>;
};
