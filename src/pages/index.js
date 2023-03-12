import Header from "@/components/Header/Header";
import Benefits from "@/components/Benefits/Benefits";
import Faq from "@/components/Faq/Faq";
import Logo from "../../public/RoyalInvestLogo.png";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Royal Invest | HomePage</title>
        <meta name="description" content="RoyalInvest - лучшие каперы на всем СНГ рынке." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Benefits />
      <Faq />
    </>
  );
}
