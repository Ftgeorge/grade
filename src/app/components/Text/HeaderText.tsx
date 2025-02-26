interface HeaderTextProps {
    placeholder: string;
    className?: string;
}

export default function HeaderText({ placeholder, className }: HeaderTextProps) {
    return (
        <>
            <h2 className={`text-xl md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-center md:text-center lg:text-center xl:text-center 2xl:text-center text-black font-montserrat ${className}`}>
                {placeholder}
            </h2>
        </>
    )
}