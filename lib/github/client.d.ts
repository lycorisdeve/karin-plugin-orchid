import { Response } from 'node-fetch';
export declare class GithubClient {
    key: string;
    client: {
        request: (url: string, options?: any) => Promise<Response>;
    };
    commonHeaders: {
        'X-GitHub-Api-Version': string;
        Accept: string;
        Authorization: string | undefined;
    };
    constructor(key: string);
    /**
     * 获取仓库详情
     * @param owner
     * @param repo
     * @returns {Promise<Object>}
     */
    getRepository(owner: string, repo: string): Promise<unknown>;
    /**
     * 获取仓库commits信息
     * @see https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28
     * @param owner
     * @param repo
     * @param options 可选参数：since, until, per_page, page, sha等
     * @returns {Promise<Object[]>}
     */
    getCommits(options: {} | undefined, owner: string, repo: string): Promise<unknown>;
    /**
     * 获取仓库某个commit信息
     * @see https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#get-a-commit
     * @param owner
     * @param repo
     * @param sha commit sha
     * @returns {Promise<Object>}
     */
    getCommitBySha(sha: string, owner: string, repo: string): Promise<unknown>;
    /**
     * 获取仓库releases信息
     * @see https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28
     * @param owner
     * @param repo
     * @param options 可选参数：per_page, page
     * @returns {Promise<Object[]>}
     */
    getReleases(options: {} | undefined, owner: string, repo: string): Promise<unknown>;
    /**
     * 获取仓库action artifacts信息
     * @see https://docs.github.com/en/rest/actions/artifacts?apiVersion=2022-11-28
     * @param owner
     * @param repo
     * @param options 可选参数：per_page, page, name
     * @returns {Promise<Object[]>}
     */
    getActionsArtifacts(options: {} | undefined, owner: string, repo: string): Promise<unknown>;
    /**
     * @typedef {{
     *   url: string,
     *   repository_url: string,
     *   labels_url: string,
     *   comments_url: string,
     *   events_url: string,
     *   html_url: string,
     *   id: number,
     *   node_id: string,
     *   number: number,
     *   title: string,
     *   user: {
     *     login: string,
     *     id: number,
     *     node_id: string,
     *     avatar_url: string,
     *     gravatar_id: string,
     *     url: string,
     *     html_url: string,
     *     followers_url: string,
     *     following_url: string,
     *     gists_url: string,
     *     starred_url: string,
     *     subscriptions_url: string,
     *     organizations_url: string,
     *     repos_url: string,
     *     events_url: string,
     *     received_events_url: string,
     *     type: string,
     *     site_admin: boolean
     *   },
     *   labels: Array<{
     *     id: number,
     *     node_id: string,
     *     url: string,
     *     name: string,
     *     color: string,
     *     default: boolean,
     *     description: string
     *   }>,
     *   state: string,
     *   locked: boolean,
     *   assignee: string,
     *   assignees: Array<string>,
     *   milestone: string,
     *   comments: number,
     *   created_at: string,
     *   updated_at: string,
     *   closed_at: string,
     *   author_association: string,
     *   active_lock_reason: string,
     *   body: string,
     *   performed_via_github_app: string,
     *   timeline_url: string,
     *   state_reason: string,
     *   reactions: Reaction,
     *   }} Issues
     */
    /**
     * @typedef {{
     *     url: string,
     *     total_count: number,
     *     '+1': number,
     *     '-1': number,
     *     laugh: number,
     *     hooray: number,
     *     confused: number,
     *     heart: number,
     *     rocket: number,
     *     eyes: number
     *   }} Reaction
     */
    /**
     * 获取仓库的issues
     * @param {{
     *   state?: 'open' | 'closed' | 'all',
     *   sort?: 'created' | 'updated' | 'comments',
     * }} options
     * @param {string} owner
     * @param {string} repo
     * @return {Promise<Issues[]>}
     */
    getIssues(options: {} | undefined, owner: string, repo: string): Promise<unknown>;
    /**
     * @typedef {{
     *   login: string,
     *   id: number,
     *   node_id: string,
     *   avatar_url: string,
     *   gravatar_id: string,
     *   url: string,
     *   html_url: string,
     *   followers_url: string,
     *   following_url: string,
     *   gists_url: string,
     *   starred_url: string,
     *   subscriptions_url: string,
     *   organizations_url: string,
     *   repos_url: string,
     *   events_url: string,
     *   received_events_url: string,
     *   type: string,
     *   site_admin: boolean
     *   }} GithubUser
     */
    /**
     * @typedef {{
     *   url: string,
     *   html_url: string,
     *   issue_url: string,
     *   id: number,
     *   node_id: string,
     *   user: GithubUser,
     *   created_at: string,
     *   updated_at: string,
     *   author_association: string,
     *   body: string,
     *   performed_via_github_app: string,
     *   event: string,
     *   actor: GithubUser,
     *   reactions: Reaction
     *   }} Timeline
     */
    /**
     * 获取issue详情
     * @param {number} issueNumber
     * @param {string} owner
     * @param {string} repo
     * @return {Promise<Timeline[]>}
     */
    getIssueTimeline(issueNumber: number, owner: string, repo: string): Promise<unknown>;
    /**
     * params to query string
     * @param params
     * @param containsQuestionMark 结果前面是否包含?
     * @returns {string}
     */
    query(params: {
        [x: string]: any;
    }, containsQuestionMark?: boolean): string;
    /**
     *
     * @param {Response} res
     * @returns {Promise<Object | Object[]>}
     */
    toJson(res: Response): Promise<unknown>;
}
