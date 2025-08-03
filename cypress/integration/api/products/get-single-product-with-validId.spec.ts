import { getProductById } from '../../../services/getProductsService'

describe('Feature: Get Single Product With Valid Id', () => {
  it(`Scenario: Get an existing product by ID`, () => {
    getProductById(1).then((response) => {
      expect(response.status).to.eq(200)

      const product = response.body

      // Atributos básicos
      expect(product.id).to.eq(1)
      expect(product.title).to.eq('Essence Mascara Lash Princess')
      expect(product.description).to.eq(
        'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.'
      )
      expect(product.category).to.eq('beauty')
      expect(product.price).to.eq(9.99)
      expect(product.discountPercentage).to.eq(7.17)
      expect(product.rating).to.eq(4.94)
      expect(product.stock).to.eq(5)

      // Tags
      expect(product.tags).to.include.members(['beauty', 'mascara'])

      // Dados adicionais
      expect(product.brand).to.eq('Essence')
      expect(product.sku).to.eq('RCH45Q1A')
      expect(product.weight).to.eq(2)

      // Dimensões
      expect(product.dimensions).to.deep.equal({
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      })

      // Informações extras
      expect(product.warrantyInformation).to.eq('1 month warranty')
      expect(product.shippingInformation).to.eq('Ships in 1 month')
      expect(product.availabilityStatus).to.eq('Low Stock')
      expect(product.returnPolicy).to.eq('30 days return policy')
      expect(product.minimumOrderQuantity).to.eq(24)

      // Metadados
      expect(product.meta).to.have.all.keys('createdAt', 'updatedAt', 'barcode', 'qrCode')
    })
  })
})
