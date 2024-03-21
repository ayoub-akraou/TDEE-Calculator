import "./SelectField.css";

export default function SelectField({handleChange}) {
	return (
      <fieldset className="flex flex-col gap-secondary">
      <label htmlFor="activityLevel">Activity level</label>
		<select onChange={handleChange} name="activity level" id="activityLevel" className="w-full p-primary border border-gray-400">
			<option value="1.2">Sedentary (little or no exercise)</option>
			<option value="1.375">
				Lightly active (exercise 1 to 3 days a week)
			</option>
			<option value="1.55">
				Moderately active (exercise 3 to 5 days a week)
			</option>
			<option value="1.725">Active (exercise 6 to 7 days a week)</option>
			<option value="1.9">
				Very active (hard exercise 6 to 7 days a week)
			</option> 
		</select>
      </fieldset>
	);
}
