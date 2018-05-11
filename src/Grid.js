import styled, { css } from 'styled-components';
import { media, gridConfig } from './gridConfig.js';


export const singleColumnWidth = (breakpoint = 'mobile') =>
  `calc(1 / ${gridConfig[breakpoint].columns} * 100%)`;

const maxWidth = 1680;

const widthCalc = (columnWidth, columnsCount, gutter, offset) => {
  if (columnWidth) {
    if (offset) {
      return `
        display: block;
        margin-right: ${gutter / 2}px;
        margin-left: calc(${offset}/${columnsCount} * 100% + ${gutter / 2}px);
        width: calc( ${columnWidth} / ${columnsCount} * 100% - ${gutter}px);
        `;
    }
    return `
        display: block;
        margin-right: ${gutter / 2}px;
        margin-left: ${gutter / 2}px;
        width: calc( ${columnWidth} / ${columnsCount} * 100% - ${gutter}px);
        `;
  }
  return `
      display: none;
      `;
};

const flexGrid = () => `
  display: flex;
  flex-flow: row wrap;
`;

const gridMargin = gutter => `
  margin-left: -${gutter / 2}px;
  margin-right: -${gutter / 2}px;
`;

const capitalize = token => token.charAt(0).toUpperCase() + token.slice(1);

const createGridWidthCalc = (prop, fallback1, fallback2) => props =>
  widthCalc(
    props[prop] ||
      (fallback1 && props[fallback1]) ||
      (fallback2 && props[fallback2]),
    gridConfig[prop].columns,
    gridConfig[prop].gutter,
    props[`offset${capitalize(prop)}`] ||
      (fallback1 && props[`offset${capitalize(fallback1)}`]) ||
      (fallback2 && props[`offset${capitalize(fallback2)}`]),
  );

//
// ${column} -> one single column
//
export const column = () => css`
  ${createGridWidthCalc('mobile')}
  
  @media all and (min-width:${media.tablet}px) {
    ${createGridWidthCalc('tablet')}
  }

  @media all and (min-width:${media.desktop}px) {
    ${createGridWidthCalc('desktop')}
  }

  @media all and (min-width:${media.wide}px) {
    ${createGridWidthCalc('wide', 'desktop')}
  }

  @media all and (min-width:${media.extraWide}px) {
    ${createGridWidthCalc('extraWide', 'wide', 'desktop')}
  }
`;

export const Column = styled.div`${column};`;

//
// ${row} -> flex container with negative margins to align the columns
//
export const row = () => css`
  ${flexGrid}
  ${gridMargin(gridConfig.mobile.gutter)}

  @media all and (min-width:${media.tablet}px) {
    ${gridMargin(gridConfig.tablet.gutter)}
  }

  @media all and (min-width:${media.desktop}px) {
    ${gridMargin(gridConfig.desktop.gutter)}
  }

  @media all and (min-width:${media.wide}px) {
    ${gridMargin(gridConfig.wide.gutter)}
  }

  @media all and (min-width:${media.extraWide}px){
    ${gridMargin(gridConfig.extraWide.gutter)}
    max-width: ${maxWidth}px;
    margin: 0 auto;
  }
`;

export const Row = styled.div`${row};`;

//
// ${grid} -> outer margins of the grid
//

export const grid = () => css`
  overflow-x: hidden;
  padding: 0 ${gridConfig.mobile.gridMargin}px;

  @media all and (min-width:${media.tablet}px) {
    padding: 0 ${gridConfig.tablet.gridMargin}px;
  }

  @media all and (min-width:${media.desktop}px) {
    padding: 0 ${gridConfig.desktop.gridMargin}px;
  }

  @media all and (min-width:${media.wide}px) {
    padding: 0 ${gridConfig.wide.gridMargin}px;
  }

  @media all and (min-width:${media.extraWide}px) {
    padding: 0 ${gridConfig.extraWide.gridMargin}px;
  }
`;

//
// Make full-width (parent needs to be centered)
//

export const fullWidth = () => css`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const Grid = styled.div`${grid};`;
