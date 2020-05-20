import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  color: #ababab;
  align-items: center;
  justify-content: center;
`;
const SubContainer = styled.div`
  width: 25em;
  height: 30em;
  display: flex;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export { Container, SubContainer };
