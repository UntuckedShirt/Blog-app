// we always have to not return undefined from a reducer
// in order to make sure we alwauys handle very action without error
// we need to usea swtich statemnt as opposed to an if statement
// then we would define a case
// we wanna rteturn some value so we always add a default case
// to our statement. This is extremely common synxtax you would see insie of a reducer
// this is all a reducer


export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      default:
        return state;
    }
  };