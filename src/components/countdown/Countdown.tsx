import Image from "next/image";

interface Props {
  timeout: number;
}

export default function Countdown(props: Props) {
  const { timeout } = props;

  return (
    <div className="countdown-timer">
      <Image
        src="/svg/clock.svg"
        alt="Clock Countdown"
        width={16}
        height={16}
        priority
      />

      <p>{timeout} seconds</p>
    </div>
  );
}
