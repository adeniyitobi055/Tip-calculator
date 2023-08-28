export default function Reset({ onReset, bill }) {
  return <div>{bill > 0 ? <button onClick={onReset}>Reset</button> : ""}</div>;
}
