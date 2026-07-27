import {
  SectionHeading,
  accentClass,
} from "@/components/SectionHeading";

const PROGRAMS = [
  "Individualized ABA therapy plans",
  "Communication and language development",
  "Social skills training",
  "Daily living and independence skills",
  "School readiness skills",
  "Behaviour support plans",
  "Parent and caregiver collaboration",
] as const;

const FACILITY_IMAGES = {
  main: { src: "/about/facility.jpg", alt: "Bright, welcoming therapy space" },
  team: { src: "/about/team-moment.jpg", alt: "Clinical team collaborating" },
  play: { src: "/about/play-learning.jpg", alt: "Child engaged in play-based learning" },
} as const;

/** Replace with real staff when photos + bios are ready */
const TEAM_PLACEHOLDERS = [
  {
    role: "Board Certified Behaviour Analyst (BCBA)",
    image: "/about/staff-1.jpg",
    alt: "BCBA clinical team member",
  },
  {
    role: "Registered Behaviour Technician (RBT)",
    image: "/about/staff-2.jpg",
    alt: "RBT clinical team member",
  },
  {
    role: "Clinical Staff",
    image: "/about/staff-3.jpg",
    alt: "Clinical staff team member",
  },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-white">
      <div className="px-5 sm:px-8 lg:px-12 pt-4 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {/* ── Mission ── */}
          <div>
            <SectionHeading
              className="mb-10 md:mb-12"
              label="About Us"
              title={
                <>
                  Helping children communicate, connect, learn, and{" "}
                  <span className={accentClass}>thrive.</span>
                </>
              }
            />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-5 text-[1.0625rem] md:text-lg text-chocolate-600 font-light leading-[1.7] text-pretty max-w-prose">
                <p>
                  At TruTalk Therapy, we believe every child has unique strengths,
                  abilities, and potential waiting to be discovered. Our mission is
                  to provide compassionate, evidence-based behavioural support that
                  helps children with autism and developmental needs build
                  meaningful skills, increase independence, and participate more
                  confidently in everyday life.
                </p>
                <p>
                  We use the principles of Applied Behaviour Analysis (ABA) to
                  create individualized programs based on each child&apos;s needs,
                  interests, and goals. Our approach focuses on skill development
                  through positive reinforcement, natural learning opportunities,
                  play-based teaching, and collaboration with families.
                </p>
                <p>
                  Our team is committed to creating a safe, welcoming, and
                  inclusive environment where children feel respected, understood,
                  and supported. We work closely with families, caregivers, and
                  professionals to ensure that the skills learned in therapy can
                  be applied across home, school, and community settings.
                </p>
                <p className="text-chocolate-800 font-normal">
                  At TruTalk Therapy, we focus on more than just behaviour change
                  — we focus on helping children communicate, connect, learn, and
                  thrive.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden border border-gold-200/50">
                  <img
                    src={FACILITY_IMAGES.main.src}
                    alt={FACILITY_IMAGES.main.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-gold-200/50">
                  <img
                    src={FACILITY_IMAGES.team.src}
                    alt={FACILITY_IMAGES.team.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-gold-200/50">
                  <img
                    src={FACILITY_IMAGES.play.src}
                    alt={FACILITY_IMAGES.play.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Philosophy ── */}
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              align="center"
              label="Our Philosophy"
              title={
                <>
                  Every child learns differently. We believe therapy should be{" "}
                  <span className={accentClass}>personalized, respectful,</span>{" "}
                  and meaningful.
                </>
              }
              description="Our goal is to celebrate each child's individuality while providing the support they need to reach their fullest potential."
            />
          </div>

          {/* ── Treatment approach ── */}
          <div>
            <SectionHeading
              className="mb-8 md:mb-10"
              level="secondary"
              label="Our Treatment Approach"
              title={
                <>
                  Individualized programs, built around{" "}
                  <span className={accentClass}>your child.</span>
                </>
              }
              description="Our programs may include:"
            />

            <div className="rounded-3xl border border-gold-300/80 bg-gold-50/30 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
                {PROGRAMS.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 py-3.5 border-b border-gold-200/70"
                  >
                    <span className="font-serif text-gold-600 text-lg tabular-nums shrink-0 w-7">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-chocolate-700 text-[0.9875rem] md:text-base leading-snug pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Clinical team ── */}
          <div>
            <SectionHeading
              className="mb-10 md:mb-12"
              level="secondary"
              label="Our Clinical Team"
              title={
                <>
                  Faces and credentials families can{" "}
                  <span className={accentClass}>trust.</span>
                </>
              }
              description="Meet the BCBAs, RBTs, and clinical staff who will walk alongside your family. Replace these mock photos with real team headshots when ready."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {TEAM_PLACEHOLDERS.map((member) => (
                <article key={member.role}>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold-200/50 mb-5">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="text-sm font-serif italic text-gold-700 mb-1.5">
                    Name &amp; credentials
                  </p>
                  <h4 className="font-serif text-xl text-chocolate-800 leading-snug mb-2">
                    {member.role}
                  </h4>
                  <p className="text-sm text-chocolate-500 font-light leading-relaxed">
                    Licenses, certifications &amp; experience — replace with a
                    real bio when ready.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
