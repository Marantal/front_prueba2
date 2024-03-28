const InputField = ({ name, value, onChange, placeholder }) => (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
  export default InputField;