export const generateBreadcrumb = (path: string) => {
    const segments = path?.split("/").filter(Boolean);

    return segments?.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        return { segment, href }
    })
}