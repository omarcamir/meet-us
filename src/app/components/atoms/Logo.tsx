import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/meet-us-logo.svg"
        alt="Logo"
        width={200}
        height={200}
      />
    </Link>
  );
};

export default Logo;
