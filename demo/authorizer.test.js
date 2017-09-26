/* const checkAutorizer = autorizer([{id: 1}, {id: 3}, {id: 5}])

checkAutorizer([{id: 3}, {id: 5}])
*/ 
// spr czy wszyscy spełniają warunek taki, ze jest choc jednym z oryginalnej listy
import authorizer from './authorizer'

describe('authorizer', () => {
  let usersAuthorized
  beforeEach(() => {
    usersAuthorized = [{id: 1}, {id: 3}, {id: 5}]
  })

  it('returns true when all users exixt in original list', () => {
    const usersToCheck = [{id: 3}, {id: 5}]
    const usersAreAuthorized = authorizer(usersAuthorized)(usersToCheck)
    // Higher order function
    expect(usersAreAuthorized).toBe(true)
  })

  it('return false when at least one user is not in the original list', () => {

  })
})