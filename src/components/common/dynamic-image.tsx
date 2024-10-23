import { getImage } from "@/actions/getImage";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  url: string;
  alt: string;
  containerClass?: string;
}

const DynamicImage = async ({ url, alt, containerClass }: Props) => {
  const { base64, img } = await getImage(url);
  return (
    <div className={cn("relative", containerClass)}>
      <Image
        {...img}
        alt={alt || ""}
        placeholder="blur"
        blurDataURL={base64}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default DynamicImage;
