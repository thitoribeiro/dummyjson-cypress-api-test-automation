import { getProductById } from '../../../services/getProductsService'

describe('Get Single Product With Invalid ID', () => {
  it('Get a product by a non-existent ID', () => {
    const invalidId = 99999

    getProductById(invalidId).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('message')
      expect(response.body.message.toLowerCase()).to.include('not found')
    })
  })
})
