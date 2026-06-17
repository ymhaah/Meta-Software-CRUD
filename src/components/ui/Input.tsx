import { ReactNode } from "react";

type InputPropsT = {
    label: string;
    placeholder: string;
    type: string;
    required: boolean;
    error?: boolean;
    success?: boolean;
    isDisabled?: boolean;
};

/**
 * Input component.
 * Renders a Input field.
 * @param {InputPropsT} props - Component props.
 *    - isDisabled: Indicates whether the button is disabled. Default is false.
 *    - iconOnlyAlt: Alternative text for the button icon, used for accessibility when only an icon is displayed.
 *    - as: The element type to render. Can be either 'button' or 'a' (anchor). Defaults to 'button'.
 * @returns {ReactNode} - Rendered button component.
 */
function Input({
    label,
    placeholder,
    type,
    required,
    error,
    success,
    isDisabled = false,
    ...nativeAttributes
}: InputPropsT): ReactNode {
    return (
        <div className="Input flex w-full max-w-sm flex-col gap-1.5">
            <label
                htmlFor={label}
                className={`form-label small relative ml-1 w-fit ${required ? "required" : ""}`}
            >
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`form-input focus ${isDisabled ? "disabled" : ""}`}
                id={label}
                required={required}
                {...nativeAttributes}
            />
        </div>
    );
}

export default Input;
