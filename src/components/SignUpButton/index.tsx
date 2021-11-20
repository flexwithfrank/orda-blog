import { Button } from "../Button"
import { ButtonHTMLAttributes } from "react"

type SignUpButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: "light-blue" | "darker-blue" | "white" | "black"
  textColor?: "light-blue" | "darker-blue" | "white" | "black"
}

const SignUpButtonConfig = {
  textColor: {
    "light-blue": "text-light-blue",
    "darker-blue": "text-darker-blue",
    white: "text-white",
    black: "text-black",
  },
  bgColor: {
    "light-blue": "bg-light-blue",
    "darker-blue": "bg-darker-blue",
    white: "bg-white",
    black: "bg-black",
  },
}

export function SignUpButton({
  bgColor = "light-blue",
  textColor = "white",
  ...props
}: SignUpButtonProps) {
  return (
    <>
      <Button
        text="Sign Up"
        bgColor={bgColor}
        textColor={textColor}
        {...props}
      />
    </>
  )
}
