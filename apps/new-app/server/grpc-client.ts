import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../protos/message";

const PROTO_PATH = __dirname + "../../../../../protos/message.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});

const messageService = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
).messagePackage;

export const { MessageService } = messageService;
