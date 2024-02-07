import styled from "styled-components";

export const Card = styled.div`
  padding: 18px 20px;
  border-radius: 8px;
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`

export const FlexBoxRow = styled.div`
  color: var(--text-tetriary);
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;

    padding-left: 23px;
    padding-top: 12px;
`;

export const FlexBoxCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 20px 40px; /* 위아래 20px, 좌우 40px의 패딩을 적용하여 버튼 크기를 조정 */
  font-size: 24px; /* 버튼 내 텍스트의 크기 설정 */
  font-weight: bold; /* 텍스트 굵기 설정 */
  text-transform: uppercase; /* 텍스트 대문자 변환 */
  border-radius: 10px; /* 버튼의 모서리를 둥글게 만듭니다. */
  background-color: #2eaddc; /* 배경색 설정 */
  color: white; /* 텍스트 색상 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  cursor: pointer; /* 마우스 커서 모양 설정 */
  transition: background-color 0.3s, color 0.3s; 

  // background-color: red;
  // border: 0;
  // border-radius: 8px;
  // padding: 10px 20px;
  // color: black;
  
  // font-weight: bold;
  // cursor: pointer;
  // pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Input = styled("input")`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #fefefe;
  }
`;


