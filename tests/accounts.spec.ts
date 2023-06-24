import { test } from '@playwright/test';
import { PaymentHelper } from '../support/helpers/payments';

test('enter payment checkout page', async ({ page }) => {
  // checkout page
  await page.goto('https://playwright.dev/checkout/1234');
  const payment = new PaymentHelper(page)
  await payment.enterPaymenInfo({
    firstName: 'Garett',
    lastName: 'Petersen',
    cardNumber: '1234',
    zipCode: '92802',
    dateOfBirth: '08221992',
    ssn: '2222',
    expires: '0822'
  })
});

test('enter payment info account page', async ({ page }) => {
  // account page
  await page.goto('https://playwright.dev/account/1234');
  const payment = new PaymentHelper(page)
  await payment.enterPaymenInfo({
    firstName: 'Garett',
    lastName: 'Petersen',
    cardNumber: '1234',
    zipCode: '92802',
    expires: '0822'
  })
});

