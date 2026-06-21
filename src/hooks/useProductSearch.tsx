import { useMemo, useState } from "react";

import type { ProductT } from "../types/product";

function useProductSearch(data: ProductT[] | undefined) {
    const [query, setQuery] = useState("");

    const normalizedQuery = query.toLowerCase().trim();

    const filteredData = useMemo(() => {
        if (!data) return [];

        if (!normalizedQuery) return data;

        return data.filter((product) => {
            const titleMatch = product.title
                .toLowerCase()
                .includes(normalizedQuery);

            const priceMatch = product.price
                .toString()
                .includes(normalizedQuery);

            const ratingMatch = product.rating.rate
                .toString()
                .includes(normalizedQuery);

            return titleMatch || priceMatch || ratingMatch;
        });
    }, [data, normalizedQuery]);

    return {
        query,
        setQuery,
        filteredData,
        isData: filteredData.length > 0,
    };
}
export default useProductSearch;
