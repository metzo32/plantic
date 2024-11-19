import GardenList from "./GardenList";
import CategoryButtons from "./CategoryButtons";

export default function Content() {
  return (
    <div>
      <h1 className="title mt-[6.5rem]">Plantic</h1>

      <hr className="sub-line" />
      <CategoryButtons />

      <div className="flex w-full justify-center">
        <GardenList />
      </div>
    </div>
  );
}
