import { ImageData } from "../types/ImagesType";

export const sanitizeImageData = (images: any) => {
  return images.map((d: ImageData) => {
    return {
      name: d.name,
      image: d.image,
    };
  });
};
