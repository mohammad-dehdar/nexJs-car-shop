import Card from "../module/Card"

function CarsPage({ data }) {
    return (
        <div className="flex flex-wrap justify-between gap-y-4 max-sm:justify-center">
            {data.map((car) => <Card key={car.id} {...car} />)}
        </div>
    )
}

export default CarsPage