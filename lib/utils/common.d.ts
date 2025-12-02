export declare function mkdirs(dirname: string): true | undefined;
/**
 * 如果有任意一个文件大于 maxSize，则返回true
 * @param files
 */
export declare function checkFileSize(files: (File | FormDataEntryValue)[]): boolean;
/**
 * 格式化时间
 * @param pubDate
 * @returns
 */
export declare function formatRssPubDate(pubDate: string | number | Date): string;
