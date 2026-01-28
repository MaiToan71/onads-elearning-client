"use client";

import Image from "next/image";
import Link from "next/link";

const FullLogo = () => {
  return (
    <Link href={"/"} className="hidden md:inline-block">
      {/* Dark Logo */}
      <Image
        src="/images/logos/logo.png"
        alt="logo"
        width={50}
        height={40}
        className="block dark:hidden rtl:scale-x-[-1] md:w-[50px] xl:w-[160px]"
      />
      {/* Light Logo */}
      <Image
        src="/images/logos/logo.png"
        alt="logo"
        width={50}
        height={40}
        className="hidden dark:block rtl:scale-x-[-1] md:w-[50px] xl:w-[160px]"
      />
    </Link>
  );
};

export default FullLogo;
