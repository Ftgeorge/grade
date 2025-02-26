import { SecondaryButtonProps } from '../../../data/list';
import React from 'react';

export default function SecondaryButton({ placeholder, primary, children }: SecondaryButtonProps) {
    return (
        <button
            type="button"
            className={
                primary
                    ? `font-montserrat text-white bg-primary hover:bg-primary font-medium rounded-full text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-4 md:px-4 lg:px-4 xl:px-5 2xl:px-8 py-2.5 md:py-3 lg:py-2.5 xl:py-3 2xl:py-4 mb-2 flex flex-row gap-1`
                    : 'bg-white font-montserrat text-primary border border-primary font-medium rounded-full text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-4 md:px-4 lg:px-4 xl:px-5 2xl:px-8 py-2.5 md:py-3 lg:py-2.5 xl:py-3 2xl:py-4 text-center mb-2 flex flex-row gap-1'
            }
        >
            <h1 className="font-montserrat"> {placeholder} </h1>
            {children}
        </button>
    );
}
