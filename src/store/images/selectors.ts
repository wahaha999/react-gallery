import { RootState } from "./types";

export const getIsFetching = (state: RootState) => state.images.isFetching;
export const getIsError = (state: RootState) => state.images.isError;
export const getImages = (state: RootState) => state.images.images;
export const getTab = (state: RootState) => state.images.tab;
