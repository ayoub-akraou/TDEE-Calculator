import "./Main.css";
import { InputField, GenderField, SelectField } from "../../UI/index.js";
import { Button } from "../../components/index.js";

export default function Main({ formData, handleChange, handleSubmit }) {
	
	return (
		<form
			action=""
			className="text-[1.4rem] flex flex-col gap-primary p-primary-l"
			onSubmit={e => {
				e.preventDefault()
				handleSubmit()
			}}
		>
			<GenderField handleChange={handleChange} gender={formData.gender} />
			<InputField
				name="age"
				id="age"
				value={formData.age}
				placeholder="Enter your age!"
				label="Age"
				handleChange={handleChange}
			/>
			<InputField
				name="weight"
				id="weight"
				value={formData.weight}
				placeholder="Enter your weight!"
				label="Weight"
				handleChange={handleChange}
			/>
			<InputField
				name="height"
				id="height"
				value={formData.height}
				placeholder="Enter your age!"
				label="Height"
				handleChange={handleChange}
			/>
			<SelectField
				handleChange={handleChange}
				gender={formData.gender}
				activityLevel={formData["activity level"]}
			/>
			<Button>
				Calculate
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="h-6 w-6 inline-block"
				>
					<g fill="#FFFFFF">
						<path d="M7.6 5.8c0 .4.1.7.4.9l4.6 4.3c.5.5.5 1.4 0 1.9L8 17.2c-.3.2-.4.6-.4.9 0 1.1 1.3 1.7 2.1.9l6.8-6.2c.6-.5.6-1.4 0-1.9l-6.8-6c-.8-.7-2.1-.1-2.1.9z"></path>
					</g>
				</svg>
			</Button>
		</form>
	);
}
