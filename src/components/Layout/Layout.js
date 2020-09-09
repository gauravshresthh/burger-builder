import React from 'react';

const Layout = (props) => {
  return (
    <>
      <div>Toolbar,SideBar,SideDrawer</div>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
