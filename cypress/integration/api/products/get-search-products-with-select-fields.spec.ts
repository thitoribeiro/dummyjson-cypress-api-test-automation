import { getProductsWithSelectedFields } from '../../../services/getProductsService'

describe('Feature: Search Products With Selected Fields', () => {
  it(`Scenario: Search products returning only title and price
        When I send a GET request to "/products?select=title,price"
        Then the response should have status 200
        And each item in the "products" list should contain only the fields title and price (and id)
        And it should not contain fields like description, category, etc.`, () => {
    
    getProductsWithSelectedFields('title,price').then((response) => {
      expect(response.status).to.eq(200)

      const { products } = response.body

      expect(products.length).to.be.greaterThan(0)

      products.forEach((product: any) => {
        // Deve conter apenas os campos id, title e price
        expect(product).to.have.all.keys('id', 'title', 'price')

        // Deve **NÃO** conter campos como description, category etc.
        expect(product).to.not.have.any.keys(
          'description',
          'category',
          'brand',
          'stock',
          'rating',
          'tags',
          'discountPercentage'
        )
      })
    })
  })
})
