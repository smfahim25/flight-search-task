/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const DataTable = ({ flights }) => {
  return (
    <div className="">
      <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                FLIGHT
              </th>
              <th scope="col" className="px-6 py-3">
                AIRCRAFT
              </th>
              <th scope="col" className="px-6 py-3">
                CLASS
              </th>
              <th scope="col" className="px-6 py-3">
                FARE
              </th>
              <th scope="col" className="px-6 py-3">
                ROUTE
              </th>
              <th scope="col" className="px-6 py-3">
                DEPARTURE
              </th>
              <th scope="col" className="px-6 py-3">
                ARRIVAL
              </th>
              <th scope="col" className="px-6 py-3">
                DURATION
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {flight.itineraries[0].segments.map((segment) => (
                    <div key={segment.flightNumber}>
                      {segment.marketingCarrier} {segment.flightNumber}
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {flight.itineraries[0].segments.map((segment) => (
                    <div key={segment.flightNumber}>{segment.aircraft}</div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {flight.class.map((option) => (
                    <div key={option}>{option}</div>
                  ))}
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  {flight.fareBasis.map((option) => (
                    <div key={option}>{option}</div>
                  ))}
                </td>
                <td className="px-2 py-4 whitespace-nowrap">
                  {flight.itineraries[0].segments
                    .map((segment) => segment.departure.iataCode)
                    .join(" - ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {flight.itineraries[0].segments.map((segment) => (
                    <div key={segment.flightNumber}>{segment.departure.at}</div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {flight.itineraries[0].segments.map((segment) => (
                    <div key={segment.flightNumber}>{segment.arrival.at}</div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {flight.itineraries[0].duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{flight.price}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    SELECT
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
