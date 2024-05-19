import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuArrowDownToLine } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import RenamePdfPopup from './RenamePdfPopup';

function PdfFiles({ file, download, deletefile, updateFileName, index }) {
  const [isbtnopen, setisbtnopen] = useState(false);
  const [renamePopup, setRenamePopup] = useState(false);

  const togglebtn = () => {
    setisbtnopen(!isbtnopen);
  };

  const handleDownloadClick = () => {
    download(file);
  };

  const handleDeleteClick = () => {
    deletefile(index);
    setisbtnopen(false);
  };

  const handleRenameClick = () => {
    setRenamePopup(true);
    setisbtnopen(false);
  };

  return (
    <Div>
      <div className="logo">
        <img src="pdf.png" alt="" id='icon'/>
      </div>
      <div className="content">
        <h2>{file.name}</h2>
        <p>PDF</p>
      </div>
      <a onClick={togglebtn} className="options">
        <HiDotsVertical />
        {isbtnopen && (
          <div className="dropdown-menu">
            <a onClick={handleRenameClick}>
              <div className="dropdown-item" style={{ color: "grey" }}>
                <FiEdit3 /> Rename
              </div>
            </a>
            <a onClick={handleDownloadClick}>
              <div className="dropdown-item" style={{ color: "grey" }}>
                <LuArrowDownToLine /> Download 
              </div>
            </a>
            <div id='bordertop'>
            <a onClick={handleDeleteClick}>
              <div className="dropdown-item" style={{ color: "red" }}>
                <RiDeleteBin6Line /> Delete
              </div>
            </a>
            </div>
          </div>
        )}
      </a>
      <RenamePdfPopup
        trigger={renamePopup}
        setPopup={setRenamePopup}
        fileDetails={{ name: file.name, index }}
        updateFileName={updateFileName}
      />
    </Div>
  );
}

export default PdfFiles;

const Div = styled.div`
  display: flex;
  padding: 10px 20px;
  gap: 20px;
  align-items: center;
  
  .logo {
    padding: 10px;
    background-color: #fff4ed;
    width: 15px;
    height: 15px;
    border-radius: 4px;
    #icon {
      width: 100%;
    }
  }
  
  .content {
    flex-grow: 1;
    h2 {
      font-size: 18px;
    }
    p {
      margin: 0px;
      color: grey;
      font-size: 14px;
    }
  }
  h2 {
    margin: 0;
    font-size: 15px;
  }
  .options {
    position: relative;
    cursor: pointer;
    .dropdown-menu {
      position: absolute;
      background-color: #fff;
      top: 100%;
      padding: 0;
      border-radius: 10px;
      width: 200px;
      right: 0;
      background-color: "#f1f1f1";
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      span {
        border: 5px solid gray;
      }
      .dropdown-item {
        padding: 8px 16px;
        cursor: pointer;
        display: flex;
        gap: 10px;
      }
      #bordertop {
        border-top: .5px solid grey;
      }
      a {
        width: 100%;
        text-decoration: none;
        color: black;
      }
      .dropdown-item:hover {
        background-color: #dedede;
        border-radius: 10px;
      }
    }
  }
`;
