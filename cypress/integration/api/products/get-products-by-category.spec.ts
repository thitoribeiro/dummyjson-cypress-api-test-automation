import { getProductsByCategory } from '../../../services/getProductsService'

describe('Feature: Product Categories', () => {
  it('Scenario: Search products from "smartphones" category', () => {
    const categoryName = 'smartphones'

    // When I send a GET request to /products/category/smartphones
    getProductsByCategory(categoryName).then((response) => {
      // Then the response should have status 200
      expect(response.status).to.eq(200)

      // And all items in "products" should contain the category field with value "smartphones"
      expect(response.body.products).to.be.an('array').and.not.be.empty
      response.body.products.forEach((product: any) => {
        expect(product).to.have.property('category').and.to.eq(categoryName)
      })

      // And the "total" field should indicate the quantity of products in this category
      expect(response.body).to.have.property('total').and.to.eq(response.body.products.length)
    })
  })
})
