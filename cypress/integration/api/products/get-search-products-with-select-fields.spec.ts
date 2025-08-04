import { getProductsWithSelectedFields } from '../../../services/getProductsService'

describe('Search Products With Selected Fields', () => {
  it('Search products returning only title and price', () => {
    getProductsWithSelectedFields('title,price').then((response) => {
      expect(response.status).to.eq(200)

      const { products } = response.body

      expect(products.length).to.be.greaterThan(0)

      products.forEach((product: any) => {
        expect(product).to.have.all.keys('id', 'title', 'price')
        expect(product).to.not.have.any.keys(
          'description',
          'category',
          'brand',
          'stock',
          'rating',
          'tags',
          'discountPercentage'
        )
      })
    })
  })
})
