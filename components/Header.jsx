import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText ,UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem,Button } from "reactstrap";
import Logo from '../public/logo-branco.png'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Header () {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return(
<div>
      <Navbar className="" expand="sm">
      <NavbarBrand href="/">
      <Image
        alt="logo"
        src={Logo}
        width={170}
        height={65}
        placeholder="blur"
      />
    </NavbarBrand>
        <button className="buttonHeader">Let&apos;s Connect</button>
      </Navbar>
    </div>

        
    )
}

