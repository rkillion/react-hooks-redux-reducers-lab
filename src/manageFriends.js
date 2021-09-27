export function manageFriends(state, action) {
  // your code here
  switch (action.type) {
    case "friends/add" :
      return {friends: [...state.friends,{
        name: action.payload.name,
        hometown: action.payload.hometown,
        id: action.payload.id
      }]}
    case "friends/remove" :
      return {friends: state.friends.filter(friend=>friend.id!==action.payload)}
    default :
      return JSON.parse(JSON.stringify(state))
  }
}
