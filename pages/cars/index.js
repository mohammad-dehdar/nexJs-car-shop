import Card from "@/components/module/Card"
import Category from "@/components/module/category"
import SearchBox from "@/components/module/searchBox"
import CarsPage from "@/components/templates/carsPage"
import carsData from "@/data/carsData"



function Details() {
  return (
    <div>
      <SearchBox data={carsData}/>
      <Category />
      <CarsPage data={carsData} />
    </div>
  )
}

export default Details