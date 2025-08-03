export const getAllProducts = () => {
  return cy.request({
    method: 'GET',
    url: '/products'
  })
}

export const getProductsWithPagination = (limit: number, skip: number) => {
  return cy.request({
    method: 'GET',
    url: `/products?limit=${limit}&skip=${skip}`
  })
}
