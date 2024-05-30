interface Props {
  name: string;
  value: string;
  onChange: (val: string) => void;
  type: string;
  placeholder?: string;
  label: string;
  error?: null | string;
  isComplete?: boolean;
  subtext?: null | string;
}

export default function Input(props: Props) {
  const {
    name,
    value,
    onChange,
    type,
    placeholder,
    label,
    error,
    isComplete,
    subtext,
  } = props;

  const hasError = error && error.trim().length > 0;

  const input_class = hasError
    ? "input input-error"
    : isComplete
    ? "input input-complete"
    : "input";

  return (
    <div className="row">
      <div className="flex1 column">
        <label htmlFor={name} className="input-label">
          {label}
        </label>

        <input
          id={name}
          name={name}
          type={type ? type : "text"}
          className={input_class}
          placeholder={placeholder}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          autoComplete="on"
        />

        {error ? <p className="input-error-msg">{error}</p> : null}
        {subtext ? <p className="input-subtext">{subtext}</p> : null}
      </div>
    </div>
  );
}
