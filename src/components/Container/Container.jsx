import "./Container.css"

export default function Container(props) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[45rem] rounded-2xl overflow-hidden shadow-2xl">{props.children}</div>
  )
}
