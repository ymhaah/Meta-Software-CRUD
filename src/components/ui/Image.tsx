import { useState } from "react";

type ImagePropsT = {
    src: string;
    alt?: string;
};

function Image({
    src,
    alt,
    className = "",
    ...props
}: ImagePropsT & React.ImgHTMLAttributes<HTMLImageElement>) {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            {...props}
            src={src}
            alt={alt}
            loading={props.loading || "lazy"}
            onLoad={() => setLoaded(true)}
            onError={() => {
                setLoaded(true);
            }}
            className={`${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
    );
}
export default Image;
