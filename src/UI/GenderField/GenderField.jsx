import "./GenderField.css"

export default function GenderField({handleChange, gender}) {
	return (
		<fieldset>
			<legend>Gender</legend>
			<div className="flex gap-primary w-full">
				<div className="flex gap-secondary">
					<input onChange={handleChange} type="radio" name="gender" id="male" value="male" checked={gender === "male"}/>
					<label htmlFor="male">Male</label>
				</div>
				<div className="flex gap-secondary">
					<input onChange={handleChange} type="radio" name="gender" id="female" value="female" checked={gender === "female"} />
					<label htmlFor="female">Female</label>
				</div>
			</div>
		</fieldset>
	);
}
