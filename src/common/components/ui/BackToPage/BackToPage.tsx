import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import s from "./BackToPage.module.scss";

type Props = {
  linkText: string;
  link: string;
};

const BackToPage = ({ linkText, link }: Props) => {
  return (
    // <Link href={`/${link || "/"}`}>
    //   <div className={s.link_wrapper}>
    //     <ArrowLeftIcon className={s.link_arrow}/>
    //     <span>{linkText}</span>
    //   </div>
    // </Link>
    <></>
  );
};

export default BackToPage;
