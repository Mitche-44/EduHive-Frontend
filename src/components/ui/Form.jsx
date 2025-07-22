import React from "react";
import { useForm } from "react-hook-form";

const Form = ({
  onSubmit,
  children,
  ...props
}) => {
  const form = useForm({
    ...props,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { form });
        }
        return child;
      })}
    </form>
  );
};

const FormField = ({ form, name, children }) => {
  return <>{children}</>;
};

const FormItem = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

const FormLabel = ({ children }) => {
  return <label className="text-sm font-medium text-gray-700">{children}</label>;
};

const FormControl = ({ children }) => {
  return <div>{children}</div>;
};

const FormMessage = ({ children }) => {
  return <p className="text-sm text-red-600">{children}</p>;
};

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };