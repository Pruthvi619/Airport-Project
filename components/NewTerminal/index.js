import { PiUploadBold } from "react-icons/pi";
import "./index.css";

const NewTerminal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="modal-actions">
            <div className="title-heading">
              <h1>Terminal Title</h1>
              <hr />
              <p>Description</p>
            </div>
          </div>
          <div>
            <button type="button" className="cancel-button">
              <PiUploadBold />
              upload image
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="cancel-button"
            >
              Cancel
            </button>
            <button type="button" className="continue-button">
              Continue
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewTerminal;
