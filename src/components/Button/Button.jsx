import "./Button.css"

export default function Button(props) {
  return (
    <button type="submit" className="bg-emerald-500 text-white font-medium p-primary rounded-md transition-colors hover:bg-emerald-400">{props.children}</button>
  )
}

