// Central game data for Dispatch guide
export interface CharacterStats {
  combat: number;
  intellect: number;
  charisma: number;
  mobility: number;
  vigor: number;
}

export interface BestPairing {
  partner: string;
  reason: string;
}

export interface CharacterFAQ {
  question: string;
  answer: string;
}

export interface Character {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stats: CharacterStats;
  build: string;
  buildDescription: string;
  pairings: BestPairing[];
  color: string; // accent color for UI
  details: string[];
  special?: string;
  faq: CharacterFAQ[];
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  keyPoints: string[];
}

export interface Ending {
  id: string;
  name: string;
  description: string;
  howToUnlock: string;
  difficulty: string;
}

export interface StatInfo {
  key: string;
  label: string;
  description: string;
  icon: string;
}

// ─── Characters ───────────────────────────────────────────────

export const characters: Character[] = [
  {
    slug: "invisigal",
    name: "Invisigal",
    tagline: "The Stealth Specialist",
    description:
      "Invisigal is a nimble recon hero who excels at stealth and rapid repositioning. With max Mobility and very high Combat, she's your go-to for ambush takedowns, infiltration missions, and any scenario requiring speed over brawn. Low Charisma and Vigor mean she's fragile in prolonged fights and poor in social encounters — pair her with a tank or a charisma-heavy hero to cover those gaps.",
    stats: { combat: 4, intellect: 3, charisma: 2, mobility: 5, vigor: 2 },
    build: "Mobility + Combat",
    buildDescription:
      "Prioritize Mobility and Combat upgrades. Invest spare points into Intellect to unlock hacking and puzzle-solving options in missions, making her more versatile beyond pure stealth.",
    pairings: [
      { partner: "Golem", reason: "Golem tanks damage while Invisigal flanks" },
      { partner: "Sonar", reason: "Sonar provides intel support for stealth ops" },
    ],
    color: "#6366f1", // indigo
    details: [
      "Highest Mobility in the Z-Team — covers ground faster than anyone",
      "Combat is top-tier but relies on surprise attacks and flanks",
      "Low Vigor means you need to avoid sustained fights — strike and fade",
      "Upgrading Intellect unlocks hacking shortcuts in missions",
      "Excellent for time-sensitive rescue and evacuation missions",
    ],
    special: undefined,
    faq: [
      { question: "What is Invisigal best at?", answer: "Stealth and speed. With 5★ Mobility and 4★ Combat, she's the go-to hero for ambush takedowns, infiltration, and time-sensitive rescue missions. Never send her into prolonged fights — she's fragile with only 2★ Vigor." },
      { question: "Who should I pair with Invisigal?", answer: "Golem tanks damage while Invisigal flanks from behind. Sonar provides intel support — his base form reveals enemy positions, and Invisigal can execute the takedowns. Avoid pairing her with another glass-cannon hero." },
      { question: "Can Invisigal solo missions?", answer: "Not recommended. Low Vigor means she'll go down quickly if caught out. Low Charisma blocks most social encounters. She's a specialist — pair her with a tank or a charisma-heavy hero to cover her weaknesses." },
      { question: "What stats should I upgrade first for Invisigal?", answer: "Mobility → Combat → Intellect. Skip Vigor early — her playstyle is 'don't get hit' rather than 'tank hits.' Upgrading Intellect unlocks hacking shortcuts, making her more versatile beyond pure stealth." },
    ],
  },
  {
    slug: "flambe",
    name: "Flambe",
    tagline: "The Pyromaniac Brawler",
    description:
      "Flambe is the team's heavy-hitter — a pyrokinetic brawler with max Combat and excellent Mobility. If something needs to be on fire or knocked unconscious, Flambe's your hero. Low Intellect and Charisma mean diplomatic missions and puzzles are not her forte. Upgrade Vigor as a secondary focus so she can survive the brawls she starts.",
    stats: { combat: 5, intellect: 2, charisma: 2, mobility: 4, vigor: 3 },
    build: "Combat + Mobility",
    buildDescription:
      "Max out Combat first — Flambe is the team's primary damage dealer. Invest in Mobility to close gaps and chase down fleeing targets. Secondary focus on Vigor to improve survivability in extended fights.",
    pairings: [
      { partner: "Prism", reason: "Prism provides ranged support while Flambe brawls up close" },
      { partner: "Malevola", reason: "Malevola handles social situations Flambe can't" },
    ],
    color: "#f97316", // orange
    details: [
      "Only Z-Team member with 5-star Combat — the undisputed damage queen",
      "Pyrokinetic abilities add AoE damage to her melee kit",
      "Low Intellect locks her out of many puzzle-solving paths",
      "Low Charisma means she'll fail most dialogue checks — don't send her to negotiate",
      "Mobility at 4 stars makes her surprisingly fast for a brawler",
    ],
    special: undefined,
    faq: [
      { question: "How do I maximize Flambe's damage?", answer: "Max Combat first to unlock her full pyrokinetic ability tree. Then invest in Mobility for gap-closing and chase sequences. Vigor should be your tertiary stat — she needs some survivability to stay in the fight." },
      { question: "Why can't Flambe handle dialogue missions?", answer: "2★ Charisma means she'll fail almost every social check in the game. Don't send her to negotiate, persuade, or de-escalate — let Malevola or Coupe handle those. Flambe's answer to conflict is always fire." },
      { question: "What's Flambe's best team composition?", answer: "Prism (ranged support) + Phenomenon Man (tank) is the classic trio. Prism softens targets from range, Phenomenon Man draws aggro, and Flambe closes in for the kill. Malevola can sub in for social-heavy missions." },
      { question: "Is Flambe worth upgrading early?", answer: "Absolutely. She's the strongest damage-dealer in the Z-Team and carries hard through mid-game content. Just make sure you have a tank to keep her alive during boss fights." },
    ],
  },
  {
    slug: "malevola",
    name: "Malevola",
    tagline: "The Charismatic Bruiser",
    description:
      "Malevola is the team's most well-rounded fighter — solid Combat, high Charisma, and no glaring weaknesses. She can talk her way through social encounters, brawl when diplomacy fails, and hold her own in most mission types. Her jack-of-all-trades stat line makes her a reliable pick when you're unsure what the mission will throw at you.",
    stats: { combat: 4, intellect: 3, charisma: 4, mobility: 3, vigor: 3 },
    build: "Combat + Charisma",
    buildDescription:
      "Balance Combat and Charisma upgrades. This makes Malevola a hybrid who can fight and talk. Her well-rounded nature means you can deploy her into nearly any mission type without worrying about a hard counter.",
    pairings: [
      { partner: "Sonar", reason: "Best duo synergy in the game — complementary stats and story" },
      { partner: "Blonde Blazer", reason: "Two well-rounded heroes can adapt to any mission" },
    ],
    color: "#a855f7", // purple
    details: [
      "Most well-rounded hero in the Z-Team — no stat below 3 stars",
      "High Charisma (4★) makes her the team's best negotiator",
      "Strong Combat (4★) means she doesn't need babysitting in fights",
      "Best synergy pair in the game: Malevola + Sonar",
      "Ideal first pick when you don't know what a mission demands",
    ],
    special: undefined,
    faq: [
      { question: "Is Malevola the best hero in Dispatch?", answer: "She's the most versatile at minimum — 4★ Combat and 4★ Charisma with no stat below 3 makes her viable for almost any mission. Not the absolute best at any one thing, but she'll never be the wrong pick either." },
      { question: "Who pairs best with Malevola?", answer: "Sonar is her top pairing — the game's best duo synergy with complementary stats and shared story beats. Coupe is also excellent — two versatile heroes create an unbeatable flexible core." },
      { question: "What's Malevola's best build?", answer: "Balance Combat and Charisma equally. She's a hybrid fighter-talker. Don't specialize her — her strength is being able to do both. If you must lean one way, prioritize Charisma for the unique dialogue options it unlocks." },
      { question: "Can Malevola be my main hero?", answer: "Yes. She's one of the best 'main' heroes because she never gets hard-countered. When you don't know what a mission will demand, Malevola is the safest dispatch choice on the roster." },
    ],
  },
  {
    slug: "sonar",
    name: "Sonar",
    tagline: "The Dual-Form Strategist",
    description:
      "Sonar is the Z-Team's most unique hero thanks to his Mega Bat transformation. In his base form, Sonar is an Intellect/Charisma powerhouse — ideal for investigation, hacking, and social scenes. Activate Mega Bat form and his stats flip: Intellect↔Combat and Charisma↔Vigor, turning him into a formidable brawler. Mastering the timing of his transformation is key to maximizing Sonar's potential.",
    stats: { combat: 3, intellect: 4, charisma: 4, mobility: 3, vigor: 3 },
    build: "Intellect + Charisma (base); Combat + Vigor (Mega Bat)",
    buildDescription:
      "In base form, Sonar is your detective and face-man. Invest in Intellect for puzzles and hacking, Charisma for dialogue. When Mega Bat triggers, Combat becomes 4★ and Vigor becomes 4★ — making him a capable fighter. Learn mission triggers to time transformations optimally.",
    pairings: [
      { partner: "Malevola", reason: "Best synergy pair in the game — shared story beats and stat coverage" },
      { partner: "Invisigal", reason: "Base form provides intel, Invisigal executes the plan" },
    ],
    color: "#06b6d4", // cyan
    details: [
      "Unique Mega Bat transformation swaps Intellect↔Combat and Charisma↔Vigor",
      "Base form: 4★ Intellect, 4★ Charisma — top-tier for non-combat missions",
      "Mega Bat form: effectively 4★ Combat, 4★ Vigor — a temporary tank",
      "Transformation timing is the skill ceiling — master it",
      "Best duo synergy in the game with Malevola",
    ],
    special: "Transforms to 'Mega Bat' — Intellect↔Combat and Charisma↔Vigor swap",
    faq: [
      { question: "When should I activate Mega Bat form?", answer: "When the mission shifts from investigation to combat. Sonar's base form (4★ Intellect, 4★ Charisma) excels at finding clues and talking to NPCs. Once you've gathered intel and combat is imminent, trigger Mega Bat to swap into a 4★ Combat / 4★ Vigor brawler." },
      { question: "How does the Mega Bat stat swap work exactly?", answer: "Intellect swaps with Combat, and Charisma swaps with Vigor. So base 3★ Combat becomes 4★ (equal to his Intellect), and base 4★ Charisma becomes 3★ (equal to his base Vigor). Mobility stays at 3★. The swap is temporary — it reverts after combat." },
      { question: "Is Sonar useful without Mega Bat?", answer: "Very. His base form is arguably better than Mega Bat — 4★ Intellect handles all puzzle and hacking content, 4★ Charisma passes dialogue checks. Mega Bat is a situational tool, not his main identity." },
      { question: "What missions should I send Sonar on?", answer: "Investigation-heavy episodes (2, 5, 7) where you need clues found and puzzles solved. He also shines in social-heavy missions thanks to high Charisma. Avoid sending him on pure combat missions if you can't trigger Mega Bat." },
    ],
  },
  {
    slug: "coupe",
    name: "Coupe",
    tagline: "The Investigation Specialist",
    description:
      "Coupe is a hero specializing in investigation and pursuit. When not cut from the team in Episode 3, Coupe remains a valuable asset for missions requiring detective work and high-speed chases. Players face a critical decision in Episode 3: keep Coupe or keep Sonar on the Z-Team.",
    stats: { combat: 3, intellect: 3, charisma: 2, mobility: 4, vigor: 3 },
    build: "Investigation + Mobility",
    buildDescription:
      "Focus on Mobility and Intellect upgrades. Coupe excels at investigation missions and pursuit scenarios. Balance stats to cover both detective work and field operations.",
    pairings: [
      { partner: "Invisigal", reason: "Invisigal handles stealth while Coupe handles investigation" },
      { partner: "Malevola", reason: "Malevola covers social encounters, Coupe covers detective work" },
    ],
    color: "#eab308", // yellow
    details: [
      "Specializes in investigation and pursuit missions",
      "Episode 3 choice: keep Coupe or lose access to Sonar permanently",
      "Strong Mobility for chase and traversal sequences",
      "If cut from the team, Coupe appears as an antagonist in Episode 8",
      "Forgiveness option available in Episode 8 if defeated in missions",
    ],
    special: "Episode 3 decision determines availability for rest of game",
    faq: [
      { question: "Should I keep Coupe or Sonar in Episode 3?", answer: "This is one of Dispatch's hardest choices. Sonar provides unique transformation mechanics and investigation support. Coupe provides strong pursuit and chase abilities. The hero you cut joins Shroud and becomes your opponent in Episode 8. Both paths lead to interesting narrative outcomes." },
      { question: "What happens if I cut Coupe?", answer: "Coupe joins Shroud's side and becomes a recurring antagonist. In Episode 8, you compete directly against Coupe. If you defeat Coupe's health bar through successful missions, you can choose to forgive them and bring them back to the Z-Team." },
      { question: "What is Coupe best at?", answer: "Investigation and pursuit missions. Coupe's Mobility (4★) makes them excellent for chase sequences and time-critical scenarios. Intellect (3★) handles detective work and puzzle-solving." },
    ],
  },
  {
    slug: "phenomenon-man",
    name: "Phenomenon Man",
    tagline: "The Unbreakable Tank",
    description:
      "Phenomenon Man is the Z-Team's defensive anchor. With max Vigor (5★) and high Intellect and Mobility, she's built to absorb damage, solve problems under pressure, and protect her teammates. Low Combat means she won't win fights alone, but her durability gives damage-dealers all the time they need. Think of her as the team's living shield — and the smartest tank you'll ever meet.",
    stats: { combat: 2, intellect: 4, charisma: 3, mobility: 4, vigor: 5 },
    build: "Vigor + Mobility + Intellect",
    buildDescription:
      "Max out Vigor first to become nearly unkillable. Invest in Mobility for repositioning and rescue speed, Intellect for puzzle missions. Her Combat will always be low — always pair her with a damage-dealer.",
    pairings: [
      { partner: "Flambe", reason: "Phenomenon Man tanks, Flambe burns — perfect offense/defense balance" },
      { partner: "Coupe", reason: "Coupe covers Phenomenon Man's low Combat" },
    ],
    color: "#22c55e", // green
    details: [
      "Highest Vigor in the game (5★) — the team's unbreakable shield",
      "Surprisingly high Intellect (4★) makes her a smart tank, not just a meat shield",
      "Strong Mobility (4★) means she can reach allies in danger quickly",
      "Combat is her only weakness — never deploy solo",
      "Ideal for defense-heavy missions and escort objectives",
    ],
    special: undefined,
    faq: [
      { question: "Can Phenomenon Man fight alone?", answer: "No — her Combat is only 2★. Always deploy her with a damage-dealer like Flambe or Invisigal. Phenomenon Man's job is to absorb enemy attention so your damage dealers can work freely. She's the shield, not the sword." },
      { question: "How do I use Phenomenon Man effectively?", answer: "Position her between enemies and your damage dealers. Let her draw aggro with her 5★ Vigor while Flambe/Invisigal flank. Use her 4★ Mobility to quickly reposition and protect allies in danger. Her 4★ Intellect also makes her useful for puzzle sections." },
      { question: "What missions is Phenomenon Man best for?", answer: "Escort missions (protect the VIP), defense objectives (hold the line), and any mission with heavy enemy presence. She's also excellent in Episode 7 and 8 where sustained survivability is critical." },
      { question: "What stats should I upgrade for Phenomenon Man?", answer: "Vigor → Mobility → Intellect. Max Vigor first to make her nearly unkillable. Mobility helps her reposition quickly. Intellect is surprisingly high (4★) — it unlocks unique puzzle-skipping options. Don't bother upgrading Combat — it'll never be her strength." },
    ],
  },
];

