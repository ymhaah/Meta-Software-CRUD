import type { ProductT } from "../types/product";

import Image from "./ui/Image";

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
                <div className="mb-5 flex flex-col gap-2">
                    <h2 className="text-lg font-semibold" title={title}>
                        {shortenText(title, 24)}
                    </h2>
                    <p className="text-base text-gray-500">
                        {shortenText(description)}
                    </p>

                    <div className="mb-4 flex gap-2">
                        <span className="rounded-md border border-gray-300 px-3 py-1 text-xs font-semibold tracking-wide text-gray-600">
                            {category}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="mb-1 text-xs font-semibold tracking-wide text-gray-400">
                            PRICE
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                            ${price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

// TODO: fix card height
// TODO: category + make it a badge + make it can categorize
// TODO: price + rating
// TODO: fix image size + make it responsive
