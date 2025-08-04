import { getProductsByCategory } from '../../../services/getProductsService'

describe('Product Categories', () => {
  it('Search products from a non-existent category', () => {
    const nonExistentCategory = 'xyz-invalid'

    getProductsByCategory(nonExistentCategory).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('message').and.to.eq(`Category '${nonExistentCategory}' not found`)
    })
  })
})
