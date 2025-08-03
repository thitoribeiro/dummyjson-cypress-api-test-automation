import { searchProductsByTerm } from '../../../services/getProductsService'

describe('Feature: Search products with a non-existent term', () => {
  it(`Scenario: Search products with a non-existent term
       When I send a GET request to /products/search?q=xyzinexistent
       Then the response should have status 200
       And the "products" list should be empty
       And the "total" field should be equal to 0`, () => {

    searchProductsByTerm('xyzinexistent').then((response) => {
      expect(response.status).to.eq(200)

      const { products, total } = response.body

      expect(products).to.be.an('array').that.is.empty
      expect(total).to.eq(0)
    })
  })
})
