import React from "react";
import StyledGoal from "../styles/StyledTags";
import CheckBox from "../styles/CheckBox";
import Frame from "../styles/Frame";

const Goal = ({ goal, updates }) => {
  return (
    <StyledGoal>
      <CheckBox>
        {" "}
        <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
        <span />
      </CheckBox>
      <h2>{goal.fields.title}</h2>
      <Frame>
        <h3>1. Details</h3>
        <li>{goal.fields.details}</li>
        <h3>2. Updates</h3>
        {updates.map((update, index) => (
          <li key={index}>{update.fields.update}</li>
        ))}
      </Frame>
    </StyledGoal>
  );
};

export default Goal;
