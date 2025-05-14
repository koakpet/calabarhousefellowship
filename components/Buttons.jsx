export default function Buttons(props) {
  return (
    <button className="bg-red-700 hover:bg-red-800 py-5 px-14 font-semibold text-white">
      {props.name}
    </button>
  );
}
