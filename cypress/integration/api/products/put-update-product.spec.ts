import { updateProduct } from '../../../services/getProductsService'

describe('Update Product', () => {
  it('Update title of an existing product', () => {
    const productId = 1
    const updatedTitle = 'iPhone Galaxy +1'
    const productData = {
      title: updatedTitle
    }

    updateProduct(productId, productData).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('title').and.to.eq(updatedTitle)
    })
  })
})
