import GardenList from "../components/GardenList";

export default function Home() {
  return (
    <div>
      <h1 className="title border-y border-custom700 mt-20 py-1 md:py-3">Plantic</h1>

      <div className="flex flex-col w-full justify-center">
        <GardenList />
      </div>
    </div>
  );
}
