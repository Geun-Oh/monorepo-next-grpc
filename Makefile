compile-new-app:
	protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out=. \
    --ts_proto_opt="outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true" \
    ./apps/new-app/protos/message.proto
    
gen-type: ./node_modules/.bin/proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=apps/new-app/protos/ apps/new-app/protos/*.proto