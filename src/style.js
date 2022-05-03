import styled from "styled-components";

// for APP
export const AppContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #afd275;
  color: rgb(98, 18, 114);
`;
export const Card = styled.div`
  width: 350px;
  height: 400px;
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #afd275;
  margin-bottom: 50px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  position: relative;
`;
export const CardHeader = styled.div`
  margin: 0 20px;
  display: flex;
  flex: 1;
  background-color: #afd275;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  height: 70px;
  margin-bottom: 30px;
`;
export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Day = styled.div`
  margin-right: 10px;
  font-size: 26px;
  font-weight: 400;
`;
export const Box = styled.div`
  font-size: 12px;
  position: relative;
`;
export const DayOfTheWeek = styled.div`
  font-size: 12px;
`;
export const TextContainer = styled.div`
  height: 50px;
  padding: 0;
  margin: 0;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #afd275;
`;
export const TextContainerBefore = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  position: relative;
`;
export const TextContainerRow = styled.div`
  &:hover {
    border-radius: 10px;
    background: #afd275;
    box-shadow: inset 9px 9px 17px #607440, inset -9px -9px 17px #feffaa;
    cursor: pointer;
  }
`;
export const CheckedBox = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 20px;
  border-radius: 33px;
  background: #afd275;
  box-shadow: 8px 8px 13px #46542f, -8px -8px 13px #ffffbb;
`;
export const StyledButton = styled.button`
  height: 40px;
  width: 40px;

  background-color: #afd275;
  border: none;
  border-radius: 48px;
  background: linear-gradient(145deg, #bbe17d, #9ebd69);
  box-shadow: 4px 4px 21px #46542f, -4px -4px 21px #ffffbb;
  &:hover {
    border-radius: 50px;
    background: #afd275;
    box-shadow: inset 4px 4px 0px #9fbf6a, inset -4px -4px 0px #bfe580;
  }
`;

export const PlusButton = styled(StyledButton)`
  position: absolute;
  bottom: -35px;
  left: 42%;
  height: 70px;
  width: 70px;
  border-radius: 48px;
  border-radius: 48px;
  background: linear-gradient(315deg, #bbe17d, #9ebd69);
  box-shadow: -5px -5px 17px #46542f, 5px 5px 17px #ffffbb;
  &:hover {
    border-radius: 50px;
    background: #afd275;
    box-shadow: inset 5px 5px 0px #98b766, inset -5px -5px 0px #c6ed84;
  }
`;
// Modal styles for Form

export const ModalContainer = styled.div`
  position: absolute;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  justify-content: center;
  display: flex;

  align-items: center;
  width: 100%;
`;

export const ExitContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

export const FormContainer = styled.div`
  width: 350px;
  padding: 30px;
  display: flex;
  background-color: #afd275;
  position: absolute;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0, transform 0, 25s;
  left: 50%;
  top: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;
export const StyledButtonAdd = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  background-color: green;
  margin-top: 10px;
  border: none;
  background: linear-gradient(145deg, #9ebd69, #bbe17d);
  box-shadow: 9px 9px 19px #89a45b, -9px -9px 19px #d6ff8f;
  &:hover {
    background: #afd275;
    box-shadow: inset 5px 5px 0px #89a45b, inset -5px -5px 0px #d6ff8f;
    &:hover span {
      display: inline-block;
      transform: scale(1.1);
    }
  }
`;
export const StyledInput = styled.input`
  line-height: 50px;
  border: none;
  padding: 0 30px;
  outline: none;
  border-radius: 10px;

  background: #afd275;
  box-shadow: inset 5px 5px 0px #89a45b, inset -5px -5px 0px #d6ff8f;
  color: rgb(98, 18, 114);
  font-size: 14px;
`;
export const ExitBox = styled.button`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  margin-right: 20px;
  border-radius: 20px;
  border-radius: 33px;
  background: #afd275;
  box-shadow: 8px 8px 13px #46542f, -8px -8px 13px #ffffbb;
  &:hover {
    background: #afd275;
    box-shadow: inset 8px 8px 13px #46542f, inset -8px -8px 13px #ffffbb;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;
