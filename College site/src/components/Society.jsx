import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Society = () => {
  return (
    <Societty>
      <h2>New Society/Club</h2>
      <div className="all-society">
        <div className="society">
          <div className="society-img">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="society-detials">
            <h4>Computer Society Of India</h4>
            <button>
              <a href="">Join Now</a>
            </button>
          </div>
        </div>
        <div className="society">
          <div className="society-img">
            <img
              src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"
              alt=""
            />
          </div>
          <div className="society-detials">
            <h4>Geeks For Geeks</h4>
            <button>
              <a href="">Join Now</a>
            </button>
          </div>
        </div>
      </div>
      <a href="">
        Show More
        <FontAwesomeIcon icon={faArrowRight} className="arrowicon" />
      </a>
    </Societty>
  );
};

export default Society;

const Societty = styled.div`
  /* border: 2px solid white; */
  background-color: var(--foreground);
  height: 200px;
  font-size: 13px;
  padding: 5px 15px;
  color: white;
  /* border: 2px solid white; */
  height: 220px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  .all-society {
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    /* display: none; */
    background-color: #424242;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ede6e6;
    border-radius: 15px;
  }
  .society {
    border-bottom: 2px solid var(--border);
    padding: 5px;
    display: flex;

    .society-img {
      /* border: 2px solid white; */
      width: 60px;
      img {
        width: 100%;
        border-radius: 15px;
        object-fit: cover;
      }
    }
    .society-detials {
      /* border: 2px solid white; */

      width: 100%;
      padding: 0 10px;
      button {
        border: none;
        padding: 1px 5px;
        border-radius: 15px;
        background-color: var(--border);
        a {
          font-weight: 500;
          font-size: 10px;
          color: #ffffff;
        }
      }
      .icon {
        padding-right: 10px;
      }
    }
  }
  a {
    text-decoration: none;
    color: white;
    position: relative;
    .arrowicon {
      padding-left: 5px;
    }
  }
  a:hover {
    color: #767676;
  }
`;
