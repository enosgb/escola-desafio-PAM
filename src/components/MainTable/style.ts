import { styled } from "styled-components";

export const Small = styled.small`
  font-size: 0.5rem;
`;

export const Table = styled.ul`
  @media only screen and (max-width: 600px) {
    width: 400px;
  }

  /* /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 500px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 500px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 700px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 900px;
  }
`;

export const TableHeader = styled.li`
  display: flex;
  background-color: #f5f7fb;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-radius: 10px;
`;

export const TableRow = styled.li`
  display: flex;
  margin-top: 5px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
`;

export const Col = styled.div`
  flex-basis: 100%;
  display: flex;
  padding: 10px 0;
`;

export const Col1 = styled.div`
  flex-basis: 100%;
`;

export const Col2 = styled.div`
  flex-basis: 100%;
`;
export const Col3 = styled.div`
  flex-basis: 100%;
`;
export const Col4 = styled.div`
  flex-basis: 100%;
`;
