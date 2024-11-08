import * as SliderPrimitive from '@radix-ui/react-slider';
import { useRouter } from 'next/router';
import { useState } from 'react';

function SearchBox({ carsData }) {
    const router = useRouter();
    const prices = carsData.map(car => car.price);
    const [value, setValue] = useState([
        Math.min(...prices), 
        Math.max(...prices)
    ]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    };

    const filterHandler = () => {
        const [minPrice, maxPrice] = value; 
        router.push(`/cars/filter/${minPrice}/${maxPrice}`);
    };

    return (
        <div className="w-full h-auto flex flex-col justify-between gap-4 max-w-sm px-4 py-4 bg-gray-900 rounded-2xl border mx-auto">
            <SliderPrimitive.Root
                className="relative flex w-full touch-none select-none items-center"
                value={value}
                onValueChange={setValue}
                max={Math.max(...prices)}
                min={Math.min(...prices)}
                step={100}
            >
                <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300">
                    <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-blue-500 bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" />
                <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-blue-500 bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" />
            </SliderPrimitive.Root>
            <div className="flex justify-between text-sm text-gray-300">
                <span>{formatPrice(value[0])}</span>
                <span>{formatPrice(value[1])}</span>
            </div>
            <button className="bg-white p-2 rounded-md hover:bg-slate-200 transition-all ease-out font-semibold" onClick={filterHandler}> Search By Price  </button>
        </div>
    );
}

export default SearchBox;
