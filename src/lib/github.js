// lib/github.js
import { App } from 'octokit';
import fs from 'fs';

function getPrivateKey() {
  const keyPath = process.env.GITHUB_APP_PRIVATE_KEY_PATH;
  if (keyPath) {
    // Local dev: read the real .pem file directly, no manual escaping needed
    return fs.readFileSync(keyPath, 'utf-8');
  }
  // Production (Vercel): env var already has real newlines
  return process.env.GITHUB_APP_PRIVATE_KEY;
}

const app = new App({
  appId: process.env.GITHUB_APP_ID,
  privateKey: getPrivateKey(),
});

export const fetchReadme = async (installationId, owner, repo) => {
  const octokit = await app.getInstallationOctokit(installationId);
  const { data } = await octokit.rest.repos.getReadme({ owner, repo });
  return Buffer.from(data.content, 'base64').toString('utf-8');
};

export const extractShowscapeBlock = (readmeText) => {
  const match = readmeText.match(
    /<!--\s*showscape:start[^\n]*\n([\s\S]*?)showscape:end\s*-->/
  );

  console.log(readmeText)
  return match ? match[1].trim() : null;
};