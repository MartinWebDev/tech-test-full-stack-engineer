import isPromise from 'redux-promise-middleware/dist/isPromise'

export default store => next => action => {
    if (isPromise(action.payload)) {
        return next(action).catch(error => error);
    }

    return next(action);
}
