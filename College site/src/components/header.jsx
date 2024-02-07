import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faGear } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    

    return (
        <Navbar>
            <img src="" alt="img" />
            <div className="options">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Message</a>
                    </li>
                </ul>
                
                <form>
                <input type="text" placeholder="Search"  />
                </form>

                
                <a href="" className="nav-opt">
                <FontAwesomeIcon icon={faBell} />
                </a>
                <a href="" className="nav-opt">
                    <FontAwesomeIcon icon={faGear} />
                </a>
            </div>
            <div className="profile">
                <a href="">
                    <img src="" alt="i" />
                </a>
                <p>Sarbjeet</p>
            </div>
        </Navbar>
    );
};

export default Header;

const Navbar = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: var(--foreground);
  height: 60px;
  color: white;
  /* border-bottom: 2px solid var(--border); */

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .options {
    display: flex;
    gap: 25px;

    ul {
      display: flex;
      list-style: none;
      gap: 20px;
      a {
        color: white;
        text-decoration: none;
      }
    }

    input {
      height: 30px;
      border-radius: 20px;
      padding: 15px;
      margin-top: -3px;
      border: none;
      background-color: #504f4f;
    }
    textarea:focus,
    input:focus {
      color: #ffffff;
      outline: none;
    }
    input::placeholder{
        color: white;
        /* text-align: center; */
    }
    

    .nav-opt {
      color: white;
      text-decoration: none;
    }
  }

  .profile {
    display: flex;
    gap: 5px;
  }
`;
