const { test, expect } = require('@playwright/test')

test('Verifica se a API Serverest está online', async ({ request }) => {
  const response = await request.get('http://44.211.254.73:3000/usuarios')
  expect(response.status()).toBe(200)
  const data = await response.json()
  console.log(data)
})
