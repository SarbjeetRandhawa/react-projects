import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

function RenamePdfPopup({ trigger, setPopup, fileDetails, updateFileName }) {
  const [newFileName, setNewFileName] = useState(fileDetails.name);

  return trigger ? (
    <Main className="popup">
      <div className="inline">
        <div className="head">
          <h1>Rename PDF</h1>
          <a onClick={() => setPopup(false)}><RxCross2 /></a>
        </div>

        <form>
          <div className="content">
            <h4>PDF name</h4>
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
          </div>
          <div className="btns">
            <button type="button" onClick={() => setPopup(false)}>
              Cancel
            </button>
            <button
              id="btn2"
              type="button"
              onClick={() => {
                updateFileName(fileDetails.index, newFileName);
                setPopup(false); // Close the popup after renaming
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Main>
  ) : null;
}

export default RenamePdfPopup;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); // More opacity for better popup visibility
  .inline {
    width: 400px;
    position: relative;
    border: none;
    border-radius: 15px;
    background-color: #ffffff;
    padding: 30px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0;
        font-size: 24px; // Slightly smaller for consistency
      }
      a {
        cursor: pointer;
        font-size: 24px;
      }
    }

    .content {
      margin-bottom: 20px;
      h4 {
        font-size: 19px;
        margin-bottom: 10px;
      }
      input {
        height: 40px;
        width: 100%;
        border: 0.4px solid grey;
        border-radius: 10px;
        font-size: 18px;
        padding-left: 10px;
      }
    }

    .btns {
      display: flex;
      justify-content: flex-end;
      button {
        margin-left: 10px;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        border: 0.1px solid grey;
        width: 100px;
        font-size: 15px;
        letter-spacing: 0.5px;
      }
      #btn2 {
        background-color: #01869d;
        color: white;
        width: 150px;
      }
    }
  }
`;
