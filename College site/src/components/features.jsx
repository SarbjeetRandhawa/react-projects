import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faBoxOpen,
  faTerminal,
  faTrophy,
  faUserTie,
  faCalendarDays,
  faBook,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";

const features = () => {
  return (
    <Div>
      <div className="options">
        <a href="">
          <FontAwesomeIcon icon={faBullhorn} />
          <p>Announcements </p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faBoxOpen} />
          <p>Lost/Found </p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faTerminal} />
          <p> Hackathons </p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faTrophy} />
          <p>Competitiions</p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faUserTie} />
          <p>Internships/Jobs</p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faCalendarDays} />
          <p> Events</p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faBook} />
          <p> Course Content</p>
        </a>

        <a href="">
          <FontAwesomeIcon icon={faUsersBetweenLines} />
          <p>Class Meet</p>
        </a>
      </div>
    </Div>
  );
};

export default features;

const Div = styled.div`
  background-color: var(--background);
  border-right: 2px solid var(--border);
  width: 30%;
  height: calc(100vh - 60px);
  position: fixed;
  padding-left: 5%;
  padding-top: 20px;
  padding-right: 20px;
  

  @media (0 < width < 1230px) {
    //     /* background-color: #fff; */
    width: 70px;
    padding: 0;
    .options {
      background-color: var(--background) !important;

      padding: 30px 2px !important;

      a {
        font-size: 20px;
        p {
          display: none;
        }
      }
    }
  }

  .options {
    height: 70vh;
    background-color: var(--background);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* border: 2px solid white;// */
    color: white;
    padding: 10px 22px;
    cursor: pointer;

    a {
      display: flex;
      gap: 15px;
      padding: 10px 22px;
      text-decoration: none;
      cursor: pointer;
      color: white;
      font-size: 17px;
      p {
        cursor: pointer;
      }
    }
  }
`;
