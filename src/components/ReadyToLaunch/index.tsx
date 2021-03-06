import { SignUpButton } from "../SignUpButton";
import { CheckIcon, TrendingUpIcon, CodeIcon } from "@heroicons/react/solid";

type ReadyToLaunchProps = {
  ctaText?: React.ReactNode;
  option2?: boolean;
  subDescription?: React.ReactNode;
};

export function ReadyToLaunch({
  option2,
  ctaText = (
    <p>
      Ready to <br /> Launch?
    </p>
  ),
  subDescription = <p>Description</p>,
}: ReadyToLaunchProps) {
  return (
    <div className="relative z-0 w-full my-24">
      <div className="relative bg-darker-blue sm:max-w-7xl h-full sm:h-48 w-11/12 mx-auto px-4 py-6 sm:px-6 rounded-3xl lg:py-16 lg:px-8">
        <div className="relative w-11/12 px-0 md:px-4 flex flex-col sm:flex-row justify-between h-full items-center mx-auto z-20">
          <div>
            <div className="text-5xl font-extrabold text-white">{ctaText}</div>
            {subDescription && (
              <p className="text-white mt-2">{subDescription}</p>
            )}
          </div>
          <div className="flex flex-col items-center mt-8 sm:mt-0 sm:ml-auto">
            <SignUpButton bgColor="white" textColor="black" />
            <div className="flex flex-col items-center text-white mt-2">
              {option2 ? (
                <>
                  <div className="flex">
                    <CodeIcon
                      className="h-6 w-6 text-light-blue mr-1"
                      aria-hidden="true"
                    />
                    <span>No code needed</span>
                  </div>
                  <div className="flex">
                    <TrendingUpIcon
                      className="h-6 w-6 text-light-blue mr-1"
                      aria-hidden="true"
                    />
                    <span>Launch in min</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <CheckIcon
                      className="h-6 w-6 text-light-blue mr-1"
                      aria-hidden="true"
                    />
                    <span>Connect your store</span>
                  </div>
                  <div className="flex">
                    <TrendingUpIcon
                      className="h-6 w-6 text-light-blue mr-1"
                      aria-hidden="true"
                    />
                    <span>Launch in min</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {option2 ? null : (
          <svg
            viewBox="0 0 100 100"
            className="absolute top-6 md:top-8 left-10 md:left-14 h-20 w-20 fill-current text-light-blue z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        )}
      </div>
    </div>
  );
}
