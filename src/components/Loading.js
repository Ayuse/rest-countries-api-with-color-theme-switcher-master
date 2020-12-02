import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

const Loading = () => {
  return (
    <Card>
      <Row>
        <Skeleton width='40px' height='40px' />
        <div style={{ marginLeft: '1rem' }}>
          <Skeleton width='130px' margin='0 0 0.6rem' />
          <Skeleton width='80px' />
        </div>
      </Row>
    </Card>
  );
};

export default Loading;

const Card = styled.div`
  border-radius: 0.5rem;
  background: #f2edf7;
  color: white;
  width: 200px;
  padding: 1.5rem;
`;
const glimmer = keyframes`
0%{
    transform: rotate(10deg)
    translate(-200%, -50%)
}
100%{
    transform:rotate(10deg)
    translate(200%, -50%)
}
`;

const skeletonShimmer = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 200px;
  background: ${rgba('#190932', 0.05)};
  animation: ${glimmer} 1.25s infinite linear;
`;
const skeletonColor = '#e0daeb';
const borderRadius = '3px';

const Skeleton = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width || '120px'};
  height: ${(props) => props.height || '12px'};
  margin: ${(props) => props.margin || 0};
  border-radius: ${borderRadius};
  background:${skeletonColor}

  &::before{
      ${skeletonShimmer}
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
