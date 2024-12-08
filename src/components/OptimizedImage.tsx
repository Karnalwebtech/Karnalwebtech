import Image from "next/image";

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      placeholder="blur"
      className={className}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAH0lEQVR42mNgoBfgz9D8z+DAwMDAABWTAwMDIwMAAAD8QRBgwAAAAAASUVORK5CYII=
"
    />
  );
}
