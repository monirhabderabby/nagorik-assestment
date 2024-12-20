// Packages
import Image from "next/image";

// Local imports
import { blurDataUrl } from "@/lib/blurDataUrl";
import { fullImageSrc } from "@/lib/utils";
import { castSchemaType } from "@/types";

interface castProps {
  data: castSchemaType;
}

const CastCrewCard = ({ data }: castProps) => {
  const profile = fullImageSrc(data.profile_path!);

  return (
    <div className="w-[150px] md:w-[175px] h-auto shadow-md rounded-[8px] mx-auto">
      <div className="w-full h-[160px] md:h-[215px] rounded-[8px] relative">
        {data.profile_path ? (
          <Image
            src={profile}
            fill
            alt="profile"
            className="rounded-t-[8px]"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        ) : (
          <div className="h-full w-full bg-white/5 rounded-t-[8px] flex justify-center items-center text-[13px]">
            No Image
          </div>
        )}
      </div>
      <div className="pl-3 pb-2">
        <h1 className="text-[16px] text-start pt-4 leading-3">{data.name}</h1>
        <p className="text-gray-700 dark:text-white/60 text-start text-[14px]  pt-1 text-balance">
          as {data.character}
        </p>
      </div>
    </div>
  );
};

export default CastCrewCard;
