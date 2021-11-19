import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: "light-blue" | "darker-blue" | "white" | "black"
  text?: string
  fontColor?: "light-blue" | "darker-blue" | "white" | "black"
}

export function Button({
  text = "Sign Up",
  bgColor = "light-blue",
  fontColor = "white",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-${bgColor} font-semibold text-${fontColor} rounded-full py-4 px-7`}
      {...props}
    >
      {text}
    </button>
  )
}
