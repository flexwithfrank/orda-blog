import { Button } from "../Button"
import { ButtonHTMLAttributes, useContext } from "react"
import { modalContext } from "context/modalContext"

type SignUpButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: "light-blue" | "darker-blue" | "white" | "black"
  textColor?: "light-blue" | "darker-blue" | "white" | "black"
}

export function SignUpButton({
  bgColor = "light-blue",
  textColor = "white",
  ...props
}: SignUpButtonProps) {
  const { setModalIsOpen } = useContext(modalContext)

  function handleClick() {
    setModalIsOpen(true)
  }

  return (
    <>
      <Button
        text="Sign Up"
        bgColor={bgColor}
        textColor={textColor}
        {...props}
        onClick={handleClick}
      />
    </>
  )
}
