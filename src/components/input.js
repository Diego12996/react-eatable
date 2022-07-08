function Input({ prop, value, onChange, label}) {
  return (
    <div>
      {label && <label htmlFor={prop}>{label}</label>}
        <input
          id={prop}
          name={prop}
          type="text"
          value={value}
          onChange={onChange}
        />
    </div>
  )
}

export default Input;