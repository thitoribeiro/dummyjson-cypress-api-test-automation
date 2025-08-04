import { searchProductsByTerm } from '../../../services/getProductsService'

describe('Search products with a valid term', () => {
  it('Search products with a valid term', () => {
    searchProductsByTerm('phone').then((response) => {
      expect(response.status).to.eq(200)

      const { products, total } = response.body

      expect(products.length).to.be.greaterThan(0)
      expect(total).to.be.greaterThan(0)

      products.forEach((product: any) => {
        expect(product).to.have.property('id')
        expect(product).to.have.property('title')
        expect(product).to.have.property('category')
      })
    })
  })
})
