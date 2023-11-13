// Original file: apps/new-app/protos/message.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MessageRequest as _messagePackage_MessageRequest, MessageRequest__Output as _messagePackage_MessageRequest__Output } from '../messagePackage/MessageRequest';
import type { MessageResponse as _messagePackage_MessageResponse, MessageResponse__Output as _messagePackage_MessageResponse__Output } from '../messagePackage/MessageResponse';

export interface MessageServiceClient extends grpc.Client {
  message(argument: _messagePackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  message(argument: _messagePackage_MessageRequest, callback: grpc.requestCallback<_messagePackage_MessageResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface MessageServiceHandlers extends grpc.UntypedServiceImplementation {
  message: grpc.handleUnaryCall<_messagePackage_MessageRequest__Output, _messagePackage_MessageResponse>;
  
}

export interface MessageServiceDefinition extends grpc.ServiceDefinition {
  message: MethodDefinition<_messagePackage_MessageRequest, _messagePackage_MessageResponse, _messagePackage_MessageRequest__Output, _messagePackage_MessageResponse__Output>
}
