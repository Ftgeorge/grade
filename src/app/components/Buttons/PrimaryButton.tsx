
import { PrimaryButtonProps } from '@/data/list';
import React from 'react';

export default function PrimaryButton({ placeholder, primary }: PrimaryButtonProps) {
    return (
        <button
            type="button"
            className={
                primary
                    ? `font-montserrat focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-3 mb-2`
                    : 'font-montserrat text-primary hover:text-white border border-primary hover:bg-primary-20 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-2'
            }
        >
            <h1 className="font-montserrat"> {placeholder} </h1>
        </button>
    );
}
