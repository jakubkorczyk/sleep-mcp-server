export type ReadResourceResult = {
    contents: Array<{
        uri: string;
        mimeType?: string;
        text?: string;
        blob?: Blob;
    }>;
}; 