import React, { useState } from "react";

interface Props {}
interface IState {
  people: {
    name: string;
    age: number;
  }[];
}
export const Test = (props: Props) => {
  const [people, setPeople] = useState<IState["people"]>([]);
  people.map((p) => p.age);
  return <div></div>;
};
