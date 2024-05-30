interface Props {
  id: number;
  title: string;
}

export default function EmptyList(props: Props) {
  const { id, title } = props;

  return (
    <div id={`table-${id}`} className="empty-list">
      <p>{title}</p>
    </div>
  );
}
