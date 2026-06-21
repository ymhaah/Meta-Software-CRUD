type BasePropsT = {
    children: React.ReactNode;
    isDisabled?: boolean;
    iconOnlyAlt?: string;
    handleClick?: (event: React.MouseEvent) => void;
};

type ButtonPropsT = BasePropsT & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component.
 * @param {ButtonPropsT} props - Component props.
 *    - isDisabled: Indicates whether the button is disabled. Default is false.
 *    - iconOnlyAlt: Alternative text for the button icon, used for accessibility when only an icon is displayed.
 * @returns {ReactNode} - Rendered button component.
 */
function Button({
    children,
    isDisabled = false,
    iconOnlyAlt,
    handleClick,
    ...nativeAttributes
}: ButtonPropsT) {
    return (
        <button
            type={nativeAttributes.type || "button"}
            aria-label={iconOnlyAlt}
            disabled={isDisabled}
            onClick={handleClick}
            {...nativeAttributes}
            className={`Button focus ${isDisabled ? "disabled" : ""} ${iconOnlyAlt ? "icon-only" : ""} ${nativeAttributes.className || ""}`}
        >
            {children}
        </button>
    );
}

export default Button;
