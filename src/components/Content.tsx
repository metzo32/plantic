import GardenList from "./GardenList";
import CategoryButtons from "./CategoryButtons";

export default function Content() {
  return (
    <div>
      <h1 className="title mt-[6.5rem]">Plantic</h1>

      <hr className="sub-line" />
      <CategoryButtons />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-between mt-11">
        <GardenList />
      </div>
    </div>
  );
}
