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
        <Link href="http://api.whatsapp.com/send?1=pt_BR&phone=5511954035132
">
        <button className="buttonHeader">Let&apos;s Connect</button>
        </Link>
      </Navbar>
    </div>

        
    )
}

