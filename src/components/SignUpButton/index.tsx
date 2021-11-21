import { Button } from "../Button"
import { ButtonHTMLAttributes, useState, useContext } from "react"
import SignUpPopUp from "../SignUpPopUp"
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
  const { modalIsOpen, setModalIsOpen } = useContext(modalContext)

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
