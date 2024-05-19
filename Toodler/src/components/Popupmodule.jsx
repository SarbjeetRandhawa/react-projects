import React, { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";

function Popup(props) {
  const [modulename, setmodulename] = useState("");

  return props.trigger ? (
    <Main className="popup">
      <div className="inline">
        <div className="head">
          <h1>Create new Module</h1>
          <a onClick={() => props.setpopup(false)}><RxCross2/></a>
        </div>

        <form>
          <div className="content">
            <h4>Module name</h4>
            <input
              type="text"
              value={modulename}
              onChange={e => setmodulename(e.target.value)}
            />
          </div>
          <div className="btns">
            <button type="button" onClick={() => props.setpopup(false)}>
              Cancel
            </button>
            <button
              id="btn2"
              type="button"
              onClick={() => {
                props.addList(modulename);
                setmodulename("");  // Clear the input field after adding
                props.setpopup(false);  // Close the popup after adding
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </Main>
  ) : null;
}

export default Popup;

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b8b8b8;
  .inline {
    width: 600px;
    position: relative;
    border: none;
    border-radius: 15px;
    background-color: #ffffff;
    padding: 33px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0;
      }
      a {
        cursor: pointer;
      }
    }

    .content {
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
      margin-bottom: 25px;
    }

    .btns {
      display: flex;
      justify-content: flex-end;
      button {
        margin-left: 10px;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        border: 0.1px solid grey;
        width: 80px;
        font-size: 15px;
        letter-spacing: 0.5px;
      }
      #btn2 {
        background-color: #01869d;
        color: white;
      }
    }
  }
`;
