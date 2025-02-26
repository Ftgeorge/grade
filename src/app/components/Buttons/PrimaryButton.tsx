import { PrimaryButtonProps } from '../../../data/list';
import React from 'react';

export default function PrimaryButton({ placeholder, primary, className }: PrimaryButtonProps) {
    return (
        <button
            type="button"
            className={`font-montserrat ${primary ? 'bg-primary text-white' : 'bg-white text-primary'} ${className}`}
        >
            {placeholder}
        </button>
    );
}
