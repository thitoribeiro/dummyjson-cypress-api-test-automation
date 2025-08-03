import { getAllProducts } from '../../../services/getProductsService'

describe('Feature: List Products', () => {
  it('Scenario: List all products with default pagination (up to 30 items)', () => {
    // Given
    cy.log('Given the product API is up and running')

    // When
    cy.log('When I send a GET request to the "/products" endpoint without query params')
    getAllProducts().then((response) => {
      // Then
      cy.log('Then the response status code should be 200')
      expect(response.status).to.eq(200)

      cy.log('And the "products" array should contain at most 30 items')
      expect(response.body.products).to.have.length.at.most(30)

      cy.log('And the response body should include the fields "total", "skip", and "limit"')
      expect(response.body).to.have.property('total')
      expect(response.body).to.have.property('skip')
      expect(response.body).to.have.property('limit')
    })
  })
})
