import Counter from '../components/Counter';

export default function Page() {
  return(
    <div style = {{ padding: "20px" }}>
      <h1>My Counters</h1>
      <Counter incrementBy={1} bgColor="blue" />
      <Counter incrementBy={2} bgColor="green" />
    </div>
  )
};