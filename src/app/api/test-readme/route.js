// app/api/test-readme/route.js
import { fetchReadme, extractShowscapeBlock } from '@/lib/github';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const installationId = searchParams.get('installation_id');
  const owner = searchParams.get('owner');
  const repo = searchParams.get('repo');

  const readme = await fetchReadme(installationId, owner, repo);
  const block = extractShowscapeBlock(readme);

  console.log('--- EXTRACTED BLOCK ---\n', block);

  return Response.json({ block });
}