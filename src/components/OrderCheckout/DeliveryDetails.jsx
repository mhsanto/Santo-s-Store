import React, { useEffect, useState } from "react";
import BikeImage from "../../assets/images/others/bike.png";
import userphoto from "../../assets/images/others/user.png";
import { styled } from "styled-components";

const DeliveryDetails = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);
  const tick = () => {
    setTime(new Date());
  };
  const options = {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  };
  const formateTime = time.toLocaleTimeString([], options);
  const futureTime = new Date(time.getTime() + 30 * 60000);
  const formateFutureTime = futureTime.toLocaleTimeString([], options);
  return (
    <>
      <Imagediv>
        <img src={BikeImage} alt="" />
      </Imagediv>
      <LocationDetails>
        <div>
          <h5>Your Location</h5>
          <Paragraph>107 RD No 9</Paragraph>
        </div>

        <div>
          <h5>Shop Address</h5>
          <Paragraph>Gulshan Plaza Restaura GPR</Paragraph>
        </div>
      </LocationDetails>
      <div style={{ padding: "1rem" }}>
        <h1 style={{ fontWeight: 500 }}>{formateFutureTime}</h1>
        <Paragraph>Estimated Delivery Time</Paragraph>
      </div>

      <UserName>
        <img src={userphoto} alt="" />
        <div>
          <h5>Hamim</h5>
          <Paragraph>Your Raider</Paragraph>
        </div>
      </UserName>
    </>
  );
};

const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  gap: 1.5rem;
  padding: 1rem;
  h5 {
    font-size: 15px;
    font-weight: 600;
  }
`;
const Paragraph = styled.p`
  opacity: 0.7;
  padding: 5px 0;
  font-size: 0.8125rem;
`;
const Imagediv = styled.div`
  padding: 0.3125rem 1.5rem;
  img {
    width: 5rem;
    max-width: 100%;
  }
`;
const UserName = styled.div`
  display: flex;
  background-color: #fff;
  padding: 0.3rem 1rem;
  align-items: center;
  border-radius: 10px;
  gap: 0.7rem;
  h5 {
    font-weight: 600;
  }
  img {
    width: 4.2rem;
    max-width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
export default DeliveryDetails;
