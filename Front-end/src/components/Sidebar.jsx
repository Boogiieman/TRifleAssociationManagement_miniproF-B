import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaRegRegistered,FaGem, FaHeart, FaStream } from 'react-icons/fa';
import { TbDots } from "react-icons/tb";
import {MdCardMembership,MdEventAvailable} from 'react-icons/md';
import {TbListDetails} from 'react-icons/tb';
import './SideNav.css'; // Create a CSS file for styling

function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  }

  return (
    <ProSidebar style={{zIndex: "101",marginTop:"75px",position:"fixed" }} collapsed={collapsed} >
      <div className="collapsible" onClick={toggleCollapse}>
        {/* Add a button to toggle the collapse feature */}
        <button>
        <TbDots style={{ fontSize: '2.0em' }} />
        </button>
      </div>
      <div className="sidebar-content">
        <Menu iconShape="square">
          <MenuItem icon={<MdCardMembership />}>Membership</MenuItem>
          <SubMenu title="Event" icon={<MdEventAvailable />}>
            <MenuItem icon={<FaRegRegistered />}>Register</MenuItem>
            <MenuItem icon={<TbListDetails />}>Details</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </ProSidebar>
  );
}

export default SideNav;




