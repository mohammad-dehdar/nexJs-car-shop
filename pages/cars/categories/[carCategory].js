import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import { ArrowLeft } from "lucide-react";
import Category from "@/components/module/category";
import CarsPage from "@/components/templates/CarsPage";


function CarCategory() {
    const router = useRouter()
    const { carCategory } = router.query
    const filteredCars = carCategory 
    ? carsData.filter((cars) => cars.category === carCategory.toLowerCase())
    : [];

    return (
        <div>
            <Category />

            <button
                variant="outline"
                className="mb-4 flex items-center "
                onClick={() => router.push('/cars')}
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All
            </button>
            <CarsPage data={filteredCars} />
        </div>
    )
}

export default CarCategory;