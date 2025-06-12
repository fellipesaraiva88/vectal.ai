import * as React from "react"
// If you don't want to use "class-variance-authority", you can replace it with a simple variant utility.
// Here is a minimal replacement for your use case:

type AlertVariant = "default" | "destructive"

type VariantProps<T> = T extends { variants: infer V }
  ? { [K in keyof V]?: keyof V[K] }
  : never

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: AlertVariant }
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
// Minimal cva implementation for this use case
function cva(
  base: string,
  options: {
    variants: { variant: { default: string; destructive: string } };
    defaultVariants: { variant: string };
  }
) {
  return ({ variant }: { variant?: AlertVariant } = {}) => {
    const v = (variant || options.defaultVariants.variant) as AlertVariant;
    const variantClass = options.variants.variant[v] || "";
    return [base, variantClass].filter(Boolean).join(" ");
  };
}

