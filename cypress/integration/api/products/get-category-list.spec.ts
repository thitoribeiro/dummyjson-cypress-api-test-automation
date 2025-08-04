import { getCategoryList } from '../../../services/getProductsService'

describe('Feature: Product Categories', () => {
  it('Scenario: Retrieve list of category names', () => {
    // When I send a GET request to /products/category-list
    getCategoryList().then((response) => {
      // Then the response should have status 200
      expect(response.status).to.eq(200)

      // And the response should be a list of strings with category names
      expect(response.body).to.be.an('array').and.not.be.empty
      response.body.forEach((category: any) => {
        expect(category).to.be.a('string')
      })

      // And it should contain known categories like "smartphones", "furniture", "beauty"
      expect(response.body).to.include('smartphones')
      expect(response.body).to.include('furniture')
      expect(response.body).to.include('beauty')
    })
  })
})
