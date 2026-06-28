export const metadata = {
  title: "Dispatch Mission Guide — How to Win Every Mission (2026)",
  description: "Complete mission guide for Dispatch. Mission types explained, best strategies, and how to get 3-star ratings.",
};

export default function MissionGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#e2d4c0] mb-2">Dispatch Mission Guide</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">Mission Types Overview</h2>
            <p className="text-[#c8bba8] leading-relaxed">Dispatch features four core mission types: Escort (protect a target from point A to B), Elimination (defeat all enemy units), Defense (hold a position for X turns), and Retrieval (collect items while fighting through enemies). Each type rewards different unit compositions and strategies.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">Escort Mission Strategy</h2>
            <p className="text-[#c8bba8] leading-relaxed">Escort missions require balancing aggression and protection. Keep 2-3 units ahead of the escort target to clear paths, and 1-2 units flanking to prevent ambushes. Prioritize enemies that debuff movement speed — a slowed escort target fails the mission if enemies reach it.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">Elimination Mission Strategy</h2>
            <p className="text-[#c8bba8] leading-relaxed">In elimination missions, control vision before engaging. Deploy Scout units first to reveal all enemy positions, then set up a kill zone using terrain chokepoints. Focus fire on high-threat enemies (healers, artillery) before clearing regular units.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">Getting 3-Star Ratings</h2>
            <p className="text-[#c8bba8] leading-relaxed">3-star ratings require: completing the mission objective, taking zero casualties, and finishing within the turn limit. The turn limit is the hardest requirement — prioritize speed over perfect play. Use movement abilities aggressively and don't backtrack unless absolutely necessary.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-[#e2d4c0] mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about mission types overview in Dispatch?</h3>
                <p className="text-[#c8bba8] leading-relaxed">Dispatch features four core mission types: Escort (protect a target from point A to B), Elimination (defeat all enemy units), Defense (hold a position for X turns), and Retrieval (collect items while ...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about escort mission strategy in Dispatch?</h3>
                <p className="text-[#c8bba8] leading-relaxed">Escort missions require balancing aggression and protection. Keep 2-3 units ahead of the escort target to clear paths, and 1-2 units flanking to prevent ambushes. Prioritize enemies that debuff moveme...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about elimination mission strategy in Dispatch?</h3>
                <p className="text-[#c8bba8] leading-relaxed">In elimination missions, control vision before engaging. Deploy Scout units first to reveal all enemy positions, then set up a kill zone using terrain chokepoints. Focus fire on high-threat enemies (h...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
