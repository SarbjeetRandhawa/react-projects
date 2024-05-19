import { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { LiaUploadSolid } from "react-icons/lia";

const DropdownButton = ({ setmodulepopup, setlinkpopup, handleFileChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Option ${option} clicked`);
    setIsOpen(false); // Close the dropdown after an option is clicked
  };

  return (
    <Main className="dropdown-container">
      <button onClick={toggleDropdown}>
        <FaPlus />
        Add
        <TiArrowSortedUp />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a onClick={() => setmodulepopup(true)}>
            <div
              className="dropdown-item"
              onClick={() => handleOptionClick("Option 1")}
            >
              <IoFileTrayStackedOutline />
              Course Module
            </div>
          </a>

          <a onClick={() => setlinkpopup(true)}>
            <div
              className="dropdown-item"
              onClick={() => handleOptionClick("Option 2")}
            >
              <IoIosLink />
              Add a link
            </div>
          </a>

          <label>
            <div
              className="dropdown-item"
            >
              <LiaUploadSolid />
              <input type="file" id="upload-file" onChange={(e)=>{handleFileChange(e); handleOptionClick("option3")}  } multiple />
              Uplode
            </div>
          </label>

         
        </div>
      )}
    </Main>
  );
};

export default DropdownButton;

const Main = styled.div`
  position: relative;
  display: inline-block;

  button {
    padding: 10px;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    color: white;
    width: 100px;
    border: none;
    background-color: #bf0000;
  }

  .dropdown-menu {
    position: absolute;
    background-color: #fff;
    top: 100%;
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
    input[type="file"] {
      display: none;
    }
    .dropdown-item:hover {
      background-color: #dedede;
    }
  }
`;
