export interface PaymentFormInputs {
    firstName: string;
    lastName: string;
    cardNumber: string;
    expires: string;
    zipCode: string;
    dateOfBirth?: string;
    ssn?: string;
}