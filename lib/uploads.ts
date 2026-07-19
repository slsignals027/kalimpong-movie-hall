import cloudinary from "./cloudinary";

export async function saveImage(
  file: File,
  folder: "posters" | "backdrops"
) {
  if (!file || file.size === 0) {
    return "";
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise<string>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: `kalimpong-movie-hall/${folder}`,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result!.secure_url);
      }
    );

    stream.end(buffer);
  });
}