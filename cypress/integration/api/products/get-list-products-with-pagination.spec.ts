import { getProductsWithPagination, getAllProducts } from '../../../services/getProductsService'

describe('List Products Pagination 10', () => {
  let firstPageProducts: any[] = []

  it('List products with pagination (10 itens and limit and skip)', () => {
    getAllProducts().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.total).to.be.greaterThan(30)
    })

    getProductsWithPagination(10, 0).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.have.length(10)
      firstPageProducts = response.body.products
    })

    getProductsWithPagination(10, 10).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.have.length(10)

      const secondPageProducts = response.body.products

      const differentProducts = secondPageProducts.filter(
        (product) => !firstPageProducts.some(p => p.id === product.id)
      )

      expect(differentProducts.length).to.eq(10)
    })
  })
})
