import React, { FC } from 'react';
import StripeCheckout from 'react-stripe-checkout';

type Props = {
  price: number;
};

const StripeCheckoutButton: FC<Props> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H8BYeKgU3RvaoWrTLE7dYjUnSWQWmJR5Of0XmTUOpvrTTW5YsGesgQCUnxbs3pHLRn2jOxJi4LvA7o9W6HA7ldj00tpGWPQAW';

  const onToken = (token: any) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
