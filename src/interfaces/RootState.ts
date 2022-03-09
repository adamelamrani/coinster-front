import store from "../redux/store/store";

type RootState = ReturnType<typeof store.getState>;

export default RootState;
