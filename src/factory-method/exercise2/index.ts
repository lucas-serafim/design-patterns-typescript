interface PaymentProcessorImpl {
    processPayment(amount: number): string;
}

class CreditCardProcessor implements PaymentProcessorImpl {
    processPayment(amount: number): string {
        return `Processed $${amount} with credit card`
    }
}

class PayPalProcessor implements PaymentProcessorImpl {
    processPayment(amount: number): string {
        return `Processed $${amount} via PayPal`
    }
}

class PaymentFactory {
    createProcessor(type: string): PaymentProcessorImpl {
        switch (type) {
            case "creditCard":
                return new CreditCardProcessor();

            case "paypal":
                return new PayPalProcessor();

            default:
                throw new Error(`Invalid payment method:  ${type}. Valid types are  "creditCard" and "paypal"`);
        }
    }
}

const creditCard = new PaymentFactory().createProcessor("creditCard");
console.log(creditCard.processPayment(100.00))

const paypal = new PaymentFactory().createProcessor("paypal");
console.log(paypal.processPayment(132.01))

try {
    new PaymentFactory().createProcessor("debit")
} catch (error) {
    console.log(error)
}