import ProductTag from "./ProductTag";

import type { categoryT } from "../../types/category";

const categories: categoryT[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
];

function CategoryFilter({
    selectedCategories,
    setSelectedCategories,
}: {
    selectedCategories: categoryT[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<categoryT[]>>;
}) {
    function toggleCategory(category: categoryT) {
        if (selectedCategories.includes(category)) {
            setSelectedCategories((prev) => prev.filter((c) => c !== category));
        } else {
            setSelectedCategories((prev) => [...prev, category]);
        }
    }

    return (
        <div className="my-4 flex flex-wrap gap-2">
            {categories.map((category) => {
                const selected = selectedCategories.includes(category);

                return (
                    <ProductTag
                        key={category}
                        content={category}
                        onSelect={() => toggleCategory(category)}
                        className={` ${
                            selected
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-600"
                        } `}
                    />
                );
            })}
        </div>
    );
}

export default CategoryFilter;
