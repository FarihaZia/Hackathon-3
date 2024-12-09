
"use client"
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const Details = () => {
  const formFields = [
    { label: "First Name", type: "text", id: "username" },
    { label: "Last Name", type: "password", id: "password" },
    { label: "Comapny Name (optional)", type: "password", id: "confirm-password" },
    { label: "Country/Region", type: "text", id: "country", chevron: true },
    { label: "Street Address", type: "text", id: "street-address" },
    { label: "Town/City", type: "text", id: "city" },
    { label: "Province", type: "text", id: "province", chevron: true },
    { label: "Zip Code", type: "text", id: "postal-code" },
    { label: "Phone", type: "text", id: "phone-number" },
    { label: "Email", type: "email", id: "email" },

  ];

  const handleChevronClick = (fieldId:string) => {
    console.log(`Chevron clicked for: ${fieldId}`);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-start">
        <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col w-full">
          <h2 className="text-black text-[36px] font-semibold mb-5">Billing Detail</h2>
          <div className="flex flex-wrap gap-4">
            {/* First two fields in one line */}
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id} className="relative w-1/2 mb-4">
                <label
                  htmlFor={field.id}
                  className="leading-7 text-sm text-gray-600"
                >
                  {field.label}
                </label>
                <Input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="bg-white rounded border border-gray-400 w-full h-12 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            ))}
          </div>
          {/* Remaining fields */}
          {formFields.slice(2).map((field) => (
            <div key={field.id} className="relative mb-4">
              <label
                htmlFor={field.id}
                className="leading-7 text-sm text-gray-600"
              >
                {field.label}
              </label>
              <div className="relative">
                <Input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className="bg-white rounded border border-gray-400 w-full h-12 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {field.chevron && (
                  <ChevronDown
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                    onClick={() => handleChevronClick(field.id)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
