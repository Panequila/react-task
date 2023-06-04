// store.js or index.js

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Import your reducers and other necessary files
import rootReducer from "./reducers";

// Create the Redux store with the applied middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
