/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface SocketOptions {
  recvTimeout?: number;
  sendTimeout?: number;
}
export class Socket {
  options: SocketOptions;
  constructor(options?: SocketOptions | undefined | null);
  connect(url: string): void;
  send(req: Buffer): Buffer;
  close(): void;
  connected(): boolean;
  static recvMessage(
    url: string,
    options: SocketOptions | null | undefined,
    callback: (err: null | Error, bytes: Buffer) => void
  ): MessageRecvDisposable;
}
export class MessageRecvDisposable {
  dispose(): void;
}
