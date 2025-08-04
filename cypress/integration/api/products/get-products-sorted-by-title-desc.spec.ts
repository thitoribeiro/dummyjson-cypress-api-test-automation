import { getProductsSorted } from '../../../services/getProductsService'

describe('Feature: List products sorted by title in descending order', () => {
  it('Scenario: List products sorted by title in descending order', () => {
    let firstResponseTitles: any[]

    getProductsSorted('title', 'desc').then((response) => {
      expect(response.status).to.eq(200)
      firstResponseTitles = response.body.products.map((p: any) => p.title)
    })

    getProductsSorted('title', 'desc').then((response) => {
      expect(response.status).to.eq(200)
      const secondResponseTitles = response.body.products.map((p: any) => p.title)
      expect(firstResponseTitles).to.deep.eq(secondResponseTitles)
    })
  })
})
