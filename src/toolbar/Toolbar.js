import React from "react";
import './Toolbar.css';
import {Link} from 'react-router-dom';
const toolbar = props => (
<header className="toolbar">
  <nav className="toolbar_navigation">
      <div></div>
      <div className="toolbar_logo">        
        <Link to ='/'>Vino's</Link>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation_items">
          <ul>
            <li>                      
              <Link to ='/Custlist'>Customers</Link>
            </li>
            <li>              
              <Link to ='/ViewList'>Dog List</Link>
            </li>
          </ul>
      </div>
  </nav>
</header>
);
export default toolbar;