function LoadingSpinner({ className = "" }) {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div
                role="status"
                aria-label="Loading"
                className={`inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent ${className}`}
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingSpinner;
