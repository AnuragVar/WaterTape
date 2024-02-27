import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Say GoodBye to
          <br></br>
          <span className="text-slate-500">Damp and</span>
          <br></br>
          <span className="text-slate-500"> Leaking </span>
          Walls
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Water Tape is the one stop solution for all your water related
          problems. We have a wide range
          <br />
          of facilites for you to conserve your water and hence your property
        </div>
        <Link
          to={"/roo"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link>
      </div>
    </div>
  );
}
