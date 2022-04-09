import React, { useCallback, useEffect, useState } from "react";
import { Image } from "../types/data";
import * as Style from "../components/styles";
import { useDispatch, useSelector } from "react-redux";
import { getImages, getTab } from "../../store/images/selectors";
import { getAllImages, selectBookMark } from "../../store/images";

const Gallery = () => {
  const [data, setData] = useState<Image[]>([]);
  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const tab = useSelector(getTab);

  const handleSelectMark = useCallback(
    (id: number, marked: boolean) => {
      dispatch(selectBookMark(id, marked));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  useEffect(() => {
    if (tab === "All") setData(images);
    else setData(images.filter((i: Image) => i.bookmarked === true));
  }, [images, tab]);

  return (
    <Style.Container>
      <Style.ContainerBody>
        {data.map((image, index) => {
          return (
            <Style.ImageConent key={index}>
              <Style.Image src={image.url} alt="image" />
              <Style.TitleContent>
                <img
                  src={`/assets/icons/${
                    image.bookmarked ? "marked.png" : "unmarked.png"
                  }`}
                  onClick={() => handleSelectMark(index, !image.bookmarked)}
                  alt="bookmark"
                />
                <Style.Title marked={image.bookmarked}>
                  {image.title}
                </Style.Title>
              </Style.TitleContent>
            </Style.ImageConent>
          );
        })}
      </Style.ContainerBody>
    </Style.Container>
  );
};

export default Gallery;
