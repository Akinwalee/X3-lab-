import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { nomixa } from "../fonts"

type GetInvolvedType = {
  label: string
  description: string
  link: string
  linkLabel: string
}

const getInvolved: GetInvolvedType[] = [
  {
    label: "Innovative Bootcamp",
    description:
      "A fast-paced, immersive program that equips participants with the skills to build and launch tech solutions.",
    link: "https://akyn.vercel.app",
    linkLabel: "Click to learn more"
  },
  {
    label: "X3 Hackathon",
    description:
      "The NexaScale Hackathon offers an opportunity to explore the world of cybersecurity and AI security, focusing on Cyber Threat Detection. It encourages participants of all skill levels to learn, solve real cybersecurity challenges, collaborate with diverse teams, and potentially make a significant impact in the field. ",
    link: "https://akyn.vercel.app",
    linkLabel: "Click to apply"
  },
  {
    label: "Startup Incubation",
    description:
      "A structured pathway for early-stage entrepreneurs, including mentorship, funding, and business development support.",
    link: "https://akyn.vercel.app",
    linkLabel: "Click to learn more"
  },
  {
    label: "Research & Development Fellowship",
    description:
      "A research-focused initiative that provides funding and resources to develop groundbreaking solutions.",
    link: "https://akyn.vercel.app",
    linkLabel: "Click to submit"
  }
]

const GetInvolved = () => {
  return (
    <div className="space-y-20 container py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12">
          <h2 className="lg:text-5xl text-4xl text-nowrap font-semibold pb-6 "> Our Programs</h2>
          <p className="font-light lg:text-xl">Find the right program for you</p>
        </div>

        <div className="lg:w-max  space-y-12">
          <p className="lg:text-2xl text-xl font-light">
            Our programs are tailored to equip aspiring tech creators, <br className="hidden lg:block" /> entrepreneurs, and researchers with the
            skills, mentorship, <br className="hidden lg:block" /> and resources they need to thrive in the industry.
          </p>

          <Button className="w-[203px] py-6">
            Donate
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 21H13.62C14.197 21 14.7672 20.8751 15.2914 20.634C15.8157 20.3928 16.2815 20.0411 16.657 19.603L21.759 13.651C21.8658 13.5266 21.9404 13.3778 21.9762 13.2178C22.012 13.0577 22.0079 12.8913 21.9642 12.7333C21.9206 12.5752 21.8387 12.4303 21.7258 12.3113C21.6129 12.1923 21.4726 12.1029 21.317 12.051L19.349 11.395C18.8734 11.2401 18.3669 11.205 17.8745 11.2928C17.382 11.3805 16.9188 11.5884 16.526 11.898L13.341 14.445L12.724 13.21C12.3935 12.5443 11.8831 11.9844 11.2507 11.5938C10.6184 11.2032 9.88926 10.9975 9.146 11H4C2.897 11 2 11.897 2 13V19C2 20.103 2.897 21 4 21ZM4 13H9.146C9.909 13 10.594 13.423 10.935 14.105L11.382 15H7V17H13.014C13.1678 16.9978 13.3191 16.9602 13.456 16.89L13.459 16.889L13.463 16.887H13.466L13.468 16.886H13.472L13.473 16.885C13.482 16.888 13.476 16.884 13.476 16.884C13.486 16.884 13.478 16.883 13.478 16.883H13.479L13.481 16.882L13.484 16.881L13.486 16.88L13.488 16.879L13.491 16.878L13.493 16.877C13.496 16.877 13.494 16.876 13.495 16.876L13.498 16.874L13.5 16.873L13.502 16.872L13.505 16.871L13.507 16.87H13.508L13.51 16.869L13.513 16.868L13.515 16.867C13.524 16.866 13.518 16.866 13.518 16.866L13.52 16.865C13.5584 16.8415 13.5951 16.8155 13.63 16.787L17.776 13.47C18.038 13.262 18.399 13.197 18.716 13.303L19.273 13.489L15.14 18.312C14.9498 18.5278 14.716 18.7008 14.4539 18.8194C14.1919 18.938 13.9076 18.9996 13.62 19H4V13ZM16 2.00001H15.983C15.82 2.00201 14.977 2.03901 14 2.70501C13.049 2.05701 12.226 2.00501 12.032 2.00101L12.002 2.00001H11.998C11.197 2.00001 10.443 2.31301 9.879 2.87801C9.313 3.44501 9 4.19801 9 5.00001C9 5.80201 9.313 6.55501 9.861 7.10401L13.275 10.69C13.3689 10.7875 13.4816 10.8651 13.6062 10.918C13.7308 10.9709 13.8648 10.9982 14.0002 10.9981C14.1356 10.998 14.2696 10.9706 14.3941 10.9175C14.5187 10.8643 14.6312 10.7866 14.725 10.689L18.121 7.12101C18.688 6.55501 19 5.80201 19 5.00001C19 4.19801 18.687 3.44501 18.122 2.87901C17.8443 2.59964 17.5139 2.37811 17.15 2.22724C16.7861 2.07636 16.3959 1.99913 16.002 2.00001H16ZM17 5.00001C17 5.26701 16.896 5.51801 16.689 5.72501L14 8.55001L11.293 5.70701C11.104 5.51801 11 5.26701 11 5.00001C11 4.73301 11.104 4.48201 11.294 4.29201C11.475 4.10834 11.7211 4.00342 11.979 4.00001C12.004 4.00101 12.481 4.03201 13.046 4.48501C13.1267 4.55034 13.209 4.62434 13.293 4.70701L14 5.41401L14.707 4.70701C14.791 4.62434 14.8733 4.55034 14.954 4.48501C15.483 4.06001 15.93 4.00701 16.006 4.00101C16.269 4.00238 16.5208 4.10729 16.707 4.29301C16.896 4.48201 17 4.73301 17 5.00001Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className={`space-y-10 swatch-bg p-6`} >
        {getInvolved.map((_, index) => (
          <GetInvolvedComponent key={index} {..._} />
        ))}
      </div>
    </div>
  )
}

export default GetInvolved

const GetInvolvedComponent = ({ label, description, link, linkLabel }: GetInvolvedType) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
      <h3 className={cn("font-medium text-2xl lg:text-3xl lg:w-[496px]", nomixa.className)}>{label}</h3>

      <div className="lg:w-11/12">
        <p className="lg:text-2xl text-xl font-extralight">{description}</p>
        <Link href={link} className="lg:text-xl text-base text-blue-500">
          {linkLabel}
        </Link>
      </div>
    </div>
  )
}
