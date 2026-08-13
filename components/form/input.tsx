import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  containerClass?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, containerClass, required, ...props }, ref) => {
    return (
      <div className={`w-full ${containerClass || ""}`}>
        <div className="w-full flex items-center justify-between mb-1">
          {label && (
            <label className=" text-xs block font-bold text-secondary uppercase tracking-wider">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
        <input
          className={`w-full px-4 py-3  rounded-xl border text-secondary ${
            error ? "border-red-500" : "border-gray-200"
          } focus:outline-none  focus:border-primary  ${
            className || ""
          }`}
          ref={ref}
          aria-required={required}
          aria-invalid={!!error}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
