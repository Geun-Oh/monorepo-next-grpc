import { ClientMessageService } from "../../server/grpc-server";

export async function GET() {
  try {
    const authService = new ClientMessageService();
    console.log(1);
    const { client, error } = await authService.getClient(1, "new");
    return Response.json({ client, error });
  } catch (error) {
    console.error(error.error.code);
    return { message: "fail" };
  }
}

// 서브도메인 배포 시 헬스체크를 위한 api routes 입니다.
// export async function GET(request: Request) {
//   return new Response('New API Routes', {
//     status: 200,
//   });
// }
