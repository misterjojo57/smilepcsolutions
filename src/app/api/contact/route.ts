import { handlePost } from './POST';

export async function POST(req: Request) {
  return handlePost(req);
}
