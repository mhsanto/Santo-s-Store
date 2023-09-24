import React, {  useState } from "react";
import BikeImage from "../../../public/deliveryBoy.svg";
import { styled } from "styled-components";

const DeliveryDetails = ({ name, email, userAddresses }) => {
  const [time, setTime] = useState(new Date());

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
          <Paragraph>
            {userAddresses?.location ? (
              <>
                {userAddresses.location},{userAddresses.road}
              </>
            ) : (
              "Please Provide your address"
            )}
          </Paragraph>
        </div>

        <div>
          <h5>Shop Address</h5>
          <Paragraph>Random Street In Uttora</Paragraph>
        </div>
      </LocationDetails>
      <div style={{ padding: "1rem" }}>
        <h1 style={{ fontWeight: 500 }}>{formateTime}</h1>
        <Paragraph>Estimated Delivery Time -{formateFutureTime}</Paragraph>
      </div>

      <UserName>
        <div>
          <h5>{name ? name : "unknown user"}</h5>
          <Paragraph>{email}</Paragraph>
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
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 0.7rem;
  @media (max-width: 380px) {
    flex-wrap: wrap;
    text-align: center;
  }
  & > * {
    flex: 1 1;
  }
  h5 {
    font-weight: 600;
  }
  img {
    width: 3.4rem;
    max-width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
const Paragraph = styled.p`
  opacity: 0.7;
  padding: 5px 0;

  font-size: 0.8125rem;
`;
export default DeliveryDetails;
