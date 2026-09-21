export function Columns({ count, children }) {
    return (
        <div
            className="showscape-columns"
            data-count={count}
        >
            {children}
        </div>
    );
}