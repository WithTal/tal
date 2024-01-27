import Link from "next/link";
import { Button } from "./ui/button";
import StripePricingTable from "./stripe/StripeTable";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export default async function PricingSection() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <div className=" w-full max-w-6xl mt-16 mb-16 p-8 rounded-lg space-y-8">
      <StripePricingTable user={user} />
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="w-full  flex justify-center">
        <div className="mx-auto lg:min-w-auto flex w-full max-w-2xl rounded-sm border  md:rounded-r-none md:border-r-0 ">

          {pricingOptions.map((option, index) => {
            return (
              <div className="w-1/3 shrink-0 space-y-2.5 border-l" id="scaler">
                <div className="space-y-4 rounded-tr-sm border-b bg-secondary p-2.5 md:rounded-tr-none">
                  <div className="space-y-sm">
                    <h3 className="mb-0 text-xl font-semibold">{option.title}</h3>
                    <p className="text-xs leading-tight text-black">
                      {option.description}
                    </p>
                  </div>
                  <div className="space-y-md">
                    <span className="block text-2xl font-semibold">
                      <span className="sr-only">{option.price}
                        {option.title != "Enterprise" && " per month"}
                      </span>
                      <span aria-hidden="true">
                        {option.price}
                        <span className="pl-sm text-xs font-normal text-neutral-400">
                          {option.title != "Enterprise" && " /month"}
                        </span>
                      </span>
                    </span>
                    {option.title != "Enterprise" && <a
                      className="group focus-ring whitespace-nowrap cursor-pointer 
                      inline-flex p-3 justify-center items-center 
                      text-center no-underline rounded-full transition disabled:cursor-not-allowed h-5 
                      dark:border-gray-800 border px-2 hover:!border-orange-500 text-sm text-white 
                      font-semibold focus:ring-orange-300 dark:focus:ring-orange-500/40 focus:outline-none 
                      focus:ring disabled:bg-gray-900 disabled:text-gray-300 dark:disabled:bg-white dark:disabled:text-gray-600 
                      border-orange bg-primary hover:border-orange hover:bg-orange hover:text-white dark:text-white dark:hover:border-orange"
                      href="https://auth.planetscale.com/sign-up"
                    >
                      Get started
                    </a>}
                  </div>
                </div>
                <ul className="flex flex-col gap-y-2 px-2.5 pb-3 pt-xs text-[13px] leading-snug">
                  {option.features.map((feature, index) => {
                    return (<li className="group flex items-start gap-x-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                        className="flex-shrink-0 text-green transition duration-150 group-hover:text-orange"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m3 9 2.646 2.646a.5.5 0 0 0 .708 0L13 5"
                        />
                      </svg>
                      {feature}
                    </li>
                    )
                  })}

                </ul>
              </div>

            )
          })}
        </div>

      </div>

      <div className="text-black flex flex-wrap justify-center lg:space-x-4 space-y-4 lg:space-y-0 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col border rounded-lg p-4 w-full lg:w-1/4 ${option.bgColor}`}
          >
            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-semibold text-center">
                {option.title}
              </h3>
              <p className="text-xl font-bold text-center mb-2">
                {option.price}
              </p>
              <p className="text-sm text-neutral-600 text-center">
                {option.description}
              </p>
              <ul className="space-y-2 mb-4 pl-4">
                You get:
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    {/* <span className="text-green-500">✔</span> */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 text-center">
              {index != 0 ?
                <Link href="/login">
                  {" "}
                  <Button className="w-3/4">{option.buttonText}</Button>
                </Link>
                :
                <Link href="/login">
                  {" "}
                  <Button className="w-3/4">Get Started</Button>
                </Link>
              }
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    description:
      "Perfect for individuals looking to enhance their online presence.",
    features: [
      "Max 50 links",
      "(Tiny) Watermark included"
    ],
    buttonText: "Choose Starter",
    bgColor: "bg-white",
  },
  {
    title: "Pro",
    price: "$8",
    description:
      "Ideal for professionals requiring frequent updates to their profiles.",
    features: [
      "12 AI Headshots",
    ],
    buttonText: "Choose Basic",
    bgColor: "bg-neutral-100",
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    description:
      "Looking to update your social profile across your entire organization? ",
    features: [
      "12 AI Headshots",
    ],
    buttonText: "Choose Basic",
    bgColor: "bg-neutral-100",
  }
  // {
  //   title: "Premium",
  //   price: "5 Credits",
  //   description: "The best value with unlimited possibilities.",
  //   features: [
  //     "20 AI Headshots",
  //   ],
  //   buttonText: "Choose Premium",
  //   bgColor: "bg-white",
  // },
];
