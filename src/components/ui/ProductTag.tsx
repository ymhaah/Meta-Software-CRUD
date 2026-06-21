import Button from "./Button";

interface ProductTagProps {
    content: string;
    onSelect?: (event: React.MouseEvent) => void;
    className?: string;
}

function ProductTag({ content, onSelect, className }: ProductTagProps) {
    return (
        <Button
            handleClick={onSelect}
            className={`bg-(--bg-clr) text-sm text-gray-500 ${className}`}
        >
            {content}
        </Button>
    );
}

export default ProductTag;
