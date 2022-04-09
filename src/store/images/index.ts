import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getImages } from "./actions";
import { Image, Slice } from "./types";
import { Thunk } from "./types";

export const initialState: Slice = {
  images: [],
  tab: "All",
  isFetching: false,
  isError: false,
};

const slice = createSlice({
  name: "images",
  initialState,
  reducers: {
    request(state: any) {
      state.isFetching = true;
    },
    success(state: any, action: PayloadAction<Image[]>) {
      state.isFetching = false;
      state.isError = false;
      state.images = action.payload;
    },
    tabUpdate(state: any, action: PayloadAction<string>) {
      state.isFetching = false;
      state.isError = false;
      state.tab = action.payload;
    },
    failure(state: any) {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { reducer } = slice;

export const { request, success, tabUpdate, failure } = slice.actions;

export const getAllImages = (): Thunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(request());
    try {
      let { data } = await getImages();

      dispatch(success(data));
    } catch (e) {
      dispatch(failure());
    }
  };
};

export const selectTab = (tabName: string): Thunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(request());
    try {
      dispatch(tabUpdate(tabName));
    } catch (e) {
      dispatch(failure());
    }
  };
};

export const selectBookMark = (id: number, marked: boolean): Thunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(request());
    try {
      const { data } = await getImages();
      const newData = data.map((image: Image, index: number) => {
        if (index === id) {
          return { ...image, bookmarked: marked };
        }
        return image;
      });

      dispatch(success(newData));
    } catch (e) {
      dispatch(failure());
    }
  };
};
