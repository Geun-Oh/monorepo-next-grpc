import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MessageServiceClient as _messagePackage_MessageServiceClient, MessageServiceDefinition as _messagePackage_MessageServiceDefinition } from './messagePackage/MessageService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  messagePackage: {
    MessageRequest: MessageTypeDefinition
    MessageResponse: MessageTypeDefinition
    MessageService: SubtypeConstructor<typeof grpc.Client, _messagePackage_MessageServiceClient> & { service: _messagePackage_MessageServiceDefinition }
  }
}

