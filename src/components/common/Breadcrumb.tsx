import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
interface BreadcrumbdataProps {
    categorie: {
        title?: string;
        slug?: string;
    } | null;
}
export function Breadcrumbdata({ categorie }: BreadcrumbdataProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href={'/'} prefetch={true}>
                        Home
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <Link href={`/${categorie?.slug}`} prefetch={true}>
                        {categorie?.title}
                    </Link>

                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
