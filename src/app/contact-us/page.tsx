import { ContactForm } from "@/components/form"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import { nomixa } from "../fonts"

const ContactUsPage = () => {
  return (
    <div className="container py-16">
      <div className="flex ">
        <div className="space-y-16 w-6/12">
          <div className="flex items-center">
            <Dot color="green" size={46} className="p-0" />
            CONNECT WITH US
          </div>

          <h2 className={cn(nomixa.className, "text-5xl ")}>
            Together, we can <br />{" "}
            <b>
              {" "}
              do extraordinary <br /> things.{" "}
            </b>{" "}
          </h2>

          <div className="flex gap-4 items-center">
            <h4>hello@X3Lab.org </h4>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#1CFEBA" />
              <path
                d="M15.358 26.5156L24.6419 13.4845M24.6419 13.4845L26.0471 21.8526M24.6419 13.4845L16.2738 14.8897"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-5/12">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
