export interface IConnectable<T> {
  connect(): Promise<T>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getClient(): T;
} 