import "./App.css";
import Details from "./Details";

const details = [
  { name: "foo", rate: 1.23, amount: 45 },
  { name: "bar", rate: 11.45, amount: 62 },
  { name: "baz", rate: 0.67, amount: 23 },
];

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

export default function App() {
  return (
    <>
      <h1>Hi Person!</h1>
      <button>Count is 0</button>
      <Details data={details} />
    </>
  );
}
