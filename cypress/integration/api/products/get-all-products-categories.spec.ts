import { getProductsCategories } from '../../../services/getProductsService'

describe('Feature: List Products Categories', () => {
  it('Scenario: List all product categories', () => {
    getProductsCategories().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array').and.not.be.empty
      response.body.forEach((category: any) => {
        expect(category).to.be.an('object')
        expect(category).to.have.property('slug').that.is.a('string')
        expect(category).to.have.property('name').that.is.a('string')
      })
    })
  })
})
