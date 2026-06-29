import Link from 'next/link';

export const metadata = {
  title: "Dispatch Beginner Guide — How to Start, Core Mechanics & Hero Selection (2026)",
  description: "Complete Dispatch beginner's guide: learn core stats (Combat, Intellect, Charisma, Mobility, Vigor), first episode walkthrough, team building basics, and resource management.",
};

const HERO_ROLES = [
  { hero: 'Flambe', role: 'Damage Dealer', bestStat: 'Combat 5', difficulty: 'Easy' },
  { hero: 'Phenomenon Man', role: 'Tank / Protector', bestStat: 'Vigor 5', difficulty: 'Easy' },
  { hero: 'Invisigal', role: 'Scout / Stealth', bestStat: 'Mobility 5', difficulty: 'Medium' },
  { hero: 'Coupe', role: 'Investigation / Tech', bestStat: 'Intellect 5', difficulty: 'Medium' },
  { hero: 'Prism', role: 'Support / Healer', bestStat: 'Charisma 4', difficulty: 'Easy' },
  { hero: 'Sonar', role: 'Detection / Recon', bestStat: 'Intellect 4', difficulty: 'Medium' },
  { hero: 'Golem', role: 'Heavy Tank', bestStat: 'Vigor 5', difficulty: 'Hard' },
  { hero: 'Malevola', role: 'Caster / Debuffer', bestStat: 'Intellect 5', difficulty: 'Hard' },
  { hero: 'Punchup', role: 'Brawler / Bruiser', bestStat: 'Combat 4', difficulty: 'Easy' },
  { hero: 'Water Boy', role: 'Crowd Control', bestStat: 'Combat 3', difficulty: 'Medium' },
];

const CORE_STATS = [
  { stat: 'Combat', icon: '⚔️', description: 'Determines physical attack damage and melee effectiveness. Essential for brawlers and damage dealers.' },
  { stat: 'Intellect', icon: '🧠', description: 'Governs tech operations, hacking, investigation, and spell-like abilities. Key for casters and investigators.' },
  { stat: 'Charisma', icon: '💬', description: 'Influences dialogue outcomes, team morale, and negotiation success. Critical for support heroes and leadership.' },
  { stat: 'Mobility', icon: '🏃', description: 'Controls movement speed, dodge chance, and stealth capabilities. Vital for scouts and infiltrators.' },
  { stat: 'Vigor', icon: '💪', description: 'Dictates maximum health, damage resistance, and endurance. The tank stat — key for front-line heroes.' },
];

