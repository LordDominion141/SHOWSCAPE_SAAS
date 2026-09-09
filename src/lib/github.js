// lib/github.js
import { App } from 'octokit';

const app = new App({
  appId: process.env.GITHUB_APP_ID,
  privateKey: process.env.GITHUB_APP_PRIVATE_KEY,
});

export async function fetchReadme(installationId, owner, repo) {
  const octokit = await app.getInstallationOctokit(installationId);
  const { data } = await octokit.rest.repos.getReadme({ owner, repo });
  return Buffer.from(data.content, 'base64').toString('utf-8');
}

export function extractShowscapeBlock(readmeText) {
  const match = readmeText.match(
    /<!--\s*showscape:start.*?-->([\s\S]*?)<!--\s*showscape:end\s*-->/
  );
  return match ? match[1].trim() : null;
}