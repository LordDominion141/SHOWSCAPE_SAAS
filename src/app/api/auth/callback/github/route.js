// app/api/auth/callback/github/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const installationId = searchParams.get('installation_id');
  const setupAction = searchParams.get('setup_action');

  return Response.json({ code, installationId, setupAction });
}