export function Heading({ title, subtext }) {
    return (
        <header className="showscape-heading">
            <div className="showscape-heading__eyebrow">
                README
            </div>

            <h1 className="showscape-heading__title">
                {title}
            </h1>

            {subtext && (
                <p className="showscape-heading__subtext">
                    {subtext}
                </p>
            )}
        </header>
    );
}