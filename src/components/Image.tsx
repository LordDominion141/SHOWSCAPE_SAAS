import NextImage from 'next/image';

export function Image({ url, alt, subtext }) {
    return (
        <figure className="showscape-image">
            <div className="showscape-image__frame">
                <NextImage
                    className="showscape-image__img"
                    src={url}
                    alt={alt}
                    fill
                    sizes="(max-width: 520px) 100vw, 672px"
                />
            </div>

            {subtext && (
                <figcaption className="showscape-image__caption">
                    {subtext}
                </figcaption>
            )}
        </figure>
    );
}