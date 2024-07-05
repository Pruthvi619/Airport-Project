import { Component } from "react";

import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowDownShort } from "react-icons/bs";

import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";

const airports = [
  {
    name: "Indira Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminals: 3,
  },
  {
    name: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminals: 5,
  },
  {
    name: "Heathrow Airport",
    country: "England",
    code: "LHR",
    terminals: 6,
  },
  {
    name: "Istanbul Airport",
    country: "Turkey",
    code: "IST",
    terminals: 3,
  },
  {
    name: "Dallas/Fort Worth International Airport",
    country: "USA",
    code: "DFW",
    terminals: 5,
  },
];

class Desktop1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <main className="main-content">
          <header>
            <h1>
              Airports
              <BsArrowDownShort className="icon-arrow" />
            </h1>
            <button type="button" className="add-new" aria-label="newButton">
              + Add new
            </button>
          </header>
          <table>
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" aria-label="Select all airports" />
                  </label>
                </th>
                <th>All Airports</th>
                <th>Country</th>
                <th>Code</th>
                <th>Terminals</th>
              </tr>
            </thead>
            <tbody>
              {airports.map((airport) => (
                <tr key={airport.name}>
                  <td>
                    <label>
                      <input type="checkbox" aria-label="Select airport" />
                    </label>
                  </td>
                  <td>{airport.name}</td>
                  <td>{airport.country}</td>
                  <td>{airport.code}</td>
                  <td>{airport.terminals}</td>
                  <MdModeEditOutline className="action-button" />
                  <RiDeleteBin6Line className="action-button" />
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default Desktop1;
