import Buttons from "./Buttons";

export default function Subscribe() {
  return (
    <div className="bg-neutral-800 py-24 md:py-32 px-5 md:px-20 text-white text-center">
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>

      {/* <p className="py-5 md:py-9 px-16 font-thin md:font-extralight">
        Stay update on all the latest aritcles and posts
      </p> */}

      <div className="pt-16">
        <Buttons name="SUBSCRIBE" />
      </div>
    </div>
  );
}
