import { getAllProductsLimitZero } from '../../../services/getProductsService'

describe('List All Products with Limit Zero', () => {
  it('Get all products using limit=0', () => {
    getAllProductsLimitZero('?limit=0').then((response) => {
      expect(response.status).to.eq(200)

      const { products, total } = response.body

      expect(products.length).to.eq(total)
    })
  })
})
