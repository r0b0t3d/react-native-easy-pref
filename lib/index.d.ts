declare const _default: {
    getBoolean: (key: string, defaultVal: any) => Promise<any>;
    getString: (key: string, defaultVal: string) => Promise<any>;
    getInt: (key: string, defaultVal: string) => Promise<any>;
    setInt: (key: string, value: number) => Promise<void>;
    setString: (key: string, value: string) => Promise<void>;
    setBoolean: (key: string, value: string) => Promise<void>;
};
export default _default;
