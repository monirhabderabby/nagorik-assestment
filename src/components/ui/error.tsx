import { AlertCircleIcon } from "lucide-react";

interface Props {
  message: string;
}

const ResponseError = ({ message }: Props) => {
  return (
    <div className="mt-10 h-[200px] flex justify-center items-center text-red-500 text-[18px] flex-col gap-y-2">
      <AlertCircleIcon />
      {message || "Something went wrong"}
    </div>
  );
};

export default ResponseError;
