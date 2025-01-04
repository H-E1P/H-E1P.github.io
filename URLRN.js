function Normalization(hash) {
    return (x) => btoa(hash(x));
}

async function URLRGet(hash) {
    return async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        return text;
    };
}

function URLRNormalization(hash) {
    const f = Normalization(hash);
    return async (url) => {
        const g = await URLRGet(hash);
        const data = await g(url);
        return f(data);
    };
}

export { URLRNormalization };