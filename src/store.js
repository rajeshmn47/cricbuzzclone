import { configureStore } from "@reduxjs/toolkit";

import { cricbuzzApi } from "./cricbuzzApi";

export default configureStore({
  reducer: {
    [cricbuzzApi.reducerPath]: cricbuzzApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cricbuzzApi.middleware),
});
