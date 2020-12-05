import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

const Loading = () => {
  return (
    <div>
      <Card>
        <Row>
          <Mainbcg width='15rem' height='200px' />

          <div style={{ marginTop: '1rem' }}>
            <Skeleton width='130px' margin='0 0.7rem 0.6rem' />
            <Skeleton width='80px' margin='0 0.7rem 0.6rem' />
            <Skeleton width='80px' margin='0 0.7rem 0.6rem' />
            <Skeleton width='80px' margin='0 0.7rem 0.6rem' />
          </div>
        </Row>
      </Card>
    </div>
  );
};

export default Loading;

const Card = styled.div`
  border-radius: 10px 10px 0 0;
  background: #f2edf7;
  color: white;
  width: 15rem;
  height: 100%;
  /* padding: 1.5rem; */
  display: flex;
  align-items: center;
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
  height: 600px;
  background: ${rgba('#190932', 0.05)};
  animation: ${glimmer} 1.25s infinite linear;
`;
const skeletonColor = '#e0daeb';
const borderRadius = '3px';

const Mainbcg = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width || '120px'};
  height: ${(props) => props.height || '12px'};
  margin: ${(props) => props.margin || 0};
  border-radius: ${borderRadius};
  background: ${skeletonColor};

  &::before {
    ${skeletonShimmer}
  }
`;

const Skeleton = styled.div`
  position: relative;
  overflow: hidden;

  width: ${(props) => props.width || '120px'};
  height: ${(props) => props.height || '12px'};
  margin: ${(props) => props.margin || 0};
  border-radius: ${borderRadius};
  background: ${skeletonColor};

  &::before {
    ${skeletonShimmer}
  }
`;

const Row = styled.div`
  display: inline-inline-flexbox;
  align-items: center;
  justify-items: center;
`;
