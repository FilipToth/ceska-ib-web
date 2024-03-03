const redirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

export { redirect };