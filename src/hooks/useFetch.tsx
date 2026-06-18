import { useEffect, useState } from "react";

type UseFetchT<T> = {
    data: T | null;
    error: string | null;
    isLoading: boolean;
};

type FetchOptions = RequestInit;

function useFetch<T>(url: string, options?: FetchOptions) {
    const [state, setState] = useState<UseFetchT<T>>({
        data: null,
        error: null,
        isLoading: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            setState((prev) => ({
                ...prev,
                isLoading: true,
                error: null,
            }));

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data: T = await response.json();

                setState({
                    data,
                    error: null,
                    isLoading: false,
                });
            } catch (error) {
                setState({
                    data: null,
                    error:
                        error instanceof Error
                            ? error.message
                            : "Something went wrong",
                    isLoading: false,
                });
            }
        };

        fetchData();
    }, [url, options]);

    return {
        ...state,
    };
}

export default useFetch;
