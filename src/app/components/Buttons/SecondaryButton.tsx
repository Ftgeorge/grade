import { SecondaryButtonProps } from '../../../data/list';
import React from 'react';

export default function SecondaryButton({ placeholder, primary, children }: SecondaryButtonProps) {
    return (
        <button
            type="button"
            className={
                primary
                    ? `font-montserrat text-white bg-primary hover:bg-primary font-medium rounded-full text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-8 py-4 mb-2 flex flex-row gap-1`
                    : 'bg-white font-montserrat text-primary border border-primary font-medium rounded-full text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-8 py-4 text-center mb-2 flex flex-row gap-1'
            }
        >
            <h1 className="font-montserrat"> {placeholder} </h1>
            {children}
        </button>
    );
}
