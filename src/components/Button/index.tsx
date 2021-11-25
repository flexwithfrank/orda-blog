import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: "light-blue" | "darker-blue" | "white" | "black";
  text?: string;
  textColor?: "light-blue" | "darker-blue" | "white" | "black";
};

const buttonConfig = {
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
};

export function Button({
  text = "Sign Up",
  bgColor = "light-blue",
  textColor = "white",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonConfig.textColor[textColor]} ${buttonConfig.bgColor[bgColor]} font-semibold rounded-full py-4 px-7 hover:opacity-90 transition`}
      {...props}
    >
      {text}
    </button>
  );
}
