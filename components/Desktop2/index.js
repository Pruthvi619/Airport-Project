import { Component } from "react";
import {
  PiUploadBold,
  PiGreaterThanLight,
  PiToggleLeftFill,
} from "react-icons/pi";
import Header from "../Header";
import Sidebar from "../Sidebar";
import NewTerminal from "../NewTerminal";
import "./index.css";

class Desktop2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Header />
        <Sidebar />
        <div>
          <div className="main-content">
            <div className="breadcrumb">
              <h1>
                Airports <PiGreaterThanLight className="icon" /> Indira Gandhi
                International Airport
              </h1>
            </div>
            <h1>Indira Gandhi International Airport</h1>
            <div className="tabs">
              <button aria-label="tab" className="tab" type="button">
                Terminals
              </button>
              <button aria-label="transport" className="tab" type="button">
                Transport
              </button>
              <button aria-label="contact" className="tab" type="button">
                Contact details
              </button>
            </div>
            <hr />
            <div className="terminal-container">
              <div className="terminal-cards">
                <div className="terminal-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                    alt="terminalImage"
                    className="terminal-image"
                  />
                </div>
                <div>
                  <p className="terminal-title">Terminal 1</p>
                  <p className="terminal-description">
                    Optional metadata should be two lines.
                  </p>
                </div>
              </div>
              <div className="terminal-cards">
                <div className="terminal-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                    alt="terminalImage"
                    className="terminal-image"
                  />
                </div>
                <div>
                  <p className="terminal-title">Terminal 2</p>
                  <p className="terminal-description">
                    Optional metadata should be two lines.
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="add-terminal-button"
                  aria-label="+ Add Terminal"
                  onClick={this.toggleModal}
                >
                  + Add Terminal
                </button>
              </div>
            </div>
            <div className="services">
              <h2>Services</h2>
              <div className="service">
                <h3>Lost & found</h3>
                <hr />
                <div className="services-container">
                  <div>
                    <p>Service Name</p>
                    <input type="text" placeholder="Lost & found" />
                  </div>
                  <div>
                    <p>Category</p>
                    <select>
                      <option>Option1</option>
                    </select>
                  </div>
                  <div>
                    <p>Sub Category</p>
                    <select>
                      <option>Option1</option>
                    </select>
                  </div>
                  <button type="button" className="cancel-button">
                    <PiUploadBold />
                    upload image
                  </button>
                  <p>
                    <PiToggleLeftFill />
                    Show image
                  </p>
                  <p>Description</p>
                  <input type="text" placeholder="type here" />
                  <div>
                    <button aria-label="contact" type="button">
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="service">Lounge</div>
              <div className="service">Money Exchange</div>
            </div>
          </div>
        </div>
        <NewTerminal show={showModal} handleClose={this.handleClose}>
          {/* Content for the NewTerminal modal can be added here */}
        </NewTerminal>
      </div>
    );
  }
}

export default Desktop2;
