import { useRouter } from "next/router"
import Image from "next/image"
import { ArrowLeft, Calendar, GitFork, MapPin } from "lucide-react"
import carsData from "@/data/carsData"

function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[Number(carId) - 1];

  if (!carDetail) {
    return <div className="text-center p-8">Loading...</div>;
  }

  const { name, model, year, distance, location, image, price } = carDetail;

  return (
    <div className="container mx-auto p-4">
      <button 
        variant="outline" 
        className="mb-4 flex items-center "
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
      </button>
      
      <div className="w-full max-w-4xl mx-auto">
        <div>
          <div className="text-3xl font-bold">{name} {model}</div>
        </div>
        <div className="space-y-4">
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=400&width=600"}
              alt={`${name} ${model}`}
              fill
              priority 
              objectFit="cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-lg">Year: {year}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-lg">Distance: {distance} km</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-lg">Location: {location}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-900 rounded-3xl p-2 w-fit text-white">
          <div className="text-2xl font-bold">{price} $</div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails