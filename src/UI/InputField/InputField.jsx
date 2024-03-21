import "./InputFiled.css"

export default function InputField({name, id, value, placeholder, label, handleChange}) {
	return (
		<fieldset className="flex flex-col gap-secondary">
			<label htmlFor="age">{label}</label>
			<input
				type="text"
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
            className="border border-gray-400 font-medium p-primary rounded-md"
				onChange={handleChange}
			/>
		</fieldset>
	);
}
