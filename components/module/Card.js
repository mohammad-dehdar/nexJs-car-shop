import { Calendar, GitFork, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Card(props) {
    const { id, name, model, year, distance, location, image, price } = props;

    return (
        <Link href={`/cars/${id}`}>
            <div className="w-[290px] max-w-sm overflow-hidden border rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-slate-200">
                <div className="relative h-48 w-full">
                    <Image
                        src={image}
                        alt={`${name} ${model}`}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 290px"
                    />
                </div>
                <div className="p-4 space-y-2">
                    <h2 className="text-2xl font-bold">{name} {model}</h2>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                        <span className="text-sm text-gray-600">{year}</span>
                    </div>
                    <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-2 text-gray-600" />
                        <span className="text-sm text-gray-600">{distance} km</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                        <span className="text-sm text-gray-600">{location}</span>
                    </div>
                </div>
                <div className="p-4 bg-gray-900 transition-colors duration-300 hover:bg-slate-500">
                    <div className="text-xl font-bold text-white">{price} $</div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
