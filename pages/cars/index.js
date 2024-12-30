import Category from "@/components/module/category"
import SearchBox from "@/components/module/searchBox"
import CarsPage from "@/components/templates/CarsPage"
import carsData from "@/data/carsData"



function Details() {
  return (
    <div>
      <SearchBox carsData={carsData}/>
      <Category />
      <CarsPage data={carsData} />
    </div>
  )
}

export default Details