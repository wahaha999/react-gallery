import { Dispatch } from "redux";
import { appReducer } from "../reducer";

export interface Image {
  image_id: number;
  title: string;
  url: string;
  bookmarked: boolean;
}

export interface Slice {
  images: Array<Image>;
  tab: string;
  isFetching: boolean;
  isError: boolean;
}

export type Thunk = (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => Promise<any>;

export type RootState = ReturnType<typeof appReducer>;
