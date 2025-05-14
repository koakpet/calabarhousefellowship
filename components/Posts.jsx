import Dropdown from "./Dropdown";
import Subscribe from "./Subscribe";

function Posts(props) {
  return (
    <>
      <div className="bg-neutral-100 px-5 py-12 md:p-20">
        <div className="flex flex-col items-center md:flex-row md:justify-around items-start">
          <div className="p-6 md:hidden">
            <Dropdown name="Explore More Posts" />
          </div>
          <div className="md:w-8/12 flex-initial">
            <div className="mt-20 mb-3 md:mt-6">
              <h2 className="mb-3">{props.topic}</h2>
              <sup className="text-sm md:text-base">
                {props.author} &nbsp;&nbsp;&nbsp; {props.date}
              </sup>
            </div>
            <section className="border-t border-neutral-300 pt-8">
              <p>{props.p1}</p>
              <p>{props.p2}</p>
              <p>{props.p3}</p>
              <p>{props.p4}</p>
              <p>{props.p5}</p>
            </section>
          </div>
          <div className="hidden md:block w-3/12 flex-initial bg-neutral-300 rounded-lg"></div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default Posts;
