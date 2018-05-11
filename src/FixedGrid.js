import React from 'react';
import styled from 'styled-components';
import { column, row, grid } from './Grid.js';
import { media, gridConfig } from './gridConfig.js';

const Grid = styled.div`
  ${grid}
  position: absolute;
  top: 50px;
  height: 2500px;
  width: calc(100% - 40px);
  font-size: 10px;
  z-index: -1;

  @media all and (min-width:${media.tablet}px) {
    width: calc(100% - 80px);
  }

  @media all and (min-width:${media.desktop}px) {
    width: calc(100% - 120px);
  }

  @media all and (min-width:${media.wide}px) {
    width: calc(100% - 240px);
  }

  @media all and (min-width:${media.extraWide}px) {
    width: calc(100% - 240px);
  }
`;

const Row = styled.div`
  ${row} height: 100%;
  z-index: -1;
  left: ${gridConfig.mobile.gridMargin}px;
  right: ${gridConfig.mobile.gridMargin}px;

  @media all and (min-width:${media.tablet}px) {
    left: ${gridConfig.tablet.gridMargin}px;
    right: ${gridConfig.tablet.gridMargin}px;
  }

  @media all and (min-width:${media.desktop}px) {
    left: ${gridConfig.desktop.gridMargin}px;
    right: ${gridConfig.desktop.gridMargin}px;
  }

  @media all and (min-width:${media.wide}px) {
    left: ${gridConfig.wide.gridMargin}px;
    right: ${gridConfig.wide.gridMargin}px;
  }

  @media all and (min-width:${media.extraWide}px) {
    left: ${gridConfig.extraWide.gridMargin}px;
    right: ${gridConfig.extraWide.gridMargin}px;
  }
`;

const Column = styled.div`
  ${column} margin-bottom: 1px;
  min-height: 20px;
  box-shadow: inset 0 0 1px #bbb;
  background-color: rgba(0, 0, 0, 0.03);
`;

const FixedGrid = () =>
  (<Grid>
    <Row>
      <Column mobile={1} tablet={1} desktop={1}>
        Column 1
      </Column>
      <Column mobile={1} tablet={1} desktop={1}>
        Column 2
      </Column>
      <Column mobile={1} tablet={1} desktop={1}>
        Column 3
      </Column>
      <Column mobile={1} tablet={1} desktop={1}>
        Column 4
      </Column>
      <Column mobile={1} tablet={1} desktop={1}>
        Column 5
      </Column>
      <Column mobile={1} tablet={1} desktop={1}>
        Column 6
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 7
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 8
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 9
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 10
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 11
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 12
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 13
      </Column>
      <Column mobile={0} tablet={0} desktop={1}>
        Column 14
      </Column>
    </Row>
  </Grid>);

export default FixedGrid;
