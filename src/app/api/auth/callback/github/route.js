export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const installationId = searchParams.get('installation_id');
    const setupAction = searchParams.get('setup_action');

    return Response.json({code, installationId, setupAction});
}