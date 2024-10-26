// Packages
import Image from "next/image";

// local imports
import { blurDataUrl } from "@/lib/blurDataUrl";
import { cn, fullImageSrc } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  containerClass: string;
  className?: string;
}

const Poster = ({ src, containerClass, alt, className }: Props) => {
  const imgUrl = fullImageSrc(src);

  if (!src)
    return (
      <div className="h-full w-full bg-black/5 dark:bg-white/5 text-[13px] flex justify-center items-center">
        Poster not published
      </div>
    );
  return (
    <div className={cn(containerClass, "rounded-[6px]")}>
      <Image
        src={imgUrl}
        alt={alt}
        fill
        className={cn(className, "rounded-[6px] bg-cover")}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
    </div>
  );
};

export default Poster;
