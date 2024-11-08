import Link from "next/link"

const carsCategory = [
    { id: 1, name: 'Sedan' },
    { id: 2, name: 'Suv' },
    { id: 3, name: 'Hatchback' },
    { id: 4, name: 'Sport' }
]

function Category({ data }) {
    console.log(data);

    return (
        <div className="flex justify-center mt-4 mb-8 gap-4">
            {carsCategory.map((category) =>
                <Link href={`/cars/categories/${category.name.toLowerCase()}`} key={category.id} className="bg-gray-900 p-2 w-24 rounded-xl text-white text-center hover:bg-slate-500 transition-all ease-out">{category.name}</Link>
            )}
        </div>
    )
}

export default Category