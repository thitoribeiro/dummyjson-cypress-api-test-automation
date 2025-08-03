import { getAllProductsLimitZero } from '../../../services/getProductsService'

describe('Feature: List All Products with Limit Zero', () => {
  it(`Scenario: Get all products using limit=0
       When I send a GET request to "/products?limit=0"
       Then the response should have status 200
       And it should return all available products`, () => {

    getAllProductsLimitZero('?limit=0').then((response) => {
      expect(response.status).to.eq(200)

      const { products, total } = response.body

      // Valida que o retorno traz todos os produtos existentes
      expect(products.length).to.eq(total)
    })
  })
})
