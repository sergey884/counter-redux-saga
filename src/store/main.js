import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer/index";
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	const logger = createLogger();
	middleware.push(logger);
}
const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(...middleware))
	);
	
	sagaMiddleware.run( rootSagas );

	return store;
};

export default configureStore;
