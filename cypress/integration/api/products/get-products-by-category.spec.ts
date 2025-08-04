import { getProductsByCategory } from '../../../services/getProductsService'

describe('Product Categories', () => {
  it('Search products from "smartphones" category', () => {
    const categoryName = 'smartphones'

    getProductsByCategory(categoryName).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.be.an('array').and.not.be.empty
      response.body.products.forEach((product: any) => {
        expect(product).to.have.property('category').and.to.eq(categoryName)
      })
      expect(response.body).to.have.property('total').and.to.eq(response.body.products.length)
    })
  })
})
