import React from 'react';
import styled from 'styled-components';

import Home from '../home/Home';
import Timeline from '../timeline/timeline';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 10;

    a:link {
        color: black;
    }
    
    a:visited {
        color: black;
    }
    
    a:hover {
        color: black;
        li {
            font-weight: bolder;
            text-decoration: underline 0.15em #FC6A03;;
            transition: text-decoration-color 350ms;
            font-size: 17px;
        }
    }
    
    a:active {
        color: black;
    }
    
    a:link, a:visited {
        text-decoration: none;
    }

    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh; 
        width: 250px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        
        li {
            color: white
        }
    }
`;


const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <a href="/"><li>Home</li></a>
            <a href="/timeline"><li>Timeline</li></a>
            <a href="/connect"><li>Socials</li></a>
        </Ul> 
    )
}

export default RightNav