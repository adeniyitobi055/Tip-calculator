export default function Total({ bill, tip }) {
  return (
    <h3>{bill > 0 ? `You pay $${bill + tip} ($${bill} + $${tip} tip)` : ""}</h3>
  );
}
