
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import MetaHead from "@/common/components/MetaHead/MetaHead";
import { getLayout } from "@/common/components/Layout/Layout";
import {Button} from "@/common/components/ui/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaHead title="Home" description="Generated by create next app"/>
      <div>Home pageProps</div>
      <div className={styles.block_link}>
        <Button as="button" variant="primary">Sign Up</Button>
      </div>
    </>
  );
}

Home.getLayout = getLayout