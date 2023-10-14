export const paymentsItems = [
  {
    id: 'price_1MM8LjJfILczTqO2ZU6YfbRX',
    name: 'Sunglasses',
    price: 'price_1MM8LjJfILczTqO2ZU6YfbRX',
    currency: 'usd',
    image: '/images/image/im-payments-glasses.png',
    object: 'payment_intent',
    amount: 500,
    capture_method: 'automatic',
    confirmation_method: 'automatic',
    created: 1547566107,
    payment_method_types: [
      'card',
    ],
    status: 'requires_payment_method',
    customer: 'denys.buhor@onix-systems.com',
  },
  {
    id: 'price_1MM8MRJfILczTqO20uy6q1Dw',
    name: 'Headphones',
    price: 'price_1MM8MRJfILczTqO20uy6q1Dw',
    currency: 'usd',
    image: '/images/image/im-payments-headphones.png',
    object: 'payment_intent',
    amount: 1500,
    capture_method: 'automatic',
    confirmation_method: 'automatic',
    created: 1547566107,
    payment_method_types: [
      'card',
    ],
    status: 'requires_payment_method',
    customer: 'denys.buhor@onix-systems.com',
  },
];

export const donatItems = [
  {
    id: 'price_5doll',
    name: 'Donat small',
    quantity: '1',
    price: '5.00',
    currency: 'USD',
    amount: 500,
    title_button: 'DONAT',
    unit_amount: {
      currency_code: 'USD',
      value: '5',
    },
    category: 'DONATION',
  },
  {
    id: 'price_10doll',
    name: 'Donat medium',
    quantity: '1',
    price: '10.00',
    currency: 'USD',
    amount: 1000,
    title_button: 'DONAT',
    unit_amount: {
      currency_code: 'USD',
      value: '10',
    },
    category: 'DONATION',
  },
  {
    id: 'price_15doll',
    name: 'Donat large',
    quantity: '1',
    price: '15.00',
    currency: 'USD',
    amount: 1500,
    title_button: 'DONAT',
    unit_amount: {
      currency_code: 'USD',
      value: '5',
    },
    category: 'DONATION',
  },
];

// Example `purchase_units` in PayPalButtons.actions.order.create
export const amountPayPal = {
  amount: {
    value: '2',
    breakdown: {
      item_total: {
        currency_code: 'USD',
        value: '2',
      },
    },
  },
  items: donatItems,
};
