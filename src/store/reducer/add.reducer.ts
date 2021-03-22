const initSatate: any = [];

export const addReducer = (state = initSatate, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
