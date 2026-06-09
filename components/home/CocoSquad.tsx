import SectionHeading from "@/components/SectionHeading";
import { TEAM, GROUP_LABELS, type TeamMember } from "@/data/team";

const GROUP_ICONS: Record<TeamMember["group"], string> = {
  nastar: "🧁",
  cocoffee: "☕",
  operations: "📦",
};

const GROUPS: TeamMember["group"][] = ["nastar", "cocoffee", "operations"];

export default function CocoSquad() {
  return (
    <section className="section-gold-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            badge="Tim Kami"
            title="Meet the Coco Squad."
            subtitle="Tim di balik nastar, kopi, dapur, logistik, dan pengalaman hangat Nastar Coco."
            centered
            serif
          />
        </div>

        {/* Intro copy */}
        <p className="text-espresso/60 text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Coco Squad adalah tim muda di balik setiap proses Nastar Coco — dari resep, baking,
          kopi, pelayanan, administrasi, hingga logistik. Bersama, kami membangun brand yang
          bukan hanya menjual nastar, tetapi menciptakan pengalaman hangat yang bisa tumbuh
          lebih jauh.
        </p>

        {/* Groups */}
        <div className="flex flex-col gap-16">
          {GROUPS.map((group) => {
            const members = TEAM.filter((m) => m.group === group);
            return (
              <div key={group}>
                {/* Group label */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xl">{GROUP_ICONS[group]}</span>
                  <h3 className="text-espresso font-bold text-lg">{GROUP_LABELS[group]}</h3>
                  <div className="flex-1 h-px bg-espresso/15" />
                </div>

                {/* Member cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="card-gold hover-lift p-5 flex flex-col items-center gap-3 text-center"
                    >
                      {/* Avatar placeholder */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-green-dark shrink-0"
                        style={{
                          background: "linear-gradient(135deg, #F6B21A33 0%, #F4E6C8 100%)",
                          border: "2px solid rgba(31,90,52,0.15)",
                        }}
                      >
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-espresso font-semibold text-sm">{member.name}</p>
                        <p className="text-espresso/55 text-xs mt-0.5 leading-snug">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Investor-friendly tagline */}
        <div className="mt-20 text-center">
          <p className="text-espresso/50 text-sm italic max-w-lg mx-auto leading-relaxed">
            "Dibangun oleh anak muda dengan rasa, sistem, dan mimpi yang serius."
          </p>
        </div>
      </div>
    </section>
  );
}
