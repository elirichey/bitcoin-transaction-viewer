import Image from "next/image";

export default function Header() {
  return (
    <div id="header">
      <Image src="/logo.svg" height={32} width={32} alt="Logo" priority />
    </div>
  );
}
