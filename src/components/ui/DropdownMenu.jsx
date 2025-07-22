import React from "react";

const DropdownMenu = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={`
      relative
      ${className}
    `}
    {...props}
  />
));
DropdownMenu.displayName = "DropdownMenu";

const DropdownMenuTrigger = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <button
    ref={ref}
    className={`
      inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      ${className}
    `}
    {...props}
  />
));
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuContent = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={`
      bg-white border border-gray-200 rounded-md shadow-lg p-2 mt-2 w-48 z-50
      ${className}
    `}
    {...props}
  />
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={`
      px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer
      ${className}
    `}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };