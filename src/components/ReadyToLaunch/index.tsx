import { Button } from "../Button"

type ReadyToLaunchProps = {
  option2?: boolean
}

export function ReadyToLaunch({ option2 }: ReadyToLaunchProps) {
  return (
    <div className="w-full">
      <div className="relative bg-darker-blue max-w-6xl h-48 mx-auto px-4 py-6 sm:px-6 rounded-3xl">
        <div className="relative w-11/12 flex justify-between h-full items-center mx-auto z-20">
          <div>
            <p className="text-5xl font-black text-white">
              Ready to <br /> Launch?
            </p>
          </div>
          <div className="flex flex-col items-center ml-auto">
            <Button bgColor="white" textColor="black" />
            <div className="flex flex-col items-center text-white mt-2">
              {option2 ? (
                <>
                  <p>No code needed</p>
                  <p>Launch in min</p>
                </>
              ) : (
                <>
                  <p>Connect your store</p>
                  <p>Launch in min</p>
                </>
              )}
            </div>
          </div>
        </div>
        {option2 ? null : (
          <svg
            viewBox="0 0 100 100"
            className="absolute top-8 left-8 h-20 w-20 fill-current text-light-blue z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        )}
      </div>
    </div>
  )
}
