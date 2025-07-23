import React from "react";

const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? "div" : "button";
  return (
    <Comp
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
        ${variant === "default" && "bg-blue-600 text-white hover:bg-blue-700"}
        ${variant === "outline" && "border border-gray-300 bg-transparent text-gray-600 hover:bg-gray-100"}
        ${variant === "ghost" && "bg-transparent text-gray-600 hover:bg-gray-100"}
        ${variant === "destructive" && "bg-red-600 text-white hover:bg-red-700"}
        ${size === "default" && "h-10 px-4 py-2"}
        ${size === "sm" && "h-8 px-3 text-xs"}
        ${size === "lg" && "h-12 px-6"}
        ${className}
      `}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button} 