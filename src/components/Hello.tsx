export default function Hello({ name = "world" }: { name?: string }) {
  return <p>Hello, {name}!</p>;
}
