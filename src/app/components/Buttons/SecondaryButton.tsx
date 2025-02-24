
import { SecondaryButtonProps } from '@/data/list';
import React from 'react';

export default function SecondaryButton({ placeholder, primary, children }: SecondaryButtonProps) {
    return (
        <button
            type="button"
            className={
                primary
                    ? `font-montserrat focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5 py-2.5 mb-2 flex flex-row gap-1`
                    : 'bg-white font-montserrat text-primary hover:text-white border border-primary hover:bg-primary-20 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-8 md:px-8 lg:px-8 xl:px-10 2xl:px-10 py-3 text-center me-2 mb-2 flex flex-row gap-1'
            }
        >
            <h1 className="font-montserrat"> {placeholder} </h1>
            {children}
        </button>
    );
}
