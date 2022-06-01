import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopOnlyActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopOnlyActionGroup>
        <Logo />
        <DesktopSubscribeContainer>
          <Button>
            Subscribe
          </Button>
          <SubscriberLink>
            Already a subscriber?
          </SubscriberLink>
        </DesktopSubscribeContainer>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.desktopAndUp} {
    /* I am a note */
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;
const DesktopOnlyActionGroup = styled.div`
  display: none;
  
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    gap: 24px;
  
    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */
    svg {
      display: block;
    }    
  }
`;

const DesktopSubscribeContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media ${QUERIES.desktopAndUp} {
    display: flex;

  }
`;

const SubscriberLink = styled.a`
  color: var(--color-gray-900);
  margin-top: 8px; 
  font-family: var(--font-family-serif);
  font-size: 14px;
  font-style: italic;
  text-transform: none;
  text-decoration: underline;
`;

// noinspection CssUnknownProperty
const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 72px;
  }
  
  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

export default Header;
