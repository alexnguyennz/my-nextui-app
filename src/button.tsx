import { Button as NextUIButton } from "@nextui-org/button";
import { extendVariants } from "@nextui-org/system";

export const Button = extendVariants(NextUIButton, {
  defaultVariants: {
    radius: "full",
    disableRipple: "true",
    startContent: "startContentHere",
    endContent: <>endContentHere</>,
  },
});
