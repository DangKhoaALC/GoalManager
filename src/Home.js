import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import GoalManager from "./components/GoalManager";
import styled from "styled-components";
import { StyleBody } from "./styles/StyleBody";

const base = new Airtable({ apiKey: "keytJWpkRw20pBVZj" }).base("appjB69DE47Y1Seog");
console.log(base);

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        fetchNextPage();
      });
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
    console.log(goals)
  }, [goals]);

  const Title = styled.h1`
  text-align: center;
  font-size: 7rem;
  margin: 2rem 0;
`;

  return (
    <>
      <StyleBody/>
      <Title>My Goals</Title>
      {goals.map((goal) => (
        <GoalManager
          key={goal.id}
          goal={goal}
          updates={updates.filter(
            (update) => update.fields.goalid[0] === goal.id
          )}
        />
      ))}
    </>
  );
}

export default App;
