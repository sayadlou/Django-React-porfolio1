import React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";

const MyUserMenu = (props) => {
  return (
    <UserMenu {...props}>
      <MenuItemLink
        to="/password"
        primaryText="Password Change"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
};

export default MyUserMenu;