import { PrismaClient } from "@prisma/client";
import BBSCardList from "./components/BBSCardList";

async function fetchData() {
  const response = await fetch("http://localhost:3000/api/post", { cache: "no-store" });
  const bbsAllData = await response.json();
  console.log(bbsAllData);
  return bbsAllData;
}

export default async function Home() {
  fetchData();
  return (
    <main>
     <BBSCardList />
    </main>
  );
}
