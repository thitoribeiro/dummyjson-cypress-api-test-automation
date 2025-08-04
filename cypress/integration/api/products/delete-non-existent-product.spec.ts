import { deleteProduct } from '../../../services/getProductsService'

describe('Delete Product', () => {
  it('Delete a non-existent product', () => {
    const nonExistentProductId = 99999

    deleteProduct(nonExistentProductId).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('message').and.to.eq(`Product with id '${nonExistentProductId}' not found`)
    })
  })
})
