interface SubHeaderTextProps {
    placeholder: string;
    className?:string;
}

export default function SubHeaderText({ placeholder, className }: SubHeaderTextProps) {
    return (
        <>
            <h2 className={`font-medium text-black text-md md:text-md lg:text-sm xl:text-base 2xl:text-xl text-center md:text-center lg:text-center xl:text-center 2xl:text-center font-montserrat ${className}`}>
                {placeholder}
            </h2>
        </>
    )
}