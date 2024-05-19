import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";



function LinkPopup(props) {
  const [linkurl, setlinkurl] = useState();
  const [linkurlname, setlinkurlname] = useState();

  return props.trigger ? (
    <Main className="popup">
      <div className="inline">
        <div className="head">
          <h1>Add a new link</h1>
          <a onClick={() => props.setpopup(false)}><RxCross2/></a>
        </div>
        <form action="">
          <div className="content">
            <h4>URL</h4>
            <input type="text" value={linkurl} onChange={e => setlinkurl(e.target.value)} />
          </div>
          <div className="content">
            <h4>Display Name</h4>
            <input type="text" value={linkurlname} onChange={e => setlinkurlname(e.target.value)} />
          </div>
          <div className="btns">
            <button type="button" onClick={() => props.setpopup(false)}>
              Cancel
            </button>
            <button id="btn2" type="button" onClick={()=>{
              props.addurlList(linkurl,linkurlname);
              setlinkurl("");
              setlinkurlname("");
              props.setpopup(false)
            }}>
              Create
            </button>
          </div>
        </form>
      </div>
    </Main>
  ) : (
    ""
  );
}
export default LinkPopup;

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
      h1 {
        margin-left: -40px;
      }
      a {
        margin-left: 200px;
        cursor: pointer;
      }
      border: none;
    }

    .content {
      h4 {
        font-size: 19px;
        margin-bottom: 10px;
      }
      input {
        height: 40px;
        width: 100%;
        font-size: 18px;
        border: 0.4px solid grey;
        border-radius: 10px;
        padding-left: 10px;
      }
      margin-bottom: 25px;
    }

    .btns {
      /* background-color: #b8b8b8; */
      float: right;
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
