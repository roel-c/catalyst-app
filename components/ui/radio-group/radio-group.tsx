import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva } from 'class-variance-authority';
import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react';

import { cn } from '~/lib/utils';

type RadioIndicatorType = typeof RadioGroupPrimitive.Indicator;

const radioGroupVariants = cva(
  'flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200 hover:border-secondary focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 focus:hover:border-secondary radix-state-checked:border-primary radix-state-checked:bg-primary radix-state-checked:hover:border-secondary radix-state-checked:hover:bg-secondary disabled:pointer-events-none disabled:bg-gray-100 radix-state-checked:disabled:border-gray-400 radix-state-checked:disabled:bg-gray-400',
  {
    variants: {
      variant: {
        error:
          'border-error-secondary focus:border-error-secondary focus:ring-error-secondary/20 hover:border-error focus:hover:border-error disabled:border-gray-200 radix-state-checked:border-error-secondary radix-state-checked:bg-error-secondary radix-state-checked:hover:border-error radix-state-checked:hover:bg-error',
      },
    },
  },
);

const RadioIndicator = forwardRef<
  ElementRef<RadioIndicatorType>,
  ComponentPropsWithRef<RadioIndicatorType>
>(({ children, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      className={cn('h-2 w-2 rounded-full bg-white', className)}
      {...props}
      ref={ref}
    >
      {children}
    </RadioGroupPrimitive.Indicator>
  );
});

RadioIndicator.displayName = 'RadioIndicator';

type RadioItemType = typeof RadioGroupPrimitive.Item;

export interface RadioItemProps extends ComponentPropsWithRef<RadioItemType> {
  variant?: 'error';
}

const RadioItem = forwardRef<ElementRef<RadioItemType>, RadioItemProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        className={radioGroupVariants({ variant, className })}
        ref={ref}
        {...props}
      >
        {children || <RadioIndicator />}
      </RadioGroupPrimitive.Item>
    );
  },
);

RadioItem.displayName = 'RadioItem';

type RadioGroupType = typeof RadioGroupPrimitive.Root;

const RadioGroup = forwardRef<ElementRef<RadioGroupType>, ComponentPropsWithRef<RadioGroupType>>(
  ({ children, className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root className={cn(className)} ref={ref} {...props}>
        {children}
      </RadioGroupPrimitive.Root>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup, RadioItem, RadioIndicator };