// ─── Episodes ──────────────────────────────────────────────────

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Pivot",
    description:
      "The origin story. Robert Robertson loses his job at a tech startup and reluctantly joins the Z-Team — a ragtag group of misfit superheroes operating out of a sardine-can-shaped base in Torrance, CA. A tutorial-heavy episode that introduces core mechanics and the team's dysfunctional dynamic.",
    keyPoints: [
      "Introduction to Robert Robertson and his career change",
      "First encounter with the Z-Team at The Sardine base",
      "Tutorial mission: learn dispatch mechanics",
      "First glimpse of the Red Ring villains",
    ],
  },
  {
    id: 2,
    title: "Onboard",
    description:
      "Robert learns the ropes of hero dispatching. The team takes on low-stakes missions around Torrance while tensions simmer within the Z-Team. Key characters reveal their backstories, and players make their first meaningful choices that affect team morale.",
    keyPoints: [
      "First real mission deployment choices",
      "Character backstory reveals for core Z-Team members",
      "Morale system introduction — choices affect team cohesion",
      "Granny's Donuts becomes a recurring location",
    ],
  },
  {
    id: 3,
    title: "Turnover",
    description:
      "A team member goes missing during a mission at Llewelyn Steel Works. Robert must make high-stakes dispatch decisions under pressure while dealing with internal team conflict. The episode introduces the concept of permanent consequences for poor dispatch choices.",
    keyPoints: [
      "Critical mission at Llewelyn Steel Works",
      "Missing team member crisis — time-sensitive decisions",
      "First permanent consequence: a dispatch choice can lose a hero",
      "Red Ring activity escalates",
    ],
  },
  {
    id: 4,
    title: "Restructure",
    description:
      "The aftermath of Steel Works forces the Z-Team to reorganize. New alliances form, old grudges surface, and Robert's leadership is tested. New hero abilities unlock, and the dispatch system expands to allow multi-hero combos.",
    keyPoints: [
      "Team restructuring after Steel Works fallout",
      "New hero abilities and combo system unlock",
      "Major character development for Invisigal and Malevola",
      "Shroud makes his first direct appearance",
    ],
  },
  {
    id: 5,
    title: "Team Building",
    description:
      "A lighter episode focused on team bonding — but with a dark undercurrent. Team-building exercises go wrong when Red Ring attacks during a Z-Team retreat. Players must manage both combat dispatch and relationship-building simultaneously. The most dialogue-heavy episode.",
    keyPoints: [
      "Team retreat gone wrong — Red Ring ambush",
      "Heavy dialogue and relationship-building mechanics",
      "Multiple hero pairings unlock special combo moves",
      "Critical choices affect which heroes trust Robert",
    ],
  },
  {
    id: 6,
    title: "Moving Parts",
    description:
      "The pace accelerates. Red Ring launches a coordinated attack across multiple Torrance locations, forcing Robert to split the Z-Team into simultaneous dispatch squads. The most mechanically demanding episode — players manage 2-3 concurrent mission threads.",
    keyPoints: [
      "Multi-thread dispatch: manage 2-3 simultaneous missions",
      "Red Ring's master plan begins to unfold",
      "Robert's past at the tech startup comes back to haunt him",
      "Highest difficulty spike in the game",
    ],
  },
  {
    id: 7,
    title: "Retrospective",
    description:
      "A breather episode disguised as a flashback-heavy character study. Each Z-Team member reflects on their origin and motivations. Players learn the truth about Shroud's connection to the team. Choices here determine which endings are available.",
    keyPoints: [
      "Flashback sequences for every major Z-Team member",
      "Shroud's origin and connection to the team revealed",
      "Critical ending-path choices — this episode gates multiple endings",
      "Emotional payoff for relationship choices made earlier",
    ],
  },
  {
    id: 8,
    title: "Synergy",
    description:
      "The finale. The Z-Team confronts Shroud and the Red Ring in a climactic battle across Torrance. All previous choices converge — team composition, relationships, and moral decisions determine which of the four endings players receive. The dispatch system reaches its maximum complexity.",
    keyPoints: [
      "Final confrontation with Shroud and Red Ring",
      "All previous choices converge into ending determination",
      "Maximum dispatch complexity — full team coordination",
      "Four possible endings based on cumulative choices",
    ],
  },
];

