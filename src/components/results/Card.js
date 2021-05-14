import React from "react";
import styled from "styled-components";

const Card = ({ data }) => {
  return (
    <StyledCard>
      <img src={data.links.mission_patch_small} alt="" />
      <div className="content">
        <h4>
          {data.mission_name}#{data.flight_number}
        </h4>
        <h5>Mission IDs :</h5>
        {data.mission_id.length ? (
          <ul>
            {data.mission_id.map((id) => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        ) : (
          <p>----</p>
        )}
        <h5>
          Launch Year: <span>{data.launch_year}</span>
        </h5>
        <h5>
          Successful Launch: <span>{`${data.launch_success}`}</span>
        </h5>
        {/* <h5>
          Successful Landing: <span>{`${data.launch_landing}`}</span>
        </h5> */}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  margin-right: 0 0.5rem;
  img {
    width: 100%;
    height: 100%;
    background-color: rgb(218, 222, 226);
    object-fit: cover;
    border-radius: 1rem;
  }
  .content {
    h4 {
      color: #343494;
      font-size: 1.15rem;
      margin: 1rem 0;
    }
    p {
      margin: 0 1.4rem;
    }
    li {
      list-style: disc;
      margin: 0 1.4rem;
    }
    h5 {
      margin: 10px;
      font-size: 1rem;
    }
    span {
      font-weight: lighter;
      margin: 0 4px 0 0;
      text-transform: capitalize;
    }
  }
`;

export default Card;
