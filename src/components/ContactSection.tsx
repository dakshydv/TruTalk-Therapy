import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative bg-white">
      <div className="px-5 sm:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div
            id="contact"
            className="grid md:grid-cols-2 gap-10 md:gap-12 pt-4 scroll-mt-24"
          >
            <div>
              <SectionHeading
                level="secondary"
                label="Contact"
                title="Get in touch"
              />
              <ul className="mt-6 space-y-4 text-chocolate-700">
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
                      8:00 AM – 8:00 PM
                    </span>
                    <span className="block text-sm text-chocolate-600 mt-1">
                      Weekend sessions by appointment
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-chocolate-700 font-light leading-relaxed mb-6">
                Not sure where to start? Book a{" "}
                <span className="font-semibold text-chocolate-800">
                  free consultation
                </span>{" "}
                — including questions about{" "}
                <span className="font-semibold text-chocolate-800">
                  OAP funding
                </span>{" "}
                — and we&apos;ll help you find the right fit for your child.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 self-start px-8 py-4 bg-chocolate-800 text-gold-50 rounded-full font-semibold text-base hover:bg-chocolate-700 transition-colors duration-200"
              >
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