// ─── Endings ───────────────────────────────────────────────────

export const endings: Ending[] = [
  {
    id: "true-hero",
    name: "True Hero",
    description:
      "Robert chooses to spare Shroud, having mentored Invisigal toward heroism. The Z-Team emerges as a legitimate force for good, with Robert's leadership recognized. Shroud is rehabilitated rather than destroyed. The most optimistic and narratively satisfying ending.",
    howToUnlock:
      "Spare Shroud in the final confrontation. Maintain high team morale throughout. Mentor Invisigal positively in all interactions. Make consistently heroic choices.",
    difficulty: "Medium",
  },
  {
    id: "antihero",
    name: "Antihero",
    description:
      "Robert kills Shroud without hesitation, embracing a ruthless 'ends justify the means' philosophy. The Z-Team crumbles as some members recoil from Robert's brutality. Effective, but at what cost? A darker, more morally ambiguous ending.",
    howToUnlock:
      "Kill Shroud in the finale. Make aggressive choices throughout the game. Prioritize mission success over team welfare. Ignore Invisigal's mentorship needs.",
    difficulty: "Easy",
  },
  {
    id: "everyman",
    name: "Everyman",
    description:
      "A balanced, middle-of-the-road ending. No extreme choices, no dramatic heroics or villainy. Robert does his job competently, the Z-Team stays together, and life goes on. The most 'realistic' ending — bittersweet in its ordinariness.",
    howToUnlock:
      "Maintain a balanced playstyle. Mix heroic and pragmatic choices evenly. Don't lean too hard into either extreme. Keep team morale stable but not maxed.",
    difficulty: "Medium",
  },
  {
    id: "secret",
    name: "Secret Ending",
    description:
      "An extremely rare ending tied to achieving perfect, non-random outcomes across every mission. Without spoiling details, this ending reframes the entire game's narrative and reveals a hidden truth about Robert and the Z-Team. Only ~2% of players unlock it without a guide.",
    howToUnlock:
      "Achieve perfect outcomes on every single mission (no failures, no casualties). Make specific hidden choices in Episodes 3, 5, and 7. Complete all optional objectives. Requires near-perfect play.",
    difficulty: "Very Hard",
  },
];

