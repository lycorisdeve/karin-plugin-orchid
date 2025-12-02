class Recipe {
    baseUrl;
    constructor(props = {}) {
        this.baseUrl = props.baseUrl || 'http://recipe.yunzai.chat/';
    }
    async search(keyword, offset = 0, limit = 10, filter = {}) {
        let url = `${this.baseUrl}search/${keyword}?offset=${offset}&limit=${limit}`;
        Object.keys(filter).forEach(key => {
            url += `&${key}=${filter[key]}`;
        });
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'karin-plugin-orchid/1.0.1 node-fetch'
            }
        });
        const json = await res.json();
        return json;
    }
    async getById(id) {
        const url = `${this.baseUrl}recipe/${id}`;
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'karin-plugin-orchid/1.0.1 node-fetch'
            }
        });
        const json = await res.json();
        return json;
    }
    async summary(demand) {
        const url = `${this.baseUrl}recommend?descr=${demand || ''}`;
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'karin-plugin-orchid/1.0.1 node-fetch'
            }
        });
        const json = await res.json();
        return json;
    }
}
export default new Recipe();
