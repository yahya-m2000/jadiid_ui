import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        verbose: true,
        moduleNameMapper: {
            ".(css|less|scss)$": "identity-obj-proxy"
        },
        
        testEnvironment: "jsdom"
    };
};