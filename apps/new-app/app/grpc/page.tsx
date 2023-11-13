export default async function Page() {
  console.log("start");

  const a = fetch("/api");

  console.log(a, "new");
  return <>ds</>;
}
