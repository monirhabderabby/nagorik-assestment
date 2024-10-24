import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "./skeleton";

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
  fullWidth?: boolean;
  className?: string;
}

const SkeletonWrapper = ({
  children,
  isLoading,
  fullWidth = true,
  className,
}: Props) => {
  if (!isLoading) return children;
  return (
    <Skeleton
      className={cn(
        fullWidth && "w-full bg-gray-400/20 rounded-12px",
        className
      )}
    >
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
};

export default SkeletonWrapper;
