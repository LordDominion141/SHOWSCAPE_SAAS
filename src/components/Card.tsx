export function Card({
    title,
    icon,
    variant = "default",
    children,
}) {
    return (
        <section
            className={`showscape-card showscape-card--${variant}`}
        >
            <div className="showscape-card__header">
                <span className="showscape-card__icon" aria-hidden="true">
                    {icon}
                </span>

                <h2 className="showscape-card__title">
                    {title}
                </h2>
            </div>

            <div className="showscape-card__content">
                {children}
            </div>
        </section>
    );
}