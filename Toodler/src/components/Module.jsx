import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Module({ items, index, deleteList, setEditPopup, setCurrentEditIndex }) {
  const [isbtnopen, setisbtnopen] = useState(false);

  const togglebtn = () => {
    setisbtnopen(!isbtnopen);
  };
  

  const handleEditClick = () => {
    setCurrentEditIndex(index);  // Set the index of the module being edited
    setEditPopup(true);  // Open the edit popup
    setisbtnopen(false);  // Close the dropdown menu
  };

  return (
    <Div>
      <MdOutlineArrowDropDownCircle id="icon" />
      <div className="modulename">
        <h3>{items}</h3>

        <p>Add items to this module</p>
      </div>
      <a onClick={togglebtn} className="options">
        <HiDotsVertical />
        {isbtnopen && (
          <div className="dropdown-menu">
            <a onClick={handleEditClick}>
              <div className="dropdown-item" style={{ color: "grey" }}>
                <FiEdit3 /> Edit module name
              </div>
            </a>
            <a onClick={(e) => deleteList(index)}>
              <div className="dropdown-item" style={{ color: "red" }}>
                <RiDeleteBin6Line />
                delete
              </div>
            </a>
          </div>
        )}
      </a>
    </Div>
  );
}

export default Module;

const Div = styled.div`
  display: flex;
  align-items: center;
  /* height: 10px;  */
  padding: 0 20px;
  width: 100%;
  #icon {
    font-size: 30px;
    color: grey;
  }

  .modulename {
    display: flex;
    flex-direction: column;
    line-height: 3px;
    padding: 0 20px;
    gap: 12px;
    h3 {
      /* margin-top: -10px; */
    }
    p {
      margin-top: -10px;
      font-size: 14px;
      color: grey;
    }
  }
  .options {
    margin-left: auto;
    margin-right: 40px;
    position: relative;

    .dropdown-menu {
      position: absolute;
      background-color: #fff;
      top: 100%;
      padding: 0;
      width: 200px;
      right: 0;
      background-color: "#f1f1f1";
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      .dropdown-item {
        
        padding: 8px 16px;
        cursor: pointer;
        
        display: flex;
       gap: 10px;
      }
      a {
        width: 100%;
        text-decoration: none;
        color: black;
      }
      
      .dropdown-item:hover {
        background-color: #dedede;
      }
    }
  }
`;
