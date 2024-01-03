import Link from "next/link";

interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }:Props) => {
  return (
    <Link href="/">
      <h1 className={`lg:text-3xl text-xl font-extrabold uppercase ${className}`}>{title || "Coding Crossroads"}</h1>
    </Link>
  );
}

export default Logo;