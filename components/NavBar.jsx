"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";

const Nav = styled.nav`
  background-color: white;
  border-color: #e5e7eb;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  space-x: 0.75rem;
  text-decoration: none;
`;

const NavLogo = styled.span`
  font-size: 2rem;
  font-weight: 600;
  white-space: nowrap;
`;

const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.875rem;
  color: #6b7280;
  background-color: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #e5e7eb;
  }
`;

const NavMenu = styled.div`
  display: none;
  width: 100%;
  @media (min-width: 768px) {
    display: block;
    width: auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    margin-top: 0;
    border: none;
    background-color: white;
  }
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const NavLinkItem = styled.a`
  display: block;
  padding: 0.5rem 0.75rem;
  color: #1f2937;
  text-decoration: none;
  border-radius: 0.375rem;
  &:hover {
    background-color: #f3f4f6;
  }
  &.active {
    color: #1d4ed8;
    background-color: #3b82f6;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #1f2937;
  background-color: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
  @media (min-width: 768px) {
    width: auto;
    padding: 0;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-weight: 400;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 11rem;
  margin-top: 0.5rem;
`;

const DropdownList = styled.ul`
  padding: 0.5rem 0;
  color: #374151;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: #f3f4f6;
  }
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLink href="#">
          <Image src="/logo.png" width={80} height={80} alt="HomelyFind logo" />
          <NavLogo>HomelyFind</NavLogo>
        </NavLink>
        <NavButton
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </NavButton>
        <NavMenu id="navbar-dropdown">
          <NavList>
            <NavItem>
              <NavLinkItem href="#" className="active">
                Home
              </NavLinkItem>
            </NavItem>
            <NavItem>
              <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                Listing
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </DropdownButton>
              <DropdownMenu isOpen={isOpen}>
                <DropdownList>
                  <li>
                    <DropdownItem href="#">Buy</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Rent</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Sell</DropdownItem>
                  </li>
                </DropdownList>
              </DropdownMenu>
            </NavItem>
            <NavItem>
              <NavLinkItem href="#">Services</NavLinkItem>
            </NavItem>
            <NavItem>
              <NavLinkItem href="#">Pricing</NavLinkItem>
            </NavItem>
            <NavItem>
              <NavLinkItem href="#">Contact</NavLinkItem>
            </NavItem>
          </NavList>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;