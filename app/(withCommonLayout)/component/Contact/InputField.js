export const InputField = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <input
      className="bg-transparent border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
    <hr className="text-primary" />
  </div>
);
