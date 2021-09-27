export function managePresents(state, action) {
  // your code here
  switch (action.type) {
    case "presents/increase" :
      return {numberOfPresents: state.numberOfPresents+1}
    default :
      return {numberOfPresents: 0}
  }
}
