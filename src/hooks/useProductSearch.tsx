import { useMemo } from "react";

import type { ProductT } from "../types/product";
import type { categoryT } from "../types/category";

function useProductSearch(
    data: ProductT[] | undefined,
    selectedCategories: categoryT[],
    searchQuery = ""
) {
    const normalizedQuery = searchQuery.toLowerCase().trim();

    const filteredData = useMemo(() => {
        if (!data) return [];

        return data.filter((product) => {
            // ? Category Filter
            const categoryMatch =
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category as categoryT);

            // ? Search Filter
            const searchMatch =
                !normalizedQuery ||
                product.title.toLowerCase().includes(normalizedQuery) ||
                product.price.toString().includes(normalizedQuery) ||
                product.rating.rate.toString().includes(normalizedQuery);

            return categoryMatch && searchMatch;
        });
    }, [data, normalizedQuery, selectedCategories]);

    return {
        filteredData,
        isData: filteredData.length > 0,
    };
}

export default useProductSearch;
