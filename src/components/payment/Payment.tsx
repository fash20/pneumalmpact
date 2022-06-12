import { Button, Heading, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";

interface PaymentType {
  cardName: string;
  cardNumber: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
}

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: 0,
    expirationMonth: 0,
    expirationYear: 0,
    cvc: 0,
  });

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "cardName":
        setPaymentDetails({ ...paymentDetails, cardName: event.target.value });
        break;
      case "cardNumber":
        setPaymentDetails({
          ...paymentDetails,
          cardNumber: Number(event.target.value),
        });
        break;
      case "expirationMonth":
        setPaymentDetails({
          ...paymentDetails,
          expirationMonth: Number(event.target.value),
        });
        break;
      case "expirationMoth":
        setPaymentDetails({
          ...paymentDetails,
          expirationYear: Number(event.target.value),
        });
        break;
      case "cvc":
        setPaymentDetails({
          ...paymentDetails,
          cvc: Number(event.target.value),
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="text-center">
        <Heading size={800}>Payment Details</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid grid-cols-1 gap-x-4">
          <TextInputField
            isInvalid={ false }
            inputHeight={50}
            label="Card Name"
            placeholder={"Card Name"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "cardName")
            }
          />
          <TextInputField
            inputHeight={50}
            type= "number"
            label="Card Number"
            placeholder="Card Number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "cardNumber")
            }
           
          />
          <div className="grid gap-5 grid-cols-2">
            <div className="grid grid-cols-1">
              <div className="grid gap-4 grid-cols-2 justify-center align-middle ">
                <TextInputField
                  inputHeight={50}
                  type= "number"
                  placeholder="MM"
                  label="Expiration"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onchange(event, "expirationMonth")
                  }
                
                />
                <TextInputField
                  inputHeight={50}
                  isInvalid ={paymentDetails.expirationYear === 0 ? true: false}
                  type= "number"
                  placeholder="YY"
                  label={`-`}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onchange(event, "expirationYear")
                  }
                
                />
              </div>
            </div>
            <TextInputField
              inputHeight={50}
              placeholder="CVC"
              max={3}
              label="CVC"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onchange(event, "cvc")
              }
              validationMessage="This field is required"
            />
          </div>
          <Button
            appearance="primary"
            onClick={() => alert(JSON.stringify(paymentDetails))}
          >
            Done
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <Heading>Create an Account</Heading>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  );
};

export default Payment;
