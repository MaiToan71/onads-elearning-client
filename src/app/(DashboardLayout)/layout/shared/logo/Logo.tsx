'use client'

import Image from "next/image";
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={"/images/logos/logo.png"} alt="logo" width={50} height={40} />
    </Link>
  )
}

export default Logo
