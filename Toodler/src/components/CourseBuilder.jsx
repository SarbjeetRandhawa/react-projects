import React, { useState } from "react";
import styled from "styled-components";
import DropdownButton from "./DropdownButton";
import Popupmodule from "./Popupmodule";
import LinkPopup from "./Linkpopup";
import Links from "./Links";
import PdfFiles from "./PdfFiles";
import Module from "./Module";
import EditPopup from "./Editmodulepopup";

function CourseBuilder() {
  const [modulepopup, setmodulepopup] = useState(false);
  const [linkpopup, setlinkpopup] = useState(false);
  const [List, setList] = useState([]);
  const [linkList, setlinkList] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [editPopup, setEditPopup] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const pdfs = files.filter((file) => file.type === "application/pdf");

    if (pdfs.length !== files.length) {
      alert("Some files are not PDF and were not added");
    }

    setPdfFiles((prevFiles) => [
      ...prevFiles,
      ...pdfs.map((file) => ({ file, name: file.name })),
    ]);
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file.file);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (index) => {
    setPdfFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const updateFileName = (index, newName) => {
    setPdfFiles((prevFiles) =>
      prevFiles.map((file, i) => (i === index ? { ...file, name: newName } : file))
    );
  };

  const addList = (moduleName) => {
    if (moduleName !== "") {
      setList([...List, moduleName]);
    }
  };

  const deleteList = (key) => {
    let newList = [...List];
    newList.splice(key, 1);
    setList(newList);
  };

  const addurlList = (linkurl, linkurlname) => {
    if (linkurl !== "" && linkurlname !== "") {
      setlinkList([...linkList, { url: linkurl, urlname: linkurlname }]);
    }
  };

  const deleteLink = (index) => {
    setlinkList((prevlinkList) => prevlinkList.filter((_, i) => i !== index));
  };

  const updateModuleName = (newName) => {
    setList((prevList) =>
      prevList.map((item, index) => (index === currentEditIndex ? newName : item))
    );
  };

  const updateLinkList = (index, newUrl, newUrlname) => {
    setlinkList((prevlinkList) =>
      prevlinkList.map((link, i) => (i === index ? { url: newUrl, urlname: newUrlname } : link))
    );
  };

  return (
    <Main>
      <div className="head">
        <h1>Course builder</h1>
        <DropdownButton
          setmodulepopup={setmodulepopup}
          setlinkpopup={setlinkpopup}
          handleFileChange={handleFileChange}
        />
      </div>
      <div className="container">
        {List.length === 0 && linkList.length === 0 && pdfFiles.length === 0 ? (
          <DefaultContent className="blankdiv">
            <img src="logo.png" alt="" />
            <h3>Nothing added here yet</h3>
            <p>Click on the [+] Add button to add items to this course</p>
          </DefaultContent>
        ) : (
          <>
            {List.length > 0 && (
              <div className="insidecont">
                {List.map((listitem, i) => (
                  <Module
                    key={i}
                    index={i}
                    items={listitem}
                    deleteList={deleteList}
                    setEditPopup={setEditPopup}
                    setCurrentEditIndex={setCurrentEditIndex}
                  />
                ))}
              </div>
            )}
            {linkList.length > 0 && (
              <div className="insidecont">
                {linkList.map((linkitem, i) => (
                  <Links
                    key={i}
                    index={i}
                    url={linkitem.url}
                    urlname={linkitem.urlname}
                    updateLinkList={updateLinkList}
                    deleteLink={deleteLink}
                  />
                ))}
              </div>
            )}
            {pdfFiles.length > 0 && (
              <div className="insidecont">
                {pdfFiles.map((file, index) => (
                  <PdfFiles
                    key={index}
                    index={index}
                    file={file}
                    download={handleDownload}
                    deletefile={handleDelete}
                    updateFileName={updateFileName}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Popupmodule
        trigger={modulepopup}
        setpopup={setmodulepopup}
        addList={addList}
      />
      <LinkPopup
        trigger={linkpopup}
        setpopup={setlinkpopup}
        addurlList={addurlList}
      />
      <EditPopup
        trigger={editPopup}
        setpopup={setEditPopup}
        moduleName={currentEditIndex !== null ? List[currentEditIndex] : ""}
        updateModuleName={updateModuleName}
      />
    </Main>
  );
}

export default CourseBuilder;

const Main = styled.div`
  background-color: #ededed;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  padding: 20px;
  flex-direction: column;
  .head {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    height: 500px;
    overflow: scroll;
    padding: 30px;
    overflow-x: hidden;
    .blankdiv {
      background-color: #ededed;
      display: flex;
      height: 400px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        color: black;
      }
      p {
      }
    }
    .insidecont {
      background-color: white;
      border: .5px solid #dedede;
      margin-bottom: 10px;
    }
  }
  .container::-webkit-scrollbar {
    display: none;
  }
`;

const DefaultContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: grey;
  font-size: 18px;
  p {
    margin: 0;
  }
`;
