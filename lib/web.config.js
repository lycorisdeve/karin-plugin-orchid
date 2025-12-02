import { defineConfig, components, basePath } from 'node-karin';
import { config, pkg, pluginName } from './utils/config.js';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
export default defineConfig({
    info: {
        id: pkg().name,
        name: pkg().name,
        version: pkg().version,
        author: {
            name: pkg().author || 'ikechan8370',
            home: pkg().homepage || 'https://github.com/ikechan8370/karin-plugin-orchid',
        },
        description: pkg().description || 'karin plugin for orchid',
        icon: {
            name: 'settings',
            size: 24,
            color: '#B2A8D3'
        }
    },
    components: () => {
        const cfg = config();
        return [
            components.accordion.create('basic', {
                label: '基础设置',
                children: [
                    components.accordion.createItem('basic_settings', {
                        title: '基础设置',
                        subtitle: '插件的基础功能配置',
                        children: [
                            components.input.string('api', {
                                label: 'API地址',
                                description: '后端API地址',
                                defaultValue: cfg.api,
                            }),
                            components.switch.create('reply', {
                                label: '引用回复',
                                description: '机器人发表情是否引用回复用户消息',
                                defaultSelected: cfg.reply,
                            }),
                            components.switch.create('forcePrefix', {
                                label: '强制前缀',
                                description: '是否强制需要前缀才能触发',
                                defaultSelected: cfg.forcePrefix,
                            }),
                            components.input.string('prefix', {
                                label: '前缀',
                                description: '若开启强制前缀，必须以前缀开头',
                                defaultValue: cfg.prefix,
                            }),
                            components.switch.create('masterProtect', {
                                label: '主人反撅',
                                description: '是否开启主人保护',
                                defaultSelected: cfg.masterProtect,
                            }),
                            components.input.number('maxFileSize', {
                                label: '最大文件大小',
                                description: '用户输入的图片最大支持的文件大小，单位为MB',
                                defaultValue: cfg.maxFileSize?.toString(),
                            }),
                            components.input.string('proxy', {
                                label: '代理地址',
                                description: '填了部分境外请求会走代理加速',
                                defaultValue: cfg.proxy || '',
                            }),
                        ]
                    })
                ]
            }),
            components.accordion.create('luck', {
                label: '运势设置',
                children: [
                    components.accordion.createItem('luck_settings', {
                        title: '运势设置',
                        subtitle: '今日运气相关配置',
                        children: [
                            components.input.number('luck.maxNum', {
                                label: '每日次数',
                                description: '今日运气每个人每天最多获取次数',
                                defaultValue: cfg.luck.maxNum?.toString(),
                            }),
                            components.switch.create('luck.masterInfinite', {
                                label: '主人无限',
                                description: '若为true，主人可以无限刷新',
                                defaultSelected: cfg.luck.masterInfinite,
                            }),
                            components.input.string('luck.lowTemplate', {
                                label: '低运势文案',
                                defaultValue: cfg.luck.lowTemplate,
                            }),
                            components.input.string('luck.middleTemplate', {
                                label: '中运势文案',
                                defaultValue: cfg.luck.middleTemplate,
                            }),
                            components.input.string('luck.highTemplate', {
                                label: '高运势文案',
                                defaultValue: cfg.luck.highTemplate,
                            }),
                            components.input.string('luck.maxTemplate', {
                                label: '极佳运势文案',
                                defaultValue: cfg.luck.maxTemplate,
                            }),
                            components.input.string('luck.infiniteTemplate', {
                                label: '无限运势文案',
                                defaultValue: cfg.luck.infiniteTemplate,
                            }),
                        ]
                    })
                ]
            }),
            components.accordion.create('rss', {
                label: 'RSS设置',
                children: [
                    components.accordion.createItem('rss_settings', {
                        title: 'RSS设置',
                        subtitle: 'RSS订阅相关配置',
                        children: [
                            components.input.string('rss.cron', {
                                label: '检查频率',
                                description: 'Cron表达式',
                                defaultValue: cfg.rss.cron,
                            }),
                            components.input.group('rss.rsshub_url', {
                                label: 'RSSHub地址',
                                description: '支持多个地址，失败自动切换',
                                data: (Array.isArray(cfg.rss.rsshub_url) ? cfg.rss.rsshub_url : [cfg.rss.rsshub_url]).filter(Boolean),
                                template: components.input.string('rsshub_url_item', { label: '地址' })
                            }),
                            components.input.string('rss.background', {
                                label: '默认背景',
                                description: '默认图片背景URL',
                                defaultValue: cfg.rss.background,
                            }),
                        ]
                    })
                ]
            }),
            components.accordion.create('tools', {
                label: '工具设置',
                children: [
                    components.accordion.createItem('tools_settings', {
                        title: '工具设置',
                        children: [
                            components.input.group('tools.ip_source', {
                                label: 'IP来源',
                                description: 'IP查询服务地址',
                                data: cfg.tools?.ip_source || [],
                                template: components.input.string('ip_source_item', { label: '地址' })
                            }),
                        ]
                    })
                ]
            })
        ];
    },
    save: (data) => {
        try {
            const file = path.join(basePath, pluginName, 'config', 'config.yaml');
            const newConfig = {};
            for (const [key, value] of Object.entries(data)) {
                const keys = key.split('.');
                let current = newConfig;
                for (let i = 0; i < keys.length - 1; i++) {
                    current[keys[i]] = current[keys[i]] || {};
                    current = current[keys[i]];
                }
                // Handle types
                let val = value;
                if (key === 'maxFileSize' || key.endsWith('.maxNum')) {
                    val = Number(value);
                }
                if (value === 'true')
                    val = true;
                if (value === 'false')
                    val = false;
                current[keys[keys.length - 1]] = val;
            }
            let currentConfig = {};
            if (fs.existsSync(file)) {
                currentConfig = YAML.parse(fs.readFileSync(file, 'utf8'));
            }
            // Deep merge newConfig into currentConfig
            const merge = (target, source) => {
                for (const key in source) {
                    if (source[key] instanceof Object && !Array.isArray(source[key])) {
                        Object.assign(source[key], merge(target[key] || {}, source[key]));
                    }
                    else {
                        target[key] = source[key];
                    }
                }
                return target;
            };
            const finalConfig = merge(currentConfig, newConfig);
            fs.writeFileSync(file, YAML.stringify(finalConfig));
            return { success: true, message: '保存成功' };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
});
