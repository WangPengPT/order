import { Db } from 'mongodb';
export declare class MongoDB {
    private connectionString;
    private dbName;
    private client;
    private db;
    constructor(connectionString?: string, dbName?: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getDatabase(): Db;
    isConnected(): boolean;
}
//# sourceMappingURL=MongoDB.d.ts.map