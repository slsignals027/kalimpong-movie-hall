import { writeFile } from "fs/promises";
import { join } from "path";
import { v4 as uuid } from "uuid";

export async function saveImage(
  file: File,
  folder: "posters" | "backdrops"
) {
  if (!file || file.size === 0) {
    return "";
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const extension = file.name.split(".").pop();

  const filename = `${uuid()}.${extension}`;

  const path = join(
    process.cwd(),
    "public",
    folder,
    filename
  );

  await writeFile(path, buffer);

  return `/${folder}/${filename}`;
}