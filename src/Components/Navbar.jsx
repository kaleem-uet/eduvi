import { Container, styled } from '@mui/material';
import React from 'react';

// Custom Components

import NavLink from './NavLink';
import Dropdown from './DropDown';

// Icons Import

import logo from '../Assets/Images/logo.svg';
import cart from '../Assets/Images/cart.svg';
import profile from '../Assets/Images/profile.svg';

// Wrapper Components
import { IconWrapper } from '../Common/Wrapper/IconWrapper';
import { Link } from 'react-router-dom';

const NavbarList = styled('ul')({
    display: 'flex',
    margin: '10px 15px',
});

const NavbarListItems = styled('li')({
    listStyle: 'none',
    padding: '0 .5rem',

    display: 'flex',
    alignItems: 'center',
});

const StyledNavbar = styled('div')(({ theme }) => ({
    padding: '.5rem 0',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

function Navbar() {
    return (
        <Container>
            <StyledNavbar>
                <Link to="/">
                    <img src={logo} width="80" alt="" />
                </Link>
                <NavbarList>
                    {['Home', 'About', 'Contect us'].map((el, i) => (
                        <NavbarListItems key={i}>
                            <Dropdown title={el}>
                                <NavLink>Hello world</NavLink>
                                <NavLink>Hello world</NavLink>
                                <NavLink>Hello world</NavLink>
                                <NavLink>Hello world</NavLink>
                            </Dropdown>
                        </NavbarListItems>
                    ))}
                    <NavbarListItems>
                        <NavLink href="/">Subjects</NavLink>
                    </NavbarListItems>
                </NavbarList>
                <NavbarList>
                    <NavbarListItems>
                        <NavLink>Cart(0)</NavLink>
                        <IconWrapper size="20" marginx="5">
                            <img src={cart} alt="" />
                        </IconWrapper>
                    </NavbarListItems>
                    <NavbarListItems>
                        <Dropdown title="Credentials" noIcon>
                            <NavLink href="/login">Login </NavLink>
                            <NavLink href="/register">Sign up</NavLink>
                        </Dropdown>
                        <IconWrapper size="20">
                            <img src={profile} alt="" />
                        </IconWrapper>
                    </NavbarListItems>
                </NavbarList>
            </StyledNavbar>
        </Container>
    );
}

export default Navbar;
