import React from "react";
import { NavLink } from "react-router-dom";

export const Summary = () => {
  return (
    <>
      <div class="flex justify-center mt-5">
        <div class="relative overflow-x-auto">
          <table class="text-sm text-left">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Subject
                </th>
                <th scope="col" class="px-6 py-3">
                  Created By
                </th>
                <th scope="col" class="px-6 py-3">
                  Last Replier
                </th>
                <th scope="col" class="px-6 py-3">
                  Last Activity
                </th>
                <th scope="col" class="px-6 py-3">
                  Priority
                </th>
                <th scope="col" class="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <NavLink to="/updatecase">1</NavLink>
                </th>
                <td class="px-6 py-4">Cobranza</td>
                <td class="px-6 py-4">Giovanni Duarte</td>
                <td class="px-6 py-4">Cuauhtemoc Toscano</td>
                <td class="px-6 py-4">April 4, 2023 08:55 AM</td>
                <td class="px-6 py-4">High</td>
                <td class="px-6 py-4">April 14, 2023</td>
                <td class="px-6 py-4">In progress</td>
              </tr>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <NavLink to="/updatecase">2</NavLink>
                </th>
                <td class="px-6 py-4">Cobranza</td>
                <td class="px-6 py-4">Giovanni Duarte</td>
                <td class="px-6 py-4">Cuauhtemoc Toscano</td>
                <td class="px-6 py-4">April 4, 2023 08:55 AM</td>
                <td class="px-6 py-4">High</td>
                <td class="px-6 py-4">April 14, 2023</td>
                <td class="px-6 py-4">In progress</td>
              </tr>
              <tr class="bg-white">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <NavLink to="/updatecase">3</NavLink>
                </th>
                <td class="px-6 py-4">Cobranza</td>
                <td class="px-6 py-4">Giovanni Duarte</td>
                <td class="px-6 py-4">Cuauhtemoc Toscano</td>
                <td class="px-6 py-4">April 4, 2023 08:55 AM</td>
                <td class="px-6 py-4">High</td>
                <td class="px-6 py-4">April 14, 2023</td>
                <td class="px-6 py-4">In progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
