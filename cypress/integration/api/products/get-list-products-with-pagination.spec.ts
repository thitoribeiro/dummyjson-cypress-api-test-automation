import { getProductsWithPagination, getAllProducts } from '../../../services/getProductsService'

describe('Feature: List Products Pagination 10', () => {
  let firstPageProducts: any[] = []

  it('Scenario: List products with pagination (10 itens and limit and skip)', () => {
    // Step 1: Verifica se existem mais de 30 produtos na base
    getAllProducts().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.total).to.be.greaterThan(30)
    })

    // Step 2: Faz a requisição da primeira página (limit=10, skip=0)
    getProductsWithPagination(10, 0).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.have.length(10)
      firstPageProducts = response.body.products
    })

    // Step 3: Faz a requisição da segunda página (limit=10, skip=10)
    getProductsWithPagination(10, 10).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.products).to.have.length(10)

      const secondPageProducts = response.body.products

      // Valida que os produtos da segunda página são diferentes da primeira
      const differentProducts = secondPageProducts.filter(
        (product) => !firstPageProducts.some(p => p.id === product.id)
      )

      expect(differentProducts.length).to.eq(10)
    })
  })
})
