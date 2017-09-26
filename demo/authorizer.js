export default allAuthUsers => 
  allUsersToCheck =>
    allUsersToCheck.every(userToCheck => 
      allAuthUsers.some(({ id }) => id === userToCheck.id),
    )
