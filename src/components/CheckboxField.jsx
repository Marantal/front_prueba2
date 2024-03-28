const CheckboxField = ({ name, value, onChange, label }) => (
    <div>
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
  export default CheckboxField;