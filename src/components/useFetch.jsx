import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // prevent setting state if component unmounts

        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                if (isMounted) setData(json);
            })
            .catch((err) => {
                if (isMounted) setError(err.message);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false; // cleanup flag
        };
    }, [url]);

    return { data, loading, error };
}
