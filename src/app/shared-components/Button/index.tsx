"use client";
interface ButtonProps {
    buttonText: string, variant: string, onClickHandler: () => void
}

const Button = ({ buttonText, variant, onClickHandler }: ButtonProps) => {
    const variantSwitch = (variant: string) => {
        switch (variant) {
            case "primary":
                return "bg-green-500 text-white"
            case "secondary":
                return "bg-red text-white border-1 border-brown"
            default:
                return "bg-green-500 text-white"
        }
    };
    const variantClass = variantSwitch(variant);
    return (
        <button className={`${variantClass} px-[16px] py-[12py] border-none rounded-sm cursor-pointer`}
            onClick={onClickHandler}>
            {buttonText}

        </button>
    );
};

export default Button;