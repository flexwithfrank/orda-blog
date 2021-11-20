import { Button } from "../Button"
import { ButtonHTMLAttributes, useState } from "react"
import SignUpPopUp from "../SignUpPopUp"

type SignUpButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: "light-blue" | "darker-blue" | "white" | "black"
  textColor?: "light-blue" | "darker-blue" | "white" | "black"
}

export function SignUpButton({
  bgColor = "light-blue",
  textColor = "white",
  ...props
}: SignUpButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        text="Sign Up"
        bgColor={bgColor}
        textColor={textColor}
        {...props}
        onClick={() => setOpen(true)}
      />
      <SignUpPopUp open={open} setOpen={setOpen} />
    </>
  )
}
