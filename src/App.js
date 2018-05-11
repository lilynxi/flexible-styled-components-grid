import React, { Component } from 'react';
import styled from 'styled-components';
import { Column, Row, Grid } from './Grid.js';
import { media } from './gridConfig.js';
import FixedGrid from './FixedGrid.js';


const FilledColumn = styled(Column)`
  background-color: rgba(0,191,255, 0.4);
  height: 5rem;

  > p {
    margin: 0;
    padding: 1rem;
  }

  @media all and (min-width:${media.tablet}px) {
    background-color: rgba(0, 91, 205, 0.4);
  }

  @media all and (min-width:${media.desktop}px) {
    background-color: rgba(0, 201, 175, 0.4);
  }

  @media all and (min-width:${media.wide}px) {
    background-color: rgba(0, 161, 155, 0.4);
  }

  @media all and (min-width:${media.extraWide}px) {
    background-color: rgba(0, 201, 105, 0.4);
  }
`;

const Section = styled.div`padding: 50px 0;`;

const StyledH1 = styled.h1`text-align: center;`;



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <StyledH1>Flexible Styled Components Grid</StyledH1>
        </header>


        <FixedGrid />
          <Grid>
            <Section>
              <h2>Standart Columns</h2>
              <Row>
                <FilledColumn mobile={6} tablet={2} desktop={4} offsetDesktop={1}>
                  <p>Mobile - 6 / Tablet - 2 / Desktop - 4</p>
                </FilledColumn>
                <FilledColumn mobile={6} tablet={2} desktop={4}>
                  <p>Mobile - 6 / Tablet - 2 / Desktop - 4</p>
                </FilledColumn>
                <FilledColumn mobile={6} tablet={2} desktop={4}>
                  <p>Mobile - 6 / Tablet - 2 / Desktop - 4</p>
                </FilledColumn>
              </Row>
            </Section>

            <Section>
              <h2>Hide Columns</h2>
              <p>Hide Columns by not setting any properties</p>
              <Row>
                <FilledColumn desktop={4} offsetDesktop={1}>
                  <p>This column is hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn tablet={2} offsetTablet={2} desktop={4}>
                  <p>This column is hidden for mobile</p>
                </FilledColumn>
                <FilledColumn mobile={2} offsetMobile={4} tablet={2} desktop={4}>
                  <p>always visible</p>
                </FilledColumn>
              </Row>
            </Section>

            <Section>
              <h2>Breakpoint wide & extraWide</h2>
              <p>
                Breakpoint wide and Breakpoint extraWide default to desktop if they
                are not defined
              </p>
              <Row>
                <FilledColumn
                  mobile={1}
                  tablet={1}
                  desktop={3}
                  wide={6}
                  offsetWide={6}
                  extraWide={12}
                  offsetExtraWide={1}
                >
                  <p>this column has special settings for wide & extrawide</p>
                </FilledColumn>
              </Row>
            </Section>

            <Section>
              <h2>Columns with Offset</h2>
              <p>Offsets can be defined per Breakpoint</p>
              <Row>
                <FilledColumn
                  mobile={1}
                  offsetMobile={5}
                  tablet={1}
                  offsetTablet={5}
                  desktop={1}
                  offsetDesktop={13}
                >
                  <p>always visible</p>
                </FilledColumn>
                <FilledColumn
                  mobile={2}
                  offsetMobile={4}
                  tablet={2}
                  offsetTablet={4}
                  desktop={2}
                  offsetDesktop={12}
                >
                  <p>always visible</p>
                </FilledColumn>
                <FilledColumn
                  mobile={3}
                  offsetMobile={3}
                  tablet={3}
                  offsetTablet={3}
                  desktop={3}
                  offsetDesktop={11}
                >
                  <p>always visible</p>
                </FilledColumn>
                <FilledColumn
                  mobile={4}
                  offsetMobile={2}
                  tablet={4}
                  offsetTablet={2}
                  desktop={4}
                  offsetDesktop={10}
                >
                  <p>always visible</p>
                </FilledColumn>
                <FilledColumn
                  mobile={5}
                  offsetMobile={1}
                  tablet={5}
                  offsetTablet={1}
                  desktop={5}
                  offsetDesktop={9}
                >
                  <p>always visible</p>
                </FilledColumn>
                <FilledColumn mobile={6} tablet={6} desktop={6} offsetDesktop={8}>
                  <p>always visible</p>
                </FilledColumn>
                <FilledColumn desktop={7} offsetDesktop={7}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={8} offsetDesktop={6}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={9} offsetDesktop={5}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={10} offsetDesktop={4}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={11} offsetDesktop={3}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={12} offsetDesktop={2}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={13} offsetDesktop={1}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
                <FilledColumn desktop={14}>
                  <p>hidden for mobile and tablet</p>
                </FilledColumn>
              </Row>
            </Section>
          </Grid>
      </div>
    );
  }
}

export default App;
