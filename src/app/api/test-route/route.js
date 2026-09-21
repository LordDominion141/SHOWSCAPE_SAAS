// app/api/test-route/route.js
import { fetchReadme, extractShowscapeBlock } from "@/lib/github";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const installationId = searchParams.get('installation_id');
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');

    const readme = await fetchReadme(installationId, owner, repo);
    const block = extractShowscapeBlock(readme);

    console.log('------EXTRACTED BLOCK-----\n', block);

    return Response.json({ block });
  } catch (err) {
    console.log(err.message);
    return Response.json({ error: err.message }, { status: 500 });
  }
}