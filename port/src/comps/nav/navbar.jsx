import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import Burger from './Burger';

const Nav = styled.nav`
    width:100%;
    height:55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between; 
    z-index: 1;

    .logo {
        text-decoration: none;
        font-family: cursive;
        height: 100px;
        line-height: 50px;
        text-align: center;

        a:link {
            color: #FC6A03;
        }
        
        a:visited {
            color: #FC6A03;
        }
        
        a:hover {
            color: #FC6A03;
        }
        
        a:active {
            color: #FC6A03;
        }
        
        a:link, a:visited {
            text-decoration: none;
        }
    }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <a href="/"><h1>AS</h1></a>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar