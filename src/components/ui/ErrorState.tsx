import { AlertTriangle } from "lucide-react";

type ErrorStateProps = {
    title?: string;
    description?: string;
};

export default function ErrorState({
    title = "Something went wrong",
    description = "An unexpected error occurred. Please refresh the page and try again.",
}: ErrorStateProps) {
    return (
        <div className="flex w-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-red-200 bg-red-50 p-8 text-center">
                <div className="rounded-full bg-red-100 p-4">
                    <AlertTriangle className="size-10 text-red-600" />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h2>

                    <p className="mt-1 max-w-sm text-sm text-gray-600">
                        {description}
                    </p>
                </div>

                <button
                    onClick={() => window.location.reload()}
                    className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
}
