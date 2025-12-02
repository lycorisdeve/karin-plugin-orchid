interface Hit {
    name: string;
    难度: string;
    耗时: string;
    工艺: string;
    口味: string;
    cook: string;
    id: string;
    main_ingredients: string[];
    supplementary_ingredients: string[];
    seasonings: string[];
    categories: string[];
    steps: Array<{
        img: string;
        step: string;
        description: string;
    }>;
}
interface SearchFilter {
    style?: string;
    time?: string;
    level?: string;
    cook?: string;
}
interface SearchResponse {
    status_code: number;
    results: {
        hits: Hit[];
        query: string;
        processingTimeMs: number;
        limit: number;
        offset: number;
        estimatedTotalHits: number;
    };
    message?: string;
}
interface RecipeProps {
    baseUrl?: string;
}
interface SummaryResponse {
    summary: string;
    recipes: Hit[];
}
declare class Recipe {
    private baseUrl;
    constructor(props?: RecipeProps);
    search(keyword: string, offset?: number, limit?: number, filter?: SearchFilter): Promise<SearchResponse>;
    getById(id: string): Promise<Hit>;
    summary(demand?: string): Promise<SummaryResponse>;
}
declare const _default: Recipe;
export default _default;
