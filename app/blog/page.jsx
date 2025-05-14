import Subscribe from "@/components/Subscribe";
import Dropdown from "@/components/Dropdown";

export default function Blog(props) {
  return (
    <>
      <div className="px-6 pt-20 pb-9 md:p-12">
        <h4 className="hidden md:block text-center md:px-20 md:py-6">
          How beautiful upon the mountains are the feet of him that bringeth
          good tidings, that publisheth peace; that bringeth good tidings of
          good, that publisheth salvation; that saith unto Zion, Thy God
          reigneth!
        </h4>
        <p className="hidden md:block md:text-center text-xl font-bold">
          Isaiah 52:7
        </p>
      </div>

      <div className="bg-neutral-100 px-5 py-12 md:p-20">
        <div className="flex flex-col items-center md:flex-row md:justify-around items-start">
          <div className="p-6 md:hidden">
            <Dropdown name="Explore More Posts" />
          </div>
          <div className="md:w-8/12 flex-initial"></div>
          <div className="hidden md:block w-3/12 flex-initial bg-neutral-300 rounded-lg"></div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}
