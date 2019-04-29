import '../../styles/components/shared/NavBar.css';

import React from 'react';

const componentName = 'navbar';

const NavBar = ({ currentUser }) => { 

  const shortifyUserName = user => {
    let shorted;

    for(let i = 0; i < user.length; i++) {
      if(user[i] === " ") {
        shorted = `${user[0]}${user[i] === " " && user[i+1]}`;
      }
    }

    return shorted;
  }

  const shortedName = shortifyUserName(currentUser);

  return (
    <div className={componentName}>
      <div className={`${componentName}__container`}>
        <div className={`${componentName}__logo-content`}>
          <h3 className={`${componentName}__logo`}>My<strong>Email</strong>.</h3>
        </div>

        <div className={`${componentName}__menu`}>
          <ul className={`${componentName}__menu-list`}>
            <li>Mails</li>
            <li>Favorites</li>
            <li>Spams</li>
          </ul>

          <div className={`${componentName}__menu-user-opt`} >
            <span className={`${componentName}__menu-user-opt-short`}>{shortedName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
