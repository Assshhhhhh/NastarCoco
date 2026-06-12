import { TEAM, GROUP_LABELS, type TeamMember } from "@/data/team";

const GROUPS: { key: TeamMember["group"]; num: string }[] = [
  { key: "nastar", num: "01" },
  { key: "cocoffee", num: "02" },
  { key: "operations", num: "03" },
];

export default function CocoSquad() {
  return (
    <section className="section-gold-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#F6B21A" }} />
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#1F5A34" }}>
              Coco Squad
            </p>
          </div>
          <h2
            className="font-display leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 3.8vw, 3.25rem)", color: "#33211A" }}
          >
            Young people, building
            <br />
            something{" "}
            <em className="not-italic italic" style={{ color: "#1F5A34" }}>
              serious.
            </em>
          </h2>
        </div>

        {/* Intro copy */}
        <p
          className="text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ color: "rgba(51,33,26,0.6)" }}
        >
          The Coco Squad is the young team behind every part of Nastar Coco — from recipes and
          baking to coffee, service, administration, and logistics. Together, we are building a
          brand that does more than sell nastar. We create a warm experience that can grow
          into something much bigger.
        </p>

        {/* Divisions */}
        <div className="flex flex-col gap-14">
          {GROUPS.map(({ key, num }) => {
            const members = TEAM.filter((m) => m.group === key);
            return (
              <div key={key}>
                {/* Division header */}
                <div className="flex items-baseline gap-4 mb-7">
                  <span className="font-display leading-none" style={{ color: "#C8900C", fontSize: "1.5rem" }}>
                    {num}
                  </span>
                  <h3
                    className="text-[13px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "#33211A" }}
                  >
                    {GROUP_LABELS[key]}
                  </h3>
                  <span className="text-[11px] font-medium" style={{ color: "rgba(51,33,26,0.4)" }}>
                    {members.length} people
                  </span>
                  <div className="flex-1 h-px self-center" style={{ backgroundColor: "rgba(51,33,26,0.12)" }} />
                </div>

                {/* Member cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="hover-lift rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
                      style={{
                        backgroundColor: "#FFFDF7",
                        border: "1px solid #E8D5B0",
                        boxShadow: "0 4px 16px rgba(51,33,26,0.05)",
                      }}
                    >
                      {/* Avatar — ringed circle, echoing the journey timeline */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-display"
                        style={{
                          backgroundColor: "#1F5A34",
                          color: "#F6B21A",
                          fontSize: "1.35rem",
                          boxShadow: "0 0 0 3px #FFFDF7, 0 0 0 3.7px rgba(31,90,52,0.45)",
                        }}
                      >
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "#33211A" }}>
                          {member.name}
                        </p>
                        <p
                          className="text-[11px] font-medium tracking-[0.1em] uppercase mt-1 leading-snug"
                          style={{ color: "rgba(51,33,26,0.5)" }}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing quote */}
        <div className="mt-20 flex flex-col items-center text-center gap-4">
          <span className="font-display leading-none select-none" style={{ color: "#C8900C", fontSize: "3.5rem" }} aria-hidden>
            &ldquo;
          </span>
          <p
            className="font-display italic max-w-xl leading-relaxed -mt-6"
            style={{ color: "rgba(51,33,26,0.8)", fontSize: "1.35rem" }}
          >
            Built by young people with craft, systems, and dreams that mean business.
          </p>
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: "rgba(51,33,26,0.45)" }}>
            — Coco Squad
          </span>
        </div>

      </div>
    </section>
  );
}
