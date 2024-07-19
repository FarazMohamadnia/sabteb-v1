import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ArrowDown = styled(FaArrowDown)`
  animation: ${bounce} 2s infinite;
  font-size: 2rem;
  color: white;
`;

const AnimatedArrow = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <ArrowDown />
    </div>
  );
};

export default AnimatedArrow;