import { deleteProduct } from '../../../services/getProductsService'

describe('Delete Product', () => {
  it('Delete an existing product', () => {
    const productId = 1

    // When I send a DELETE request to /products/1
    deleteProduct(productId).then((response) => {
      // Then the response should have status 200
      expect(response.status).to.eq(200)

      // And the returned product should contain the fields isDeleted: true and deletedOn with a valid date
      expect(response.body).to.have.property('isDeleted').and.to.be.true
      expect(response.body).to.have.property('deletedOn').and.to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
    })
  })
})
