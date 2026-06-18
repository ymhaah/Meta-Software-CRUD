// import { useState } from "react";
import useFetch from "./hooks/useFetch";

import type { ProductT } from "./types/product";

import ProductCard from "./components/ProductCard";

import "./App.css";
import "./index.scss";

function App() {
    const { data, error, isLoading } = useFetch<ProductT[]>(
        "https://fakestoreapi.com/products"
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className="Container">
            <h1>My App</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                {data?.map((item) => (
                    <div key={item.id}>
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default App;
