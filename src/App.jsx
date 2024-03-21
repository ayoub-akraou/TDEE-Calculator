import "./App.css";
import { useState } from "react";
import { Header, Main } from "./sections/index.js";
import { Container } from "./components/index.js";

function App() {
	const [formData, setFormData] = useState({
		gender: "male",
		age: 25,
		weight: 65,
		height: 160,
		"activity level": 1.2,
	});
  const [showResult, setShowResult] = useState(false)

	const maintenanceCalories = Math.round(
		(88.362 +
			13.397 * formData.weight +
			4.799 * formData.height -
			5.677 * formData.age) *
			formData["activity level"]
	);
	const loosingWeightCalories = maintenanceCalories - 500;
	const gainingWeightCalories = maintenanceCalories + 500;

	function handleChange(event) {
		const { value, name } = event.target;
		setFormData((prevData) => {
			return { ...prevData, [name]: value };
		});
		// console.log(formData);
	}

	function handleSubmit() {
    setShowResult(prev => !prev)
  }
	return (
		<Container>
			<Header />
			<Main
				handleChange={handleChange}
				formData={formData}
				handleSubmit={handleSubmit}
			/>
			{/* 
      <Footer />
      */}
      <p className="text-center text-[1.4rem] font-medium p-primary bg-emerald-200">
			{showResult ? 
				(<div className="w-fit mx-auto text-left"><strong className="">maintenance: {maintenanceCalories} calories</strong><br />
				<strong className="text-emerald-500">loosing weight: {loosingWeightCalories} calories</strong><br />
				<strong className="text-red-500">gaining weight: {gainingWeightCalories} calories</strong></div>)
			 : "---- the result will show up here! ----"}</p>
		</Container>
	);
}

export default App;
