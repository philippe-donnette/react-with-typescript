import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 30,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Whatever about lebron"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );

}

export default App;
