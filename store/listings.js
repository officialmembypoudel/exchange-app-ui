import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../configs/appwrite";
import { Query } from "appwrite";

export const fetchAllListings = createAsyncThunk(
  "listings/fetch",
  async (params, { dispatch }) => {
    try {
      const response = await databases.listDocuments("madhyayuga", "listings", [
        Query.limit(params.limit),
        Query.orderDesc("$createdAt"),
      ]);
      return response.documents;
    } catch (error) {
      console.log("listings fetch error", error);
    }
  }
);

export const updateViews = createAsyncThunk(
  "listings/views/update",
  async (params, { dispatch }) => {
    try {
      await databases.updateDocument("madhyayuga", "listings", params.$id, {
        views: params.views + 1,
      });
      dispatch(fetchAllListings({ limit: params.limit }));
    } catch (error) {
      console.log("update listing views error", error);
    }
  }
);

export const userListings = createAsyncThunk(
  "users/listings/fetch",
  async (params) => {
    try {
      const response = await databases.listDocuments("madhyayuga", "listings", [
        Query.equal("userId", params.userId),
        Query.orderDesc("$createdAt"),
      ]);
      return response.documents;
    } catch (error) {
      console.log("cannot fetch listings of user", error);
    }
  }
);

const initialState = {
  listings: [],
  comments: {},
  userListings: [],
};

const listings = createSlice({
  name: "listings",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllListings.pending]: () => {
      console.log("fetching all listings");
    },
    [fetchAllListings.fulfilled]: (state, { payload }) => {
      console.log("fetching all listings fullfilled");
      return { ...state, listings: payload };
    },
    [fetchAllListings.rejected]: () => {
      console.log("fetching all listings rejected");
    },
    [userListings.pending]: () => {
      console.log("fetching user listings");
    },
    [userListings.fulfilled]: (state, { payload }) => {
      console.log("fetching user listings fullfilled");
      return { ...state, userListings: payload };
    },
    [userListings.rejected]: () => {
      console.log("fetching user listings rejected");
    },
  },
});

export default listings.reducer;

export const getAllListings = (state) => state.listings.listings;
export const getUserListings = (state) => state.listings.userListings;
