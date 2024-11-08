

function SearchBox({ ...props }) {
    const prices = carsData.map(car => car.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    const [value, setValue] = React.useState([minPrice, maxPrice])

    return (
        <div className="w-full max-w-sm p-8 bg-gray-100 rounded-2xl shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]" {...props}>
            <div className="mb-6 text-center text-gray-700 font-semibold">
                محدوده قیمت (تومان)
            </div>
            <SliderPrimitive.Root
                className="relative flex w-full touch-none select-none items-center"
                value={value}
                onValueChange={setValue}
                max={maxPrice}
                min={minPrice}
                step={100}
            >
                <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300 shadow-[inset_2px_2px_4px_#d1d1d1,inset_-2px_-2px_4px_#ffffff]">
                    <SliderPrimitive.Range className="absolute h-full bg-blue-500 shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff]" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-blue-500 bg-gray-100 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" />
                <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-blue-500 bg-gray-100 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" />
            </SliderPrimitive.Root>
            <div className="flex justify-between mt-6 text-sm text-gray-600">
                <span>{formatPrice(value[0])} تومان</span>
                <span>{formatPrice(value[1])} تومان</span>
            </div>
        </div>
    )
}

export default SearchBox