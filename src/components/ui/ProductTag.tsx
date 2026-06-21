import Button from "./Button";

interface ProductTagProps {
    content: string;
    onClick?: () => void;
}

function ProductTag({ content }: ProductTagProps) {
    return (
        <Button className="bg-(--bg-clr) text-sm text-gray-500">
            {content}
        </Button>
    );
}

export default ProductTag;
