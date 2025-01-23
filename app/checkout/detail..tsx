"use client";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type FormValues = {
  username: string;
  password: string;
  "confirm-password": string;
  country: string;
  "street-address": string;
  city: string;
  province: string;
  "postal-code": string;
  "phone-number": string;
  email: string;
  paymentMethod: string;
  deliveryOption: string;
};

const Details = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    password: "",
    "confirm-password": "",
    country: "",
    "street-address": "",
    city: "",
    province: "",
    "postal-code": "",
    "phone-number": "",
    email: "",
    paymentMethod: "",
    deliveryOption: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const formFields: {
    label: string;
    type: string;
    id: keyof FormValues;
    required?: boolean;
    chevron?: boolean;
  }[] = [
    { label: "First Name", type: "text", id: "username", required: true },
    { label: "Last Name", type: "text", id: "password", required: true },
    { label: "Company Name (optional)", type: "text", id: "confirm-password" },
    {
      label: "Country/Region",
      type: "text",
      id: "country",
      required: true,
      chevron: true,
    },
    {
      label: "Street Address",
      type: "text",
      id: "street-address",
      required: true,
    },
    { label: "Town/City", type: "text", id: "city", required: true },
    {
      label: "Province",
      type: "text",
      id: "province",
      required: true,
      chevron: true,
    },
    { label: "Zip Code", type: "text", id: "postal-code", required: true },
    { label: "Phone", type: "text", id: "phone-number", required: true },
    { label: "Email", type: "email", id: "email", required: true },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors:Record<string, string> = {};

    formFields.forEach((field) => {
      if (field.required && !formValues[field.id]) {
        errors[field.id] = `${field.label} is required`;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setOrderConfirmed(true);
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-4xl rounded-lg shadow-lg p-8 bg-white">
        <h2 className="text-black text-[36px] font-semibold mb-8 text-center">
          Billing Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* First two fields in one line */}
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id} className="relative">
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  {field.label}
                </label>
                <Input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formValues[field.id]}
                  onChange={handleChange}
                  className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {formErrors[field.id] && (
                  <span className="text-red-500 text-xs mt-1">
                    {formErrors[field.id]}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Remaining fields */}
          {formFields.slice(2).map((field) => (
            <div key={field.id} className="relative mb-6">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                {field.label}
              </label>
              <div className="relative">
                <Input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formValues[field.id]}
                  onChange={handleChange}
                  className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {field.chevron && (
                  <ChevronDown className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
                )}
                {formErrors[field.id] && (
                  <span className="text-red-500 text-xs mt-1">
                    {formErrors[field.id]}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={formValues.paymentMethod}
              onChange={handleChange}
              className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
            {formErrors.paymentMethod && (
              <span className="text-red-500 text-xs mt-1">
                {formErrors.paymentMethod}
              </span>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Delivery Option
            </label>
            <select
              id="deliveryOption"
              value={formValues.deliveryOption}
              onChange={handleChange}
              className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Delivery Option</option>
              <option value="standard">Standard Delivery</option>
              <option value="express">Express Delivery</option>
            </select>
            {formErrors.deliveryOption && (
              <span className="text-red-500 text-xs mt-1">
                {formErrors.deliveryOption}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-8 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            {orderConfirmed ? "Order Confirmed!" : "Confirm Order"}
          </button>
        </form>

        {orderConfirmed && (
          <div className="mt-6 text-center text-green-500 text-xl font-semibold">
            Your order has been confirmed. Thank you for shopping with us!
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
