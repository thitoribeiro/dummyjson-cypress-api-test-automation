import { getCategoryList } from '../../../services/getProductsService'

describe('Product Categories', () => {
  it('Retrieve list of category names', () => {
    getCategoryList().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array').and.not.be.empty
      response.body.forEach((category: any) => {
        expect(category).to.be.a('string')
      })
      expect(response.body).to.include('smartphones')
      expect(response.body).to.include('furniture')
      expect(response.body).to.include('beauty')
    })
  })
})
