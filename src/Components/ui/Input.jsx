import React from 'react';

const Input = ({
  label,
  error,
  helperText,
  required = false,
  className = '',
  ...props
}) => {
  const inputClasses = `
    w-full px-4 py-2 border rounded-lg transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 hover:border-gray-400'
    }
    ${className}
  `;

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        className={inputClasses}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
