import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import LoginReducer from "./reducer/loginSlice";
import SignupReducer from './reducer/signupSlice';
import PageReducer from './reducer/pageSlice';
import loginModalReducer from './reducer/loginModalSlice';
import ModalReducer from './reducer/modalSlice';
import NotificationReducer from './reducer/notificationSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            login: LoginReducer,
            signup: SignupReducer,
            page: PageReducer,
            loginModal: loginModalReducer,
            modal: ModalReducer,
            notification: NotificationReducer
        },
    });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<String>
>;

export default store;
