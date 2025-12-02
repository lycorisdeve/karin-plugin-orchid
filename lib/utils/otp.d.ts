export declare const readQRCode: (url: string) => Promise<string | null>;
export declare const getSecretFromURL: (qrCodeUrl: string) => Promise<string | null | undefined>;
export declare const generateOTP: (secret: string) => string;
export declare const saveOtp: (otp: {
    name: string;
    uid: string;
    url: string;
}) => void;
export declare const readOtpByName: (name: any, uid: any) => any;
export declare const listOtps: (uid: any) => any;
export declare const deleteOtp: (name: any, uid: any) => void;
