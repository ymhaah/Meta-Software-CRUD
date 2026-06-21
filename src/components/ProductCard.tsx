import type { ProductT } from "../types/product";

import Image from "./ui/Image";
import RatingStars from "./ui/RatingStars";
import ProductTag from "./ui/ProductTag";

// export type ProductT = {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
// image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// };

function ProductCard({ product }: { product: ProductT }) {
    const { title, price, description, category, image, rating } = product;

    function shortenText(text: string, maxLength = 50): string {
        if (text.length <= maxLength) return text;

        return text.slice(0, maxLength).trimEnd() + "...";
    }

    return (
        <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white p-5 shadow-sm">
            <div className="bg-(--bg-clr) mb-5 flex aspect-video h-72 items-center justify-center rounded-xl">
                <Image
                    src={image}
                    alt={title}
                    className="max-h-[75%] max-w-[75%] -rotate-6"
                />
            </div>
            <div className="">
                <div className="mb-7 flex flex-col gap-2">
                    <h2 className="text-lg font-semibold" title={title}>
                        {shortenText(title, 20)}
                    </h2>
                    <p className="text-base text-gray-500">
                        {shortenText(description)}
                    </p>
                </div>
                <div className="mb-2 flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <p className="text-xs font-semibold tracking-wide text-slate-400">
                            PRICE
                        </p>
                        <p className="text-lg font-bold">{price}$</p>
                    </div>
                    <ProductTag content={category} />
                </div>

                <RatingStars rating={rating.rate} reviewCount={rating.count} />
            </div>
        </div>
    );
}

export default ProductCard;

// TODO: make category button on card can categorize
