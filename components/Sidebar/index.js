import { MdHome } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

import "./index.css";

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li>
          <MdHome />
          Home
        </li>
        <li>
          <TbGridDots />
          Dashboard
        </li>
        <li className="side-panel-heading">Services</li>
        <ul>
          <li className="airports-title-selected">Airports</li>
          <li>Videos</li>
        </ul>
        <li className="side-panel-heading">Others</li>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
