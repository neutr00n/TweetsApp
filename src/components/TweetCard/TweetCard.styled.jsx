import styled from "@emotion/styled";
import backgroundImage from "../../images/bg-image.png";
import logo from "../../images/logo.png";
import line from "../../images/line.png";

export const CardBox = styled.div`
  position: relative;

  padding-top: 284px;

  width: 380px;
  height: 460px;

  background-image: url(${backgroundImage}), url(${logo}), url(${line}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: 36px 28px, 20px 20px, center, center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
`;

//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
