import { getProductById } from '../../../services/getProductsService'

describe('Feature: Get Single Product With Invalid ID', () => {
  it(`Scenario: Get a product by a non-existent ID
       Given the API is available
       When I send a GET request to "/products/99999"
       Then the response should have status 404 Not Found
       And the response body should indicate that the product was not found`, () => {
    
    const invalidId = 99999

    getProductById(invalidId).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('message')
      expect(response.body.message.toLowerCase()).to.include('not found')
    })
  })
})
