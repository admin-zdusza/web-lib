export const fetchWithTimeout = (uri: string, options = {}, ms: 20000) => {
    const controller = new AbortController();
    const config = {...options, signal: controller.signal};

    setTimeout(() => {
        controller.abort()
    }, ms);

    return fetch(uri, config);
};
