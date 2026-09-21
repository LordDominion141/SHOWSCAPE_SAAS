// test-route/route.js
import MyRenderedPage from "@/lib/markdoc.js";
import { fetchReadme, extractShowscapeBlock } from "@/lib/github";

// This turns your Home page into a Server Component that accepts URL query parameters
export default async function Home({ searchParams }) {
  // Await searchParams as required by newer versions of Next.js
  const params = await searchParams;
  const installationId = params.get ? params.get('installation_id') : params.installation_id;
  const owner = params.get ? params.get('owner') : params.owner;
  const repo = params.get ? params.get('repo') : params.repo;

  let markdownBlock = "";
  let errorMsg = null;

  // Only attempt to fetch if the parameters are provided in the URL string
  if (installationId && owner && repo) {
    try {
      const readme = await fetchReadme(installationId, owner, repo);
      markdownBlock =
        extractShowscapeBlock(readme) ??
        "### No Showscape block found";
    } catch (err) {
      errorMsg = err.message;
    }
  } else {
    markdownBlock = "### Missing URL parameters\nTo see your dynamic content, make sure your URL looks like: `?installation_id=123&owner=my-user&repo=my-repo`";
  }

  return (
    errorMsg ? (
        <div
            style={{
                color: 'red',
                border: '1px solid red',
                padding: '1rem',
                borderRadius: '5px'
            }}
        >
            <strong>Error loading template:</strong> {errorMsg}
        </div>
    ) : (
            <div className="docs-content">
                <MyRenderedPage markdown={markdownBlock} />
            </div>
    )
);
}

