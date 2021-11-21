import { createContext, ReactNode, useState } from "react"

type SignUpPopUpProps = {
  modalIsOpen: boolean
  setModalIsOpen: (isOpen: boolean) => void
}

export const modalContext = createContext({} as SignUpPopUpProps)

type modalProviderProps = {
  children: ReactNode
}

export function ModalProvider({ children }: modalProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <modalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </modalContext.Provider>
  )
}
