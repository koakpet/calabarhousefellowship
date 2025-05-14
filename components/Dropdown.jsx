export default function Dropdown(props) {
  return (
    <button className="rounded-lg bg-neutral-400 hover:bg-neutral-500 py-3 px-9 font-extralight text-neutral-800 hover:text-black">
      {props.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;
    </button>
  );
}
