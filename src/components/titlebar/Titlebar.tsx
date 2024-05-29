interface Props {
  title: string;
}

export default function Titlebar(props: Props) {
  const { title } = props;

  return (
    <div className="titlebar_container">
      <h3>{title}</h3>
    </div>
  );
}
