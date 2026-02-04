export type SearchOption = {
    id: string | number;
    title: string;
    href?: string;
    imagePath?: string | null;
    type?: "view_all" | "no_results";
}