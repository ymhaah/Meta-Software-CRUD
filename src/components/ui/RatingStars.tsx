import { Star, StarHalf } from "lucide-react";

type RatingProps = {
    rating: number;
    reviewCount: number;
    size?: number;
};

function RatingStars({ rating, reviewCount, size = 20 }: RatingProps) {
    const roundedRating = Math.round(rating * 2) / 2;

    return (
        <div
            className="flex items-center gap-2"
            title={`rating ${rating} out of 5 stars`}
        >
            <div className="flex w-fit select-none items-center gap-3">
                <div
                    className="flex items-center gap-0.5"
                    aria-label={`rating ${rating} out of 5`}
                >
                    {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;

                        if (starValue <= roundedRating) {
                            return (
                                <Star
                                    key={index}
                                    size={size}
                                    className="h-5 w-5 fill-amber-400 text-amber-400"
                                />
                            );
                        }

                        if (starValue - roundedRating === 0.5) {
                            return (
                                <div key={index} className="relative h-5 w-5">
                                    <Star
                                        size={size}
                                        className="absolute left-0 top-0 h-5 w-5 text-slate-300"
                                    />
                                    <StarHalf
                                        size={size}
                                        className="absolute left-0 top-0 h-5 w-5 fill-amber-400 text-amber-400"
                                    />
                                </div>
                            );
                        }
                        return (
                            <Star
                                key={index}
                                size={size}
                                className="h-5 w-5 text-slate-300"
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-400">
                    {rating.toFixed(1)}
                </span>

                <span className="text-xs font-medium text-slate-400">
                    ({reviewCount} review{reviewCount !== 1 ? "s" : ""})
                </span>
            </div>
        </div>
    );
}

export default RatingStars;
