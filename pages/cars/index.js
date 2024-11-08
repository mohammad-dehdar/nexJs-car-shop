import Category from "@/components/module/category"
import CarsPage from "@/components/templates/carsPage"
import carsData from "@/data/carsData"



function Details() {
  return (
    <div>
      <Category />
      <CarsPage data={carsData} />
    </div>
  )
}

export default Details