import { searchProductsByTerm } from '../../../services/getProductsService'

describe('Feature: Search products with a valid term', () => {
  it(`Scenario: Search products with a valid term
       Given the API is available
       When I send a GET request to /products/search?q=phone
       Then the response should have status 200
       And the "products" list should contain at least one item
       And the "total" field should be greater than 0
       And each product should contain the mandatory fields: id, title, category`, () => {

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
