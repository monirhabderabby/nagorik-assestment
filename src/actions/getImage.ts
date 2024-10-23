"use server";
import { getPlaiceholder } from "plaiceholder";

export async function getImage(src: string) {
  // Ensure this function runs only on the server side
  if (typeof window !== "undefined") {
    throw new Error("getImage can only be run on the server side");
  }
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
}
