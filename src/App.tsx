import useFetch from "./hooks/useFetch";
import useProductSearch from "./hooks/useProductSearch";

import type { ProductT } from "./types/product";

import LoadingSpinner from "./components/ui/LoadingSpinner";
import ErrorState from "./components/ui/ErrorState";
import ProductsSearch from "./components/ui/ProductsSearch";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import "./App.css";
import "./index.scss";

function App() {
    const { data, error, isLoading } = useFetch<ProductT[]>(
        "https://fakestoreapi.com/products"
    );
    const { query, setQuery, filteredData, isData } = useProductSearch(data);

    return (
        <main className="Container">
            <h1 className="h1">Meta Software</h1>
            <div>
                <ProductsSearch query={query} setQuery={setQuery} />
            </div>
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

// TODO: make category filter
// TODO: header
