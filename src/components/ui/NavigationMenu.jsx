import React from "react";

const NavigationMenu = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={`
      flex items-center space-x-1
      ${className}
    `}
    {...props}
  />
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <ul
    ref={ref}
    className={`
      flex items-center space-x-4
      ${className}
    `}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={`
      flex items-center
      ${className}
    `}
    {...props}
  />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuLink = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <a
    ref={ref}
    className={`
      text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors
      ${className}
    `}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };