import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
        <Wrap>
          <img src="https://th.bing.com/th/id/OIP.kbDbbsGdzEPjx2XjCZK-ggHaHR?w=186&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.18);
  }
`;
