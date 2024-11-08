import Category from "@/components/module/category"
import SearchBox from "@/components/module/searchBox"
import CarsPage from "@/components/templates/carsPage"
import carsData from "@/data/carsData"
import { useRouter } from "next/router"

function Home() {
  const router = useRouter();
  const car = carsData.slice(0,3);
  return (
    <div>
      <SearchBox carsData={carsData} />
      <Category />
      <button className="bg-slate-900 hover:bg-slate-600 transition-all ease-out text-white font-semibold p-2 w-full my-4 rounded-md" onClick={() => router.push("/cars")}>See All Car</button>
      <CarsPage data={car} />
    </div>
  );
}

export default Home;
