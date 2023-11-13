import { promisify } from "util";
import { MessageService } from "./grpc-client";
import * as grpc from "@grpc/grpc-js";

const target = "localhost:50051";

export class ClientMessageService extends MessageService {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getClient(id: number, record: string) {
    const clientInfo = promisify(this.message).bind(this);
    return await clientInfo({ id, record })
      .then((client) => ({ client, error: null }))
      .catch((error) => ({ error, client: null }));
  }
}
