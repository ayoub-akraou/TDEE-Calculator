import "./Header.css"

export default function Header() {
  return (
    <header className="bg-emerald-500 text-white p-4">
     <h1 className="title text-[2.2rem]">TDEE Calculator</h1>
     <p className="subtitle text-[1.4rem] font-light">The Total Daily Energy Expenditure (TDEE) Calculator estimates how many calories you burn per day.</p>
    </header>
  )
}
