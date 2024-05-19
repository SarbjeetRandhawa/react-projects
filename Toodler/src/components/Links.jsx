import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import EditLinkPopup from "./Editlinkpopup";

function Links({ url, urlname, index, updateLinkList, deleteLink }) {
  const [isbtnopen, setisbtnopen] = useState(false);
  const [editLinkPopup, setEditLinkPopup] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
    window.open(formattedUrl, '_blank');
  };

  const togglebtn = () => {
    setisbtnopen(!isbtnopen);
  };

  const handleEditClick = () => {
    setEditLinkPopup(true);
    setisbtnopen(false);
  };

  const handleDeleteClick = () => {
    deleteLink(index);
    setisbtnopen(false);
  };

  const updateLink = (newUrl, newUrlname) => {
    updateLinkList(index, newUrl, newUrlname);
  };

  return (
    <Div2>
      <div className="logo">
        <img src="Union.png" alt="" id='icon'/>
      </div>
      <div className="content">
        <a href={url} onClick={handleClick} className='sitename'>
          <h2>{urlname}</h2>
        </a>
        <p>LINK</p>
      </div>
      <a onClick={togglebtn} className="options">
        <HiDotsVertical />
        {isbtnopen && (
          <div className="dropdown-menu">
            <a onClick={handleEditClick}>
              <div className="dropdown-item" style={{ color: "grey" }}>
                <FiEdit3 /> Edit 
              </div>
            </a>
            <a onClick={handleDeleteClick}>
              <div className="dropdown-item" style={{ color: "red" }}>
                <RiDeleteBin6Line />
                Delete
              </div>
            </a>
          </div>
        )}
      </a>
      <EditLinkPopup
        trigger={editLinkPopup}
        setpopup={setEditLinkPopup}
        linkDetails={{ url, urlname }}
        updateLink={updateLink}
      />
    </Div2>
  );
}

export default Links;

const Div2 = styled.div`
  display: flex;
  padding: 10px 20px;
  gap: 20px;
  align-items: center;
  .logo {
    padding: 10px;
    background-color: #e9fffc;
    width: 15px;
    height: 15px;
    border-radius: 4px;
    #icon {
      width: 100%;
    }
  }
  .content {
    margin-top: -10px;
  }
  .sitename {
    line-height: 30px;
    text-decoration: none;
    color: black;
    font-size: 15px;
    cursor: pointer;
    h2 {
      margin: 0px;
      cursor: pointer;
    }
  }
  p {
    margin: 0px;
    font-size: 10px;
  }
  .options {
    margin-left: auto;
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