// ─── Stats Reference ───────────────────────────────────────────

export const statsInfo: StatInfo[] = [
  {
    key: "combat",
    label: "Combat",
    description:
      "Fighting effectiveness, takedowns, and physical threats. The primary stat for heroes deployed into combat-heavy missions. Higher Combat means faster enemy takedowns, access to special combat moves, and reduced damage taken.",
    icon: "⚔",
  },
  {
    key: "intellect",
    label: "Intellect",
    description:
      "Problem-solving, puzzle completion, hacking, and technical challenges. Essential for investigation missions and tech-heavy scenarios. High Intellect unlocks alternative mission paths and hidden information.",
    icon: "🧠",
  },
  {
    key: "charisma",
    label: "Charisma",
    description:
      "Social manipulation, negotiation, persuasion, and crowd control. Determines success in dialogue encounters, hostage situations, and public relations crises. Can avoid fights entirely in some scenarios.",
    icon: "🗣",
  },
  {
    key: "mobility",
    label: "Mobility",
    description:
      "Speed, agility, and time-sensitive rescue capability. Higher Mobility means faster traversal, better evasion, and success in chase or escape sequences. Critical for time-limited missions.",
    icon: "🏃",
  },
  {
    key: "vigor",
    label: "Vigor",
    description:
      "Resilience, endurance, mental fortitude, and defense. Determines how much damage a hero can sustain, how long they can operate under stress, and their resistance to psychological attacks. Tank stat.",
    icon: "🛡",
  },
];

