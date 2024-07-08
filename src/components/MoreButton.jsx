import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11px;
  right: 10px;
  align-items: center;
  justify-content: center;
  width: var(--nav-toggle-button-click-radius);
  height: var(--nav-toggle-button-click-radius);
  cursor: pointer;
  z-index: 4;
  color: ${(props) => (props.$fill)};
  transform-origin: center;
  transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-delay: 1s;

  #top-stick {    
    transform-origin: 3px 8px;
    transition: transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    transform: ${(props) => (props.expand ? 'rotate(45deg)' : 'none')};
  }
  
  #bottom-stick {
    transform-origin: 7px 11px;
    transition: transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
    transform: ${(props) => (props.expand ? 'rotate(-45deg)' : 'none')};
  }
`;

function MoreButton({ color='white', toggleFunction }) {
  const [expand, setExpand] = useState(false);

  return (
    <StyledButton 
      className='more-button'
      onClick={(prev) => {toggleFunction(!prev), setExpand(!expand)}}
      $fill={color}
      expand={expand}
    >
      <svg 
        width='25' 
        height='25'
        viewBox='0 0 20 20'
      >
        <polyline id="bottom-stick" 
          fill="none" stroke="currentColor" 
          strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
          points="2 12, 16 12" 
          className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
        >
        <animate id="globalnav-anim-menutrigger-bread-bottom-open" 
          attributeName="points" 
          keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" 
          fill="freeze" 
          calcMode="spline" 
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
          values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
        ></animate>
        <animate id="globalnav-anim-menutrigger-bread-bottom-close" 
          attributeName="points"
          keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" 
          fill="freeze" 
          calcMode="spline" 
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
          values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
        ></animate></polyline>
        <polyline id="top-stick" 
          fill="red !important" stroke="currentColor" strokeWidth="1.2" 
          strokeLinecap="round" strokeLinejoin="round"
          points="2 5, 16 5" 
          className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
        >
          <animate id="globalnav-anim-menutrigger-bread-top-open" 
            attributeName="points" 
            keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" 
            fill="freeze"
            calcMode="spline" 
            keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
            values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
          ></animate>
          <animate id="globalnav-anim-menutrigger-bread-top-close" 
            attributeName="points" 
            keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" 
            fill="freeze" 
            calcMode="spline" 
            keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
            values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
          ></animate>
        </polyline>
      </svg>
    </StyledButton>
  )
}

export default MoreButton;