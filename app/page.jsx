import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <div className="p-10 md:p-20 text-center">
        <h1 className="pb-8 pt-32 md:px-20 md:py-16">
          To day if ye will hear his voice, harden not your hearts, as in the
          provocation.
        </h1>
        <p className="text-xl font-bold">Hebrews 3:15</p>
      </div>

      <div className="pt-28 pb-16 px-4 md:px-20 md:px-64 bg-neutral-100">
        <h2 className="text-center">WHAT MATTERS TO US</h2>

        <div className="bg-white">
          <p className="p-7 mt-12 md:p-20 md:mt-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            tristique lacus. Nullam elementum tincidunt sapien, ut ultricies
            odio. Suspendisse sagittis mattis odio, varius pulvinar justo
            dignissim quis. Integer gravida vehicula nunc sit amet aliquet.
            Aenean at ipsum laoreet, convallis magna nec, imperdiet augue.
            Aliquam blandit tristique odio, a malesuada quam. Ut ac purus ac
            lacus vulputate porta. Phasellus eget luctus lectus. Vivamus dapibus
            pretium purus ac fermentum. Vestibulum purus ligula, fermentum in
            porta at, sollicitudin in purus. Ut orci magna, rhoncus id semper a,
            convallis sed erat. Sed sagittis, tellus nec volutpat consectetur,
            quam ipsum commodo erat, non finibus magna nulla quis ligula. Nulla
            euismod eget nulla a vehicula. Sed vel semper velit
          </p>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
