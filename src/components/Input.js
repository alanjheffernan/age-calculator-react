function Input({ state, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex-grow md:flex-none">
      <label className="w-full">
        <h2 className="text-smokey-grey mb-2 text-sm font-bold tracking-[3.5px]">
          {state.label}
        </h2>
        <input
          type="number"
          className="text-off-black placeholder:text-light-grey font-xl focus:outline-purple focus:caret-purple w-full rounded-lg border px-4 py-3 font-bold focus:outline-1 md:max-w-[160px] "
          placeholder={state.placeholder}
          onChange={handleChange}
        />
        <p className="text-light-red text-xs">{state.errorMessage}</p>
      </label>
    </div>
  );
}

export default Input;
