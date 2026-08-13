'use client';
import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  containerClass?: string;
  required?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
        <textarea
          className={`w-full px-4 py-3 rounded-xl border ${
            error ? "border-red-500" : "border-gray-200"
          } focus:outline-none f focus:border-primary focus:outline-transparent resize-none transition-all duration-200 ${
            className || ""
          }`}
          ref={ref}
          aria-required={required}
          aria-invalid={!!error}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;