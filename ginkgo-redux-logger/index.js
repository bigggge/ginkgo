const logger = ({ dispatch, getPrevState }) => nextDispatch => action => {

  console.log('[ginkgo-redux-logger] %c prev state', 'color:gray', getPrevState());
  console.log('[ginkgo-redux-logger]', action);
  let next = nextDispatch(action);
  console.log('[ginkgo-redux-logger] %c next state', 'color:cornflowerblue', getPrevState());
  return next;
};

export default logger;

