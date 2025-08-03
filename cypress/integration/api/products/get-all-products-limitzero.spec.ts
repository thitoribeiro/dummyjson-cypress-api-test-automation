import { getAllProducts } from '../../../services/getProductsService'

describe('Feature: List All Products Limit Zero', () => {
  it(`Scenario: Get products with limit equal to 0
       When I send a GET request to "/products?limit=0"
       Then the response should have status 200
       And it should return the default number of products (30)`, () => {

    getAllProducts('?limit=0').then((response) => {
      expect(response.status).to.eq(200)

      const { products } = response.body

      // Valida que o retorno é de 30 produtos, comportamento padrão da API
      expect(products.length).to.eq(30)
    })
  })
})
