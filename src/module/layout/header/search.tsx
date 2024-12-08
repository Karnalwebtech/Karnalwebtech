"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react';
import { useGetFilterAllCategorieQuery } from '@/state/categorieApi';
import Link from 'next/link';

interface Page {
    title: string;
    slug: string;
}


const Search_section = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const { data, } = useGetFilterAllCategorieQuery();
    const [filteredPages, setFilteredPages] = useState<Page[]>([]);

    const allpages = [
        {
            title: "Home",
            slug: "/"
        },
        {
            title: "Projects",
            slug: "projects"
        },
        {
            title: "blog",
            slug: "blog"
        },
        {
            title: "about",
            slug: "about"
        },
        {
            title: "Contact us",
            slug: "contact-us"
        },
        {
            title: "Privacy-policy",
            slug: "privacy policy"
        },
        {
            title: "FAQ",
            slug: "faq"
        },
        {
            title: "Terms & conditions",
            slug: "terms-conditions"
        }, ...(data || [])
    ]

    useEffect(() => {
        const filtered = allpages.filter((page) =>
            (page.title || '')?.toLowerCase().includes((searchQuery || '')?.toLowerCase())
        );
        setFilteredPages(filtered);
    }, [searchQuery, data]);
    return (
        <div className='relative'>
            <div
            >
                <Input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery} // Bind searchQuery state to input
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input
                    className="w-full sm:w-[300px] pl-8"
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>

            {searchQuery.trim().length > 0 &&
                <div className='absolute shadow-md bg-gray-50 w-full mt-2 rounded-md'>

                    <div className='p-2 h-[100px] min-h-[200px] overflow-y-scroll'>
                        {
                            filteredPages.length > 0 ?
                                filteredPages.map((item: any, i: number) => (
                                    <Link key={i} href={`/${item.slug}`} className='block w-full bg-gray-200 rounded-sm px-[6px] text-sm text-black hover:bg-black hover:text-gray-300 cursor-pointer py-[4px] my-[2px]'>{item.title}</Link>
                                ))
                                : <p className='p-2'>No results found.</p>}
                    </div>
                </div>}
        </div>
    )
}

export default Search_section