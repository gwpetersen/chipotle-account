import { Page } from "playwright-core";
import { expect } from "@playwright/test";
import { PaymentFormInputs } from "../../types";

export class PaymentHelper {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    // this is assuming that both the account and checkout pages
    // are using a shared component
    // the only diff is the checkout page renders two additional input fields
    async enterPaymenInfo(formInputs: PaymentFormInputs) {
        // going to assume checkout page requres ssn and dob
        this.page.getByTestId('cardnumber-test-id').type(formInputs.cardNumber)
        this.page.getByTestId('firstName-test-id').type(formInputs.firstName)
        this.page.getByTestId('lastName-test-id').type(formInputs.lastName)
        this.page.getByTestId('expires-test-id').type(formInputs.expires)
        this.page.getByTestId('zip-test-id').type(formInputs.zipCode)
        if (this.page.url().includes('/checkout')) {
            expect(formInputs.dateOfBirth, 'checkout page requires dob').toBeDefined();
            expect(formInputs.ssn, 'checkout page requires ssn').toBeDefined();
            if(formInputs.dateOfBirth){
                this.page.getByTestId('dob-test-id').type(formInputs.dateOfBirth)
            }
            if(formInputs.ssn){
                this.page.getByTestId('ssn-test-id').type(formInputs.ssn)
            }
        }
    }
}