import images from "../../app/data/images.json";
import { Image } from "./types";

export async function getImages() {
  const persistData = localStorage.getItem("persist:root");

  if (persistData) {
    let data = JSON.parse(persistData);
    let images = JSON.parse(data.images);

    return { data: images.images };
  } else {
    let typedImages: Image[] = [];

    images.forEach((image: any) => {
      typedImages.push({
        image_id: image.image_id,
        title: image.title,
        url: image.url,
        bookmarked: false,
      });
    });

    return { data: typedImages };
  }
}
