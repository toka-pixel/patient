import { configureStore } from "@reduxjs/toolkit";

import patientSlice from "./patient-slice";

const store = configureStore({
  reducer: { patient: patientSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
});

export default store;

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
