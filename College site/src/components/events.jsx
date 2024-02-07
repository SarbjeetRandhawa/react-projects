import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const events = () => {
  return (
    <Events>
      <h2>Events</h2>
      <div className="all-events">
        <div className="events">
          <div className="events-img">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="events-detials">
            <h4>Friends Meeting</h4>
            <p>
              <FontAwesomeIcon icon={faStopwatch} className="icon" />4 PM Today
            </p>
          </div>
        </div>
      </div>
      <a href="">
        Show More
        <FontAwesomeIcon icon={faArrowRight} className="arrowicon" />
      </a>
    </Events>
  );
};

export default events;

const Events = styled.div`
  background-color: var(--foreground);
  font-size: 15px;
  padding: 5px 15px;
  color: white;
  /* border: 2px solid white; */
  height: 260px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  .all-events {
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
  .events {
    border-bottom: 2px solid var(--border);
    padding: 5px;
    display: flex;

    .events-img {
      width: 70px;
      img {
        width: 100%;
        border-radius: 15px;
        object-fit: cover;
      }
    }
    .events-detials {
      /* border: 2px solid white; */

      width: 100%;
      padding: 0 10px;
      p {
        color: #767676;
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