export default function BeginnerGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Dispatch Beginner&apos;s Guide — How to Start, Core Mechanics &amp; Hero Selection</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Stepping into the sardine-can headquarters of the Z-Team for the first time can feel overwhelming. As Robert Robertson, a former tech worker turned dispatcher, you are responsible for assigning the right heroes to the right missions, managing fragile team dynamics, and navigating a branching narrative where every decision has consequences. This beginner&apos;s guide breaks down the five core stats, walks you through the first episode, and teaches you the fundamentals of team building and resource management so you can start making confident dispatch decisions from day one.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Understanding the Five Core Stats</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Every hero in Dispatch has five stats rated from 1 to 5 stars: Combat, Intellect, Charisma, Mobility, and Vigor. These stats determine how effective a hero is at different mission types and how they perform during critical moments. Unlike traditional RPGs where you grind experience, your heroes&apos; stat lines are relatively fixed — your job as dispatcher is to match the right stat profile to the right assignment. Sending a low-Combat hero into a brawl is a recipe for injury and mission failure.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Each mission type in Dispatch has a primary stat requirement. Combat missions need high Combat and Vigor; investigation and tech missions require Intellect; diplomacy and public relations missions lean on Charisma; and stealth or infiltration missions demand Mobility. The game telegraphs mission stat requirements through the briefing screen, and ignoring these cues is the fastest way to lose heroes or trigger unfavorable story outcomes.
            </p>
            <p className="text-ink-light leading-relaxed">
              Synergy between stats matters too. A hero with high Combat but low Vigor hits hard but folds quickly under sustained pressure. A hero with high Charisma but low Intellect can talk their way into a situation but cannot figure out how to get out of it. The best dispatchers understand not just individual stats, but how they complement each other within a team composition.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Icon</th>
                    <th>Role</th>
                    <th>Key Users</th>
                  </tr>
                </thead>
                <tbody>
                  {CORE_STATS.map((s) => (
                    <tr key={s.stat}>
                      <td className="font-semibold text-ink">{s.stat}</td>
                      <td>{s.icon}</td>
                      <td className="text-ink-light">{s.description}</td>
                      <td className="text-ink-faded text-sm">
                        {s.stat === 'Combat' && 'Flambe, Punchup'}
                        {s.stat === 'Intellect' && 'Coupe, Malevola, Sonar'}
                        {s.stat === 'Charisma' && 'Prism, Flambe'}
                        {s.stat === 'Mobility' && 'Invisigal, Coupe'}
                        {s.stat === 'Vigor' && 'Phenomenon Man, Golem'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">First Episode Walkthrough</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Episode 1, &quot;Orientation,&quot; serves as your tutorial. Robert Robertson arrives at the Z-Team base — a cramped, sardine-can-shaped facility in Torrance, California — and immediately faces a dispatch crisis. You are introduced to the core cast and given your first mission assignment. The episode is designed to teach you the dispatch interface: selecting heroes from the roster, reviewing mission briefs, and confirming assignments.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Your very first dispatch decision involves a street-level disturbance. The game recommends sending Flambe due to her high Combat stat, and this is indeed the optimal choice. Sending any other hero to this mission will still succeed but will result in a lower mission rating and a snarky comment from the team about your competence. Pay attention to the dispatch screen hints — they exist for a reason in the early game.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              After the first mission, you gain access to the base management screen where you can check hero status, review mission history, and manage team relationships. The episode introduces the Morale system: heroes who are consistently sent on missions matching their skills will have higher morale, while those forced into unsuitable assignments will grow resentful. Low morale heroes perform worse in the field and may eventually leave the team.
            </p>
            <p className="text-ink-light leading-relaxed">
              By the end of Episode 1, you should feel comfortable with the dispatch UI and understand the basic risk-reward loop. The episode concludes with a team meeting scene where your dispatch decisions from the episode are critiqued by your teammates — this establishes the game&apos;s signature workplace-comedy tone and reminds you that every choice is being watched.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hero Roles &amp; Selection</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              With 10 heroes on the Z-Team roster, knowing who excels at what is half the battle. Heroes fall into broad archetypes based on their stat distribution: Damage Dealers (high Combat), Tanks (high Vigor), Investigators (high Intellect), Support (high Charisma), and Scouts (high Mobility). Some heroes are hybrid archetypes — Coupe, for instance, is both a strong investigator and a competent scout — which makes them versatile dispatch options for multi-phase missions.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              For beginners, the safest starting lineup revolves around Flambe as your primary damage dealer, Phenomenon Man as your tank, and Prism as your support. This trinity covers Combat, Vigor, and Charisma, which are the three most commonly tested stats in early episodes. Invisigal should be your go-to for any stealth or recon mission, and you should rotate Coupe in whenever a mission involves technology or investigation.
            </p>
            <p className="text-ink-light leading-relaxed">
              Malevola and Golem are high-difficulty heroes that beginners should approach with caution. Malevola&apos;s abilities are powerful but situational, and Golem&apos;s low mobility means he can be a liability on missions that require speed or stealth. Save these heroes for missions that specifically favor their stats, and build your confidence with the easier-to-use heroes first.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Hero</th>
                    <th>Role</th>
                    <th>Best Stat</th>
                    <th>Difficulty</th>
                    <th>Recommended For</th>
                  </tr>
                </thead>
                <tbody>
                  {HERO_ROLES.map((h) => (
                    <tr key={h.hero}>
                      <td className="font-semibold text-ink">{h.hero}</td>
                      <td className="text-ink-light">{h.role}</td>
                      <td className="text-accent">{h.bestStat}</td>
                      <td>
                        <span className={
                          h.difficulty === 'Easy' ? 'text-green-400' :
                          h.difficulty === 'Medium' ? 'text-yellow-400' :
                          'text-red-400'
                        }>
                          {h.difficulty}
                        </span>
                      </td>
                      <td className="text-ink-faded text-sm">
                        {h.role === 'Damage Dealer' && 'Combat missions'}
                        {h.role === 'Tank / Protector' && 'Front-line defense'}
                        {h.role === 'Scout / Stealth' && 'Infiltration, recon'}
                        {h.role === 'Investigation / Tech' && 'Tech ops, hacking'}
                        {h.role === 'Support / Healer' && 'Team morale, diplomacy'}
                        {h.role === 'Detection / Recon' && 'Search missions'}
                        {h.role === 'Heavy Tank' && 'High-risk defense'}
                        {h.role === 'Caster / Debuffer' && 'Specialized magic'}
                        {h.role === 'Brawler / Bruiser' && 'Mid-risk combat'}
                        {h.role === 'Crowd Control' && 'Area control'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Resource Management Basics</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Dispatch does not have a traditional currency or crafting system, but it does have critical resources you must manage: Hero Health, Team Morale, and Time. Hero Health is straightforward — injured heroes recover between episodes but cannot be deployed while recovering. Sending an injured hero into battle is possible in some scenarios but carries severe risk of permanent consequences, including hero death.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Team Morale is the less obvious but equally important resource. Heroes who feel overworked, underappreciated, or constantly assigned to missions they dislike will accumulate negative morale. Low morale manifests as reduced stat effectiveness, dialogue penalties, and in extreme cases, heroes quitting the Z-Team entirely. The game tracks morale through hero-specific dialogue and a subtle mood indicator on the roster screen.
            </p>
            <p className="text-ink-light leading-relaxed">
              Time is your final resource. Dispatch is structured across 8 episodes, and certain mission opportunities only appear within specific time windows. If you spend too much time resting heroes or ignoring optional missions, you may miss critical story branches or character developments. The best approach for beginners is to tackle every available mission in each episode while rotating your hero deployments to keep the entire team relatively fresh.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Common Beginner Mistakes</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              The most frequent mistake new dispatchers make is treating Dispatch like a combat game. While there are action sequences, the core loop is about assignment management — matching the right person to the right task. Rushing through mission briefs without reading stat requirements, ignoring team morale indicators, and failing to rotate heroes are the top three errors that lead to mid-game frustration.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Another common pitfall is fixating on a single hero. While Flambe is objectively powerful, she cannot be on every mission. The game is designed to punish over-reliance on any one character by introducing missions that specifically counter their strengths or by triggering narrative events that temporarily remove that hero from your roster. A balanced, well-rounded team rotation is always superior to hyper-specialization.
            </p>
            <p className="text-ink-light leading-relaxed">
              Finally, many beginners ignore the dialogue and narrative cues that hint at upcoming mission types. Dispatch rewards attentive players — if a character mentions a &quot;tech problem&quot; in the next episode, prepare your Intellect heroes. If someone warns about a &quot;dangerous situation,&quot; have your Vigor and Combat heroes ready. The game communicates its requirements through story context, not just UI elements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Do I need to play the tutorial before starting Episode 1?</h3>
                <p className="text-ink-light leading-relaxed">
                  Dispatch does not have a separate tutorial mode. Episode 1 (&quot;Orientation&quot;) serves as the tutorial and is integrated directly into the main story. You cannot skip it on a first playthrough. The episode teaches you all core mechanics through natural gameplay, so there is no separate tutorial to complete beforehand. Pay attention during Episode 1 — the concepts introduced here form the foundation for the entire game.
                </p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Can heroes die permanently in Dispatch?</h3>
                <p className="text-ink-light leading-relaxed">
                  Yes, hero death is a real possibility in Dispatch, though it is not common on the default difficulty. Sending a wounded hero into a high-risk mission, repeatedly making poor dispatch decisions, or ignoring critical story warnings can lead to permanent hero loss. When a hero dies, they are removed from your roster for the remainder of that playthrough, and the story adapts accordingly — sometimes in surprising ways that unlock unique narrative branches.
                </p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Which hero should I invest in first as a new player?</h3>
                <p className="text-ink-light leading-relaxed">
                  For your first playthrough, focus on Flambe, Phenomenon Man, and Prism as your core trio. Flambe is the most straightforward damage dealer and excels in the Combat missions that dominate early episodes. Phenomenon Man is a reliable tank who can absorb punishment on high-risk missions. Prism provides support and Charisma-based utility that opens up diplomatic options. Master these three first, then gradually incorporate Invisigal and Coupe into your rotation.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026 — Based on Dispatch patch 1.0 across PS5, PC, Nintendo Switch, and Xbox Series X|S.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/characters" className="text-accent hover:underline">All Characters &amp; Stats</Link></li>
              <li><Link href="/stats" className="text-accent hover:underline">Core Stats Deep Dive</Link></li>
              <li><Link href="/strategy" className="text-accent hover:underline">Advanced Strategy Guide</Link></li>
              <li><Link href="/builds" className="text-accent hover:underline">Best Hero Builds</Link></li>
              <li><Link href="/episodes" className="text-accent hover:underline">Complete Episode Walkthrough</Link></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-ink-light text-sm">
              <li>Always read mission briefs before dispatching.</li>
              <li>Rotate heroes to maintain team morale.</li>
              <li>Never send wounded heroes into combat.</li>
              <li>Pay attention to dialogue hints about future missions.</li>
              <li>Flambe + Phenomenon Man + Prism is the safest starter trio.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
