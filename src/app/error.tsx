"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center flex-col gap-y-5">
      <h2 className="text-red-400">
        {error.message || "Something went wrong!"}
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-black/10 hover:bg-black/15 dark:bg-white/10 dark:hover:bg-white/15 px-4 py-2 rounded-[6px] text-[15px]"
      >
        Try again
      </button>
    </div>
  );
}
