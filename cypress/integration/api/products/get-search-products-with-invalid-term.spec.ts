import { searchProductsByTerm } from '../../../services/getProductsService'

describe('Search products with a non-existent term', () => {
  it('Search products with a non-existent term', () => {
    searchProductsByTerm('xyzinexistent').then((response) => {
      expect(response.status).to.eq(200)

      const { products, total } = response.body

      expect(products).to.be.an('array').that.is.empty
      expect(total).to.eq(0)
    })
  })
})
