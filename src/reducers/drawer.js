const drawerReducer = (state = false, action) => {
  switch(action.type) {
    case 'OPEN_DRAWER':
      {
        return true;
      }
    case 'CLOSE_DRAWER': {
      return false;
    }
    default: {
      return state;
    }
  }
}
export default drawerReducer;