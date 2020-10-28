import logo from './logo.png';
import {Dropdown} from 'react-bulma-components';
import {Navbar} from 'react-bulma-components';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import './bulma.css';


function App() {
  return (
    <div className="App">
      <Navbar color='light'>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img src={logo} alt="All4Cats" width="30" height="30" />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link>
                First
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="#">
                  Subitem 1
                </Navbar.Item>
                <Navbar.Item href="#">
                  Subitem 2
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="#">
              Second
            </Navbar.Item>
          </Navbar.Container>
          {/* <Navbar.Container position="end">
            <Navbar.Item href="#">
                  At the end
            </Navbar.Item>
          </Navbar.Container> */}
        </Navbar.Menu>
      </Navbar>
      <header className="App-header">
        <img src={logo} alt='Logo' height='250'></img>
        <p>
          Welcome to CS 411 Final Project - All4Cats.
        </p>
        <a
          className="App-link"
          href="https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      </header>
      <Dropdown>
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other" >
          Dropdown item
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;
