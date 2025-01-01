"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

export default function Header() {

  return (
    <header className="relative">
      <nav aria-label="Top">
        {/* Top navigation */}
        <div className="bg-gray-900">
          <div className="mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form className="hidden lg:block lg:flex-1">
              <div className="-ml-2 inline-grid grid-cols-1">
                <select
                  id="desktop-currency"
                  name="currency"
                  aria-label="Currency"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pl-2 pr-7 text-left text-base font-medium text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                >
                  {currencies.map((currency) => (
                    <option key={currency}>{currency}</option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                />
              </div>
            </form>

            <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
              WTF is bernie doing?
            </p>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Create an account
              </a>
              <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-100"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>


      </nav>
    </header>
  );
}
