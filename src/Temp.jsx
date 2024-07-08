import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const StyledBody = styled.div`
  position: relative;
  top: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const StyledHeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 60;
  height: 100%;
  width: 100%;
`;

const StyledMainWrapper = styled.main`
  width: 100%;
  z-index: 20;
  background-color: inherit;

  section {
    background-color: inherit;
    color: black;
  }
`;

const StyledIntroSection = styled.section`
  display: grid; /* key!! */
  grid-template-rows: 1fr; /* key!! */
  text-align: center;
  align-content: center;
  width: 85%;
  height: 100%;
  margin: auto;
  background-color: inherit;
  
  h1, h2 {
    text-align: center;
    color: white;
    width: fit-content;
    margin: auto;
  }
`;

const StyledTagline = styled.h1`
  font-size: 56px;
  font-weight: 600;
  line-height: 60px;
  opacity: ${(props) => (props.$opacity)};
`;

const StyledPromise = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  opacity: ${(props) => (props.$opacity)};
`;

function Temp({}) {
  const [opacityTagline, setOpacityTagline] = useState(1);
  const [opacityPromise, setOpacityPromise] = useState(0);
  const intro = useRef(null);
  let prevScrollPos = window.scrollY;

  useEffect(() => {
    const updateOpacity = () => {
      let newScrollPos = window.scrollY;
      if (Math.abs(prevScrollPos - newScrollPos) > 10) {
        let distanceToScroll = window.innerHeight / 2.5;
        let relativePos = (distanceToScroll - newScrollPos) / distanceToScroll;
        setOpacityTagline(relativePos);

        if (newScrollPos >= (window.innerHeight / 2)) {
          let relativePos2 = Math.abs(((window.innerHeight / 2) - newScrollPos) / (window.innerHeight / 3)); 
          setOpacityPromise(1 - relativePos2)
        } else {
          setOpacityPromise(1 - relativePos);
        }
        prevScrollPos = newScrollPos;
      }
    }

    window.addEventListener('scroll', updateOpacity);

    return () => {
      window.removeEventListener('scroll', updateOpacity);
    }
  })

  return (
    <StyledBody>
      <StyledHeaderWrapper>
        <Header>
          <Header.Title>Handbook</Header.Title>
          <Header.Nav>
            <Header.Nav.Item>Overview</Header.Nav.Item>
            <Header.Nav.Item>Getting Started</Header.Nav.Item>
          </Header.Nav>
        </Header>
      </StyledHeaderWrapper>
      <StyledMainWrapper>
        <StyledIntroSection>
          <StyledTagline ref={intro} className='intro-tagline' $opacity={opacityTagline}>
            Grad School. Take the First Step.
          </StyledTagline>
          <StyledPromise className='intro-promise' $opacity={opacityPromise}>
            This guide should make the process of applying to grad school more transparent 
            and give you the tools you need.
          </StyledPromise>
        </StyledIntroSection>
        <section>
          blah <br/> <br/>
          blach <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/>
          blah <br/> <br/>
          blach <br/> <br/> <br/>
        </section>
        </StyledMainWrapper>
    </StyledBody>
  )
}

export default Temp;