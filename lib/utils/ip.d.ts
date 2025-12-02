export interface IPGeoInfo {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip?: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
    source: 'ip-api.com' | 'ipinfo.io' | 'ip.sb';
}
/**
 *
 * @param ipOrDomain
 * @param {Array<'ip-api.com'|'ipinfo.io'|'ip.sb'>} source
 * @param {boolean} forceIpv6
 * @return {Promise<Array<IPGeoInfo>>}
 */
export declare function getIpGeoInfo(ipOrDomain: string, source: 'ip-api.com' | 'ipinfo.io' | 'ip.sb', forceIpv6?: boolean): Promise<IPGeoInfo[]>;
