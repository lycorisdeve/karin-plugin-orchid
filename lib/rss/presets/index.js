export const DEFAULT_RSS_HUB_BASEURL = 'https://rsshub.app';
export function buildRssUrl(preset, type, rsshubUrl) {
    const postHandlers = [];
    let parseOption = {};
    function getUrl(preset, type) {
        switch (type) {
            case 'github_commit': {
                postHandlers.push({
                    name: 'github',
                    args: {
                        type: 'commit'
                    }
                });
                parseOption = {
                    customFields: {
                        item: ['author']
                    }
                };
                const data = preset;
                return `https://github.com/${data.org}/${data.repo}/commits.atom`;
            }
            case 'github_release': {
                postHandlers.push({
                    name: 'github',
                    args: {
                        type: 'release'
                    }
                });
                parseOption = {
                    customFields: {
                        item: ['author']
                    }
                };
                const data = preset;
                return `https://github.com/${data.org}/${data.repo}/releases.atom`;
            }
            case 'github_issue': {
                postHandlers.push({
                    name: 'github',
                    args: {
                        type: 'issue'
                    }
                });
                parseOption = {
                    customFields: {
                        item: ['author']
                    }
                };
                const data = preset;
                return `${rsshubUrl}/github/issue/${data.org}/${data.repo}/${data.type || 'all'}`;
            }
            case 'github_pr': {
                postHandlers.push({
                    name: 'github',
                    args: {
                        type: 'pull'
                    }
                });
                parseOption = {
                    customFields: {
                        item: ['author']
                    }
                };
                const data = preset;
                return `${rsshubUrl}/github/pull/${data.org}/${data.repo}/${data.type || 'all'}`;
            }
            case 'telegram_channel': {
                const data = preset;
                return `${rsshubUrl}/telegram/channel/${data.channel}`;
            }
            case 'bilibili_dynamic': {
                const data = preset;
                return `${rsshubUrl}/bilibili/user/dynamic/${data.spaceId}`;
            }
            case 'earthquake':
                return `${rsshubUrl}/earthquake/ceic/1`;
            case 'weather_forecast':
                return `${rsshubUrl}/cma/channel/380`;
            default:
                return '';
        }
    }
    const url = getUrl(preset, type);
    return {
        url,
        postHandlers,
        parseOption
    };
}
