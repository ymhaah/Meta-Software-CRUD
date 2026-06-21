import { useState } from "react";

import useFetch from "./hooks/useFetch";
import useProductSearch from "./hooks/useProductSearch";

import LoadingSpinner from "./components/ui/LoadingSpinner";
import ErrorState from "./components/ui/ErrorState";
import ProductsSearch from "./components/ui/ProductsSearch";
import CategoryFilter from "./components/ui/CategoryFilter";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import type { ProductT } from "./types/product";
import type { categoryT } from "./types/category";

import "./tailwind.css";
import "./index.scss";

function App() {
    const { data, error, isLoading } = useFetch<ProductT[]>(
        "https://fakestoreapi.com/products"
    );

    const [selectedCategories, setSelectedCategories] = useState<categoryT[]>(
        []
    );
    const [searchQuery, setSearchQuery] = useState("");

    const { filteredData, isData } = useProductSearch(
        data,
        selectedCategories,
        searchQuery
    );

    return (
        <main className="Container mt-4">
            <header>
                <ProductsSearch query={searchQuery} setQuery={setSearchQuery} />
                <CategoryFilter
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                />
            </header>
            <div className="my-16 grid min-h-[80vh] grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-6">
                {isLoading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorState />
                ) : isData ? (
                    filteredData.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                ) : (
                    <div className="flex w-screen items-center justify-center">
                        <p className="text-center text-gray-500">
                            No products found.
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}

export default App;
