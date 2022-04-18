import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {

  const [openBurger, setOpenBurger] = useState(false);

  var loggedinuser = JSON.parse(sessionStorage.getItem('currentUser')); 
  let notAdmin;
  console.log(loggedinuser);

  function clearSess() {
    localStorage.clear();
    sessionStorage.clear();
    window.alert('You have been successfully logged out.');
    window.location.href = "/";
  }

  const hideAdmin = (
    <>
    </>
  );

  if (loggedinuser != "admin@admin.com"){
    notAdmin = true;
    console.log(notAdmin);
  }

  
  return (
    <>
      <div className="headerBar">
        <div className="siteName">
          <Link to={"/"}><h1><FontAwesomeIcon icon={faBook}/> Revature's Digest</h1></Link>
        </div>

        <div className="navBar">
          <ul className="navLinks">
          {loggedinuser == "admin@admin.com" ? 
                    <>
                    <li>
                    <Link to={"/admin"}>Admin Controls</Link>
                    </li>
                    </>
          : hideAdmin}
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            {notAdmin ? 
                    <li>
                    <Link to={"/sell"}>Sell</Link>
                    </li>
            : hideAdmin}
            {!localStorage.getItem('loginValidate') &&
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            }
            {localStorage.getItem('loginValidate') && notAdmin &&
                    <li>
                    <Link to={"/profile"} className='profileLink'>Profile</Link>
                    </li>
            }
            {localStorage.getItem('loginValidate') &&
            <li>
              <Link to={"/"} onClick={clearSess} className='logoutLink'>Logout</Link>
            </li>
            }
          </ul>
          {localStorage.getItem('loginValidate') && notAdmin &&
            <Link to={"/cart"}>
              <button id="cartIcon">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
          } 
            &nbsp;&nbsp;&nbsp;&nbsp;
              <button id="burgerIcon" onClick={() => setOpenBurger(!openBurger)}>
                <FontAwesomeIcon icon={faBars} />
              </button>

              
        </div>
        
      </div>

      {openBurger && <ul className="navLinksBurger">
              <li>
                <Link to={"/"} onClick={() => setOpenBurger(!openBurger)}>Home</Link>
              </li>
              {!localStorage.getItem('loginValidate') &&
              <li>
                <Link to={"/login"} onClick={() => setOpenBurger(!openBurger)}>Login</Link>
              </li>
              }
              {localStorage.getItem('loginValidate') &&  notAdmin && <li>
                <Link to={"/profile"} onClick={() => setOpenBurger(!openBurger)}  className='profileLink'>Profile</Link>
              </li>
              }
              {localStorage.getItem('loginValidate') && <li>
                <Link to={"/shop"} onClick={() => setOpenBurger(!openBurger)}>Shop</Link>
              </li>
              }
              <li>
                <Link to={"/sell"} onClick={() => setOpenBurger(!openBurger)}>Sell</Link>
              </li>
              {localStorage.getItem('loginValidate') &&
              <li>
                <Link to={"/logout"}  onClick={clearSess} className='logoutLink'>Logout</Link>
              </li>
              }
      </ul>
    }

    </>
  );
}

export default Header;