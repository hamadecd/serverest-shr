const { test, expect } = require('@playwright/test')

test('Verifica se a API Serverest está online', async ({ request }) => {
  const response = await request.get('http://ec2-44-211-254-73.compute-1.amazonaws.com:3000/usuarios')
  expect(response.status()).toBe(200)
  const data = await response.json()
  console.log(data)
})
