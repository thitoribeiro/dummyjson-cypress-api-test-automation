import { addProduct } from '../../../services/getProductsService'

describe('Add product with valid data', () => {
  it('Add product with valid data', () => {
    const productData = {
      title: 'BMW Pencil'
    }

    addProduct(productData).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id').and.to.be.a('number')
      expect(response.body).to.have.property('title').and.to.eq(productData.title)
      expect(response.body.title).to.eq('BMW Pencil')
    })
  })
})
