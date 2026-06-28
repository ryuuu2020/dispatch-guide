export const metadata = {
  title: "Dispatch Unit Tier List — Best Units (2026)",
  description: "Complete unit tier list for Dispatch. Best units for every situation, S-tier picks, and unit comparison guide.",
};

export default function UnitTierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#e2d4c0] mb-2">Dispatch Unit Tier List 2026</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">S-Tier Units</h2>
            <p className="text-[#c8bba8] leading-relaxed">S-tier units in Dispatch consistently perform above other units regardless of map or mission type. These units have the highest win rates in community data and are strong picks in most team compositions. Prioritize unlocking and upgrading these units first for the fastest progression.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">A-Tier Units</h2>
            <p className="text-[#c8bba8] leading-relaxed">A-tier units are strong in specific roles or map types. They are excellent choices when you need to fill a specific role that your S-tier units cannot cover, or when facing mission-specific challenges that counter the S-tier picks. Many A-tier units have unique abilities that create powerful synergies with S-tier units.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">B-Tier Units</h2>
            <p className="text-[#c8bba8] leading-relaxed">B-tier units are viable choices for specific missions or as support roles. They are not recommended as primary carry units, but can fill gaps in your roster effectively. B-tier units often become stronger with specific equipment upgrades that transform their performance ceiling.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">Unit Upgrade Priority</h2>
            <p className="text-[#c8bba8] leading-relaxed">Focus on maxing S-tier units first. Each upgrade tier provides a 15-20% stat increase plus unlocks a new passive ability at upgrade levels 3 and 5. A fully upgraded S-tier unit outperforms a partially upgraded higher-potential unit at all practical game content.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about s-tier units in Dispatch?</h3>
                <p className="text-[#c8bba8] leading-relaxed">S-tier units in Dispatch consistently perform above other units regardless of map or mission type. These units have the highest win rates in community data and are strong picks in most team compositio...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about a-tier units in Dispatch?</h3>
                <p className="text-[#c8bba8] leading-relaxed">A-tier units are strong in specific roles or map types. They are excellent choices when you need to fill a specific role that your S-tier units cannot cover, or when facing mission-specific challenges...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about b-tier units in Dispatch?</h3>
                <p className="text-[#c8bba8] leading-relaxed">B-tier units are viable choices for specific missions or as support roles. They are not recommended as primary carry units, but can fill gaps in your roster effectively. B-tier units often become stro...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
