import { SectionHeading } from "@/components/SectionHeading";
import { BookingForm } from "@/components/BookingForm";
import { Mail, Phone, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative bg-white">
      <div className="px-5 sm:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div
            id="contact"
            className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 pt-4 scroll-mt-24"
          >
            <div>
              <SectionHeading
                label="Contact"
                title="Book a free consultation"
              />
              <p className="mt-5 text-chocolate-700 font-light leading-relaxed max-w-md">
                Based in the GTA and serving families across Ontario. Not sure
                where to start? Request a consultation — including questions
                about{" "}
                <span className="font-semibold text-chocolate-800">
                  OAP funding
                </span>{" "}
                — and we&apos;ll help you find the right fit for your child.
              </p>
              <ul className="mt-8 space-y-4 text-chocolate-700">
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-gold-500 shrink-0" />
                  <a
                    href="mailto:support@trutalktherapy.com"
                    className="font-semibold text-chocolate-800 hover:text-gold-600 transition-colors"
                  >
                    support@trutalktherapy.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-gold-500 shrink-0" />
                  <span className="text-chocolate-700">
                    Phone — contact us by email to schedule a call
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-chocolate-800 block mb-0.5">
                      Hours of operation
                    </strong>
                    <span className="font-medium text-chocolate-800">
                      8:00 AM – 8:00 PM (Eastern)
                    </span>
                    <span className="block text-sm text-chocolate-600 mt-1">
                      Weekend sessions by appointment
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div id="book" className="scroll-mt-28">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
