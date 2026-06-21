import { Search } from "lucide-react";

type Props = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function ProductsSearch({ query, setQuery }: Props) {
    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="rounded-4xl w-full border border-gray-500 py-2 pl-10 pr-3"
                />
            </div>
        </div>
    );
}
