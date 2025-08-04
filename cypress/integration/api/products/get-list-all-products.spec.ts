import { getAllProducts } from '../../../services/getProductsService'

describe('List All Products', () => {
  it('List all products with default pagination (up to 30 items)', () => {
    getAllProducts().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.have.length.at.most(30)
      expect(response.body).to.have.property('total')
      expect(response.body).to.have.property('skip')
      expect(response.body).to.have.property('limit')
    })
  })
})
