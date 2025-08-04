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

export const getAllProductsLimitZero = (queryParams = '') => {
  return cy.request({
    method: 'GET',
    url: `/products${queryParams}`,
  })
}


export function getProductById(id: number) {
  return cy.request({
    method: 'GET',
    url: `/products/${id}`,
    failOnStatusCode: false,
  })
}

export function searchProductsByTerm(term: string) {
  return cy.request({
    method: 'GET',
    url: `/products/search?q=${term}`,
    failOnStatusCode: false,
  });
}

export function getProductsWithSelectedFields(fields: string) {
  return cy.request({
    method: 'GET',
    url: `/products?select=${fields}`,
    failOnStatusCode: false,
  })
}

export function getProductsSorted(sortBy: string, order: string) {
  return cy.request({
    method: 'GET',
    url: `/products?sortBy=${sortBy}&order=${order}`,
    failOnStatusCode: false,
  })
}




