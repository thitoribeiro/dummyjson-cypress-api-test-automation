export const getAllProducts = () => {
  return cy.request({
    method: 'GET',
    url: '/products'
  })
}
