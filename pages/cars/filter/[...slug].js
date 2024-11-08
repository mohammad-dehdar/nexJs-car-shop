import { useRouter } from "next/router"
import carsData from "@/data/carsData";
import Card from "@/components/module/Card";
import { ArrowLeft } from "lucide-react";
import SearchBox from "@/components/module/searchBox";

function FilteredCars() {
    const router = useRouter()
    const price = router.query.slug

    const filteredCars = price && Array.isArray(price) && price.length === 2
        ? carsData.filter(car => car.price >= price[0] && car.price <= price[1])
        : [];

    return (
        <div>
            <SearchBox carsData={carsData}/>
            <button
                variant="outline"
                className="mb-4 flex items-center "
                onClick={() => router.push("/cars")}
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All
            </button>
            <div className="flex flex-wrap justify-between gap-y-4 max-sm:justify-center">
                {filteredCars.map((car) => <Card key={car.id} {...car} />)}
            </div>
        </div>
    )
}

export default FilteredCars