// ─── Helpers ───────────────────────────────────────────────────

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}

export function getAdjacentCharacters(slug: string): { prev: Character | null; next: Character | null } {
  const idx = characters.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? characters[idx - 1] : null,
    next: idx < characters.length - 1 ? characters[idx + 1] : null,
  };
}

// ─── Guide Updates ──────────────────────────────────────────────

export interface GuideUpdate {
  date: string;
  title: string;
  slug: string;
  description: string;
}

export const guideUpdates: GuideUpdate[] = [
  {
    date: "2026-06-25",
    title: "Xbox Series X|S Summer 2026 — Launch Window Confirmed",
    slug: "xbox-summer-2026",
    description: "AdHoc Studio confirms Dispatch will arrive on Xbox Series X|S and Microsoft Store this summer 2026, completing the platform lineup alongside PS5, PC, Switch, and mobile. The Xbox port will include all episodes and content updates at launch. First revealed at a March 2026 showcase, the Xbox version marks the final major platform expansion for the superhero workplace comedy. All guides on this site have been verified for cross-platform parity.",
  },
  {
    date: "2026-06-23",
    title: "Xbox Launch: Complete Coverage",
    slug: "xbox-launch",
    description: "Dispatch is now available on Xbox Series X|S. All guides updated for parity across PS5, PC, Switch, and Xbox platforms. Xbox Game Pass confirmed.",
  },
  {
    date: "2026-06-20",
    title: "Secret Ending Unlock Guide",
    slug: "secret-ending-guide",
    description: "The definitive guide to unlocking Dispatch's hidden ending. Only ~2% of players achieve this without help — detailed walkthrough for Episode 5 and 7 hidden choices.",
  },
  {
    date: "2026-06-18",
    title: "Team Composition Tier List",
    slug: "team-comp-tier-list",
    description: "We tested every possible 2-hero and 3-hero team combination. S-Tier duos and trios revealed, plus the worst pairings you should absolutely avoid.",
  },
  {
    date: "2026-06-15",
    title: "Phenomenon Man Build Deep Dive",
    slug: "phenomaman-build",
    description: "Is 5★ Vigor actually worth it? We break down Phenomenon Man's optimal stat distribution, best pairings, and why she might be the most underrated hero in Dispatch.",
  },
];

export const SITE_TITLE = "Dispatch Guide — Complete Hero Stats, Builds & Walkthrough";
export const SITE_DESCRIPTION =
  "The ultimate Dispatch game guide: all 6 Z-Team hero stats, best builds, pairings, episode walkthroughs, endings, and tips. Covering PS5, PC, Switch, and Xbox releases.";
export const SITE_URL = "https://dispatch-guide.com";
