import Head from "next/head";
import Kapers from "@/components/Kapers/Kapers";

export default function Capers() {
  return (
    <>
      <Head>
        <title>RoyalInvest | Список каперов</title>
        <meta name="description" content="RoyalInvest - лучшие каперы на всем СНГ рынке." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Kapers />
      
    </>
  );
}
