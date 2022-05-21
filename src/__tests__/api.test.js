import { baseUrl } from '../services/anecdotes'


describe('API', () => {
  test('API url is correct',  async () => {
    expect(baseUrl).toEqual('https://anekdootit-fullstack2022.herokuapp.com/api/anecdotes')
  })
})