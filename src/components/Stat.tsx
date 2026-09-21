export function Stat({ value, label }) {
    return (
        <div className="showscape-stat">
            <div className="showscape-stat__value">
                {value}
            </div>

            <div className="showscape-stat__label">
                {label}
            </div>
        </div>
    );
}