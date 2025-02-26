interface SubHeaderTextProps {
    placeholder: string;
    className?:string;
}

export default function SubHeaderText({ placeholder, className }: SubHeaderTextProps) {
    return (
        <>
            <h2 className={`font-medium text-black text-md md:text-md lg:text-sm xl:text-base 2xl:text-xl text-left md:text-left lg:text-left xl:text-left 2xl:text-left font-montserrat ${className}`}>
                {placeholder}
            </h2>
        </>
    )
}