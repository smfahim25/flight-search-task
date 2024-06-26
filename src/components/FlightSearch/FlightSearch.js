import React, { useState } from "react";
import flightData from "../../assets/data/LHR_CDG_ADT1_TYPE_1.json";
import DataTable from "../DataTable/DataTable";

const FlightSearch = () => {
  const [passenger, setPassenger] = useState(1);
  const [flightOffers, setFlightOffers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const getFlightOffers = () => {
    setFlightOffers(flightData.flightOffer);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsChecked(false);
    if (event.target.value === "Driver License1") {
      setSelectedOption(event.target.value);
      setIsChecked(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show loading state
    setLoading(true);

    // Simulate a delay before showing the result
    setTimeout(() => {
      // Update the result state
      getFlightOffers();

      // Hide loading state
      setLoading(false);

      // Show result
      setShowResult(true);
    }, 5000); // Simulating a 6-second delay
  };

  return (
    <div className="mx-3">
      <div>
        <h2 className="text-xl font-bold text-gray-700 m-2">Master Price</h2>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license1"
                  type="radio"
                  value="Driver License1"
                  name="list-radio"
                  className="hidden-input" // Hide the default radio button
                  onChange={handleOptionChange}
                  checked={isChecked} // Set default selection
                />
                <label
                  htmlFor="horizontal-list-radio-license1"
                  className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                    selectedOption === "Driver License1" ? "selected" : ""
                  }`}
                >
                  Round Trip
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div
                className="flex items-center ps-3"
                onChange={handleOptionChange}
              >
                <input
                  id="horizontal-list-radio-license2"
                  type="radio"
                  value="Driver License2"
                  name="list-radio"
                  className="hidden-input" // Hide the default radio button
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="horizontal-list-radio-license2"
                  className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                    selectedOption === "Driver License2" ? "selected" : ""
                  }`}
                >
                  One Way
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license3"
                  type="radio"
                  value="Driver License3"
                  name="list-radio"
                  className="hidden-input" // Hide the default radio button
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="horizontal-list-radio-license3"
                  className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                    selectedOption === "Driver License3" ? "selected" : ""
                  }`}
                >
                  Multi City
                </label>
              </div>
            </li>
          </ul>
          <div className="flex">
            <select
              id="passengers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  max-w-[10rem] mr-2"
            >
              <option selected>Adult</option>
              <option value="child">Child</option>
              <option value="infant">Infant</option>
            </select>

            <div className="relative flex items-center max-w-[10rem]">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="bedrooms-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                onClick={() => setPassenger(passenger > 1 ? passenger - 1 : 1)}
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="number"
                id="bedrooms-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-3 "
                placeholder=""
                onChange={(e) => setPassenger(e.target.value)}
                value={passenger}
                required
              />
              <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                <span>Passenger</span>
              </div>
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="bedrooms-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                onClick={() => setPassenger(passenger + 1)}
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-5">
          <div>
            <input
              type="text"
              id="from"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="From"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="destination"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="To"
              required
            />
          </div>
          <div>
            <input
              type="date"
              id="departure"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"
              placeholder="Departure"
              required
            />
          </div>
          <div>
            <input
              type="date"
              id="return"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Return"
            />
          </div>
          <button
            type="submit"
            className="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Search
          </button>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Extra options
            </label>
          </div>

          <div className="flex mb-6">
            <div className="flex items-center me-4">
              <label
                for="inline-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Environment
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Dummy
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-2-radio"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                PDT
              </label>
            </div>
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </form>
      <div className="flex justify-center align-middle mt-8">
        {loading && <span className="loading loading-bars loading-lg"></span>}
      </div>
      {showResult && flightOffers.length > 0 && (
        <div>
          <DataTable flights={flightOffers} />
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
