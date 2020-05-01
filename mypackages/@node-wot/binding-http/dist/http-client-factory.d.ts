import { ProtocolClientFactory, ProtocolClient } from "@node-wot/core";
import { HttpConfig } from "./http";
export default class HttpClientFactory implements ProtocolClientFactory {
    readonly scheme: string;
    private config;
    constructor(config?: HttpConfig);
    getClient(): ProtocolClient;
    init(): boolean;
    destroy(): boolean;
}
