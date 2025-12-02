import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center text-newBlack justify-center whitespace-nowrap text-sm font-bold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-newBlack focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-newGreen border-2 border-newBlack shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-lightGreen transition-colors',
        noShadow:
          'bg-newGreen border-2 border-newBlack hover:bg-lightGreen transition-colors',
        link: 'underline-offset-4 hover:underline text-gray-400 hover:text-lightGreen',
        neutral:
          'bg-newWhite border-2 border-newBlack hover:bg-gray-50 transition-colors',
        closeIcon:
          'bg-newWhite border-2 border-newBlack hover:bg-gray-50 transition-colors',
        outline:
          'border-2 border-newBlack bg-newWhite hover:bg-gray-50 transition-colors',
        yellow:
          'bg-yellow-500 rounded-xl hover:bg-yellow-300 transition-colors text-md ',
        connect:
          'bg-newGreen text-newBlack border-2 border-newBlack font-bold text-[20px] uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-lightGreen transition-colors rounded-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-fit py-1 px-2',
        lg: 'h-11 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
