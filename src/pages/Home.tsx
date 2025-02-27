
import GardenList from "../components/GardenList";
import CategoryButtons from "../components/CategoryButtons";

export default function Home() {
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