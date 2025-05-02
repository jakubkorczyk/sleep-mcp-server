export type ReadResourceResult = {
  contents: Array<{
    uri: string;
    mimeType?: string;
    text?: string;
    blob?: Blob;
  }>;
};

export type ReadToolResult = {
  content: Array<{
    type: string;
    text: string;
  }>;
};
