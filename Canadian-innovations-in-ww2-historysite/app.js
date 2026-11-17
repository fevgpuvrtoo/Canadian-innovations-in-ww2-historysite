/**
 * NORTHERN INGENUITY: CANADIAN INNOVATIONS IN WORLD WAR II
 * Interactive Engine & Historical Dossier with Verified Archival Citations
 */

// ============================================================================
// 1. HISTORICAL INNOVATIONS DATABASE WITH TRUSTED SOURCES
// ============================================================================
const INNOVATIONS_DATA = [
  {
    id: "franks-g-suit",
    title: "The Franks Flying Suit (Anti-G Suit)",
    inventor: "Dr. Wilbur R. Franks & RCAF Medical Branch",
    facility: "Banting & Best Dept. of Medical Research, University of Toronto",
    location: "Toronto, Ontario",
    year: 1940,
    category: "aviation",
    categoryLabel: "Aviation & Flight",
    synopsis: "The world's first operational anti-G suit, using liquid-filled bladders to prevent Allied fighter pilots from blacking out during violent high-speed dogfights.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M50 8c-6 0-10 4-10 10 0 4 3 8 7 9v6h6v-6c4-1 7-5 7-9 0-6-4-10-10-10z" fill="rgba(245, 158, 11, 0.2)"/>
        <path d="M38 33h24l6 20-8 2-4-12-6 24h-4l-6-24-4 12-8-2 6-20z" fill="rgba(56, 189, 248, 0.15)"/>
        <path d="M42 42c3 2 13 2 16 0M40 56c4 2 16 2 20 0" stroke="#f59e0b" stroke-dasharray="2 2"/>
        <circle cx="50" cy="18" r="4" fill="#38bdf8"/>
      </svg>
    `,
    problem: "With the advent of 400+ mph monoplane fighters like the Spitfire and Hurricane, pilots pulling high-G turns or diving out of attacks experienced massive centrifugal forces. Blood drained instantly from the head down to the lower extremities, causing greyout, blackout, and fatal G-LOC (G-induced Loss of Consciousness).",
    solution: "Dr. Wilbur Franks realized that hydrostatic pressure exerted by an incompressible liquid jacket could counteract the gravitational draining of blood. He built North America's first human centrifuge in 1940 at the University of Toronto to test suits on himself and colleagues. His suit featured twin rubber bladders filled with water between unyielding fabric layers.",
    specs: [
      { label: "Operating Fluid", value: "Water (later adapted to compressed air)" },
      { label: "G-Tolerance Increase", value: "+1.5 to +2.5 G sustained" },
      { label: "First Combat Use", value: "Nov 1942 (Operation Torch, North Africa)" },
      { label: "Testing Facility", value: "No. 1 Clinical Investigation Unit (Toronto)" }
    ],
    impact: "First issued to Royal Navy Fleet Air Arm pilots flying Seafires over North Africa in 1942, the Franks Suit enabled Allied pilots to out-turn enemy Bf 109s and Zeros without losing consciousness, completely surprising Axis aviators.",
    legacy: "Dr. Franks' prototype directly founded modern aviation physiology. Every modern G-suit worn by military fighter pilots and all space suits worn by NASA and CSA astronauts are direct descendants of Franks' Canadian research.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "G-suit: Acceleration Stress & Anti-G Protective Garments",
        url: "https://www.britannica.com/technology/g-suit"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Wilbur Rounding Franks (Inventor of the G-Suit)",
        url: "https://www.thecanadianencyclopedia.ca/en/article/wilbur-rounding-franks"
      },
      {
        publisher: "Government of Canada / RCAF",
        title: "Aero-Medical Pioneer: Dr. Wilbur Franks & the Flying Suit",
        url: "https://www.canada.ca/en/air-force/corporate/history/heritage/heroes-of-rcaf/dr-wilbur-franks.html"
      }
    ]
  },

  {
    id: "walkie-talkie",
    title: "The C-58 Battlefield Walkie-Talkie",
    inventor: "Donald L. Hings, CM, MBE",
    facility: "National Research Council (NRC) & CM&S",
    location: "Ottawa, Ontario / Rossland, BC",
    year: 1942,
    category: "comms",
    categoryLabel: "Comms & Radar",
    synopsis: "The pioneering portable two-way combat transceiver that freed frontline infantry from fixed telephone wires and coined the immortal term 'walkie-talkie'.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="35" y="24" width="30" height="48" rx="4" fill="rgba(168, 85, 247, 0.15)"/>
        <line x1="42" y1="24" x2="42" y2="4" stroke="#a855f7" stroke-width="2.5"/>
        <circle cx="50" cy="40" r="8" fill="none" stroke="#f59e0b"/>
        <line x1="40" y1="56" x2="60" y2="56" stroke="currentColor"/>
        <line x1="40" y1="62" x2="60" y2="62" stroke="currentColor"/>
        <circle cx="58" cy="30" r="2" fill="#10b981"/>
      </svg>
    `,
    problem: "Frontline tactical infantry in 1939 relied on heavy field cable wires that were constantly severed by artillery barrages, or exposed runners who suffered appalling casualty rates. Existing radios were bulky vehicle installations incapable of beachhead assaults.",
    solution: "Donald Hings had created a portable pack radio for remote mining exploration in British Columbia in 1937. Upon Canada's entry into the war, he went to Ottawa's NRC laboratories to militarize the design. He engineered the C-58: a moisture-sealed, shockproof, tropicalized manpack radio with built-in voice filters so voices were audible amid thunderous gunfire.",
    specs: [
      { label: "Model Designation", value: "Wireless Set No. 58 / C-58" },
      { label: "Weight", value: "Approx. 19 lbs (8.6 kg) with battery" },
      { label: "Effective Range", value: "3 to 5 miles (frontline tactical net)" },
      { label: "Production Total", value: "Over 18,000 units manufactured" }
    ],
    impact: "Over 18,000 sets were produced in Toronto. The C-58 was vital in the Italian campaign, Normandy beachheads, and the Pacific jungles, providing platoons with instantaneous real-time artillery spotting and tactical command.",
    legacy: "Donald Hings held 55 patents in electronics and telecommunications. The radio frequency filtering and portable transceiver concepts he engineered paved the foundation for cellular phones, satellite radios, and modern mobile communications.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "Walkie-talkie: Development & Frontline Communications",
        url: "https://www.britannica.com/technology/walkie-talkie"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Donald Lewes Hings: Telecommunications Pioneer",
        url: "https://www.thecanadianencyclopedia.ca/en/article/donald-lewes-hings"
      },
      {
        publisher: "D.L. Hings Foundation",
        title: "Historical Record of the Packset C-58",
        url: "https://dlhings.ca"
      }
    ]
  },

  {
    id: "connaught-penicillin",
    title: "Penicillin Deep-Tank Mass Fermentation",
    inventor: "Connaught Medical Research Laboratories (U of T)",
    facility: "University of Toronto & Spadina Cres. Facility",
    location: "Toronto, Ontario",
    year: 1943,
    category: "medicine",
    categoryLabel: "Medicine & Trauma",
    synopsis: "Scaling Alexander Fleming's rare laboratory curiosity into industrial-scale life-saving deep fermentation, providing millions of doses for D-Day wounded.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M42 12h16v12l14 36a6 6 0 0 1-5 8H33a6 6 0 0 1-5-8l14-36V12z" fill="rgba(239, 68, 68, 0.15)"/>
        <line x1="38" y1="12" x2="62" y2="12" stroke="currentColor" stroke-width="3"/>
        <circle cx="46" cy="52" r="3" fill="#ef4444"/>
        <circle cx="56" cy="46" r="4" fill="#38bdf8"/>
        <circle cx="50" cy="60" r="2.5" fill="#f59e0b"/>
        <path d="M32 58c6-3 12 3 18 0s12-3 18 0" stroke="#10b981"/>
      </svg>
    `,
    problem: "Before WW2, bacterial wound infections like gas gangrene, septicemia, and pneumonia were major killers of wounded soldiers. Penicillin was discovered in 1928, but growing the Penicillium mold in shallow glass bottles produced only tiny, microscopic yields.",
    solution: "Having previously led the world in mass-producing insulin, Connaught Laboratories in Toronto rapidly converted facilities. Canadian biochemical engineers pioneered submerged deep-tank fermentation, bubbling sterile air through thousands of gallons of nutrient-rich corn steep liquor.",
    specs: [
      { label: "Output Surge", value: "From milliliters to billions of units" },
      { label: "D-Day Deployment", value: "Millions of doses shipped to Normandy" },
      { label: "Key Milestone", value: "First British Commonwealth mass facility" },
      { label: "Fatalities Reduction", value: "Bacterial gangrene deaths dropped by 80%+" }
    ],
    impact: "Connaught became the primary supplier of penicillin for Canadian and British armed forces. In June 1944, every wounded Canadian soldier on Juno Beach had access to pure penicillin, transforming lethal battlefield trauma into treatable injuries.",
    legacy: "Connaught's deep-fermentation engineering catalyzed the global commercial antibiotic industry, creating the modern pharmaceutical blueprint that virtually doubled 20th-century human life expectancy.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "Penicillin: Antibiotic Discovery, Action, & Mass Scaling",
        url: "https://www.britannica.com/science/penicillin"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Connaught Laboratories & Wartime Penicillin",
        url: "https://www.thecanadianencyclopedia.ca/en/article/connaught-laboratories"
      },
      {
        publisher: "University of Toronto Heritage",
        title: "Connaught Laboratories: Penicillin Production Campaign",
        url: "https://heritage.utoronto.ca/exhibits/connaught-laboratories"
      }
    ]
  },

  {
    id: "mcgill-rdx",
    title: "The McGill RDX High-Yield Synthesis",
    inventor: "Dr. J.H. Ross & Dept. of Chemistry, McGill University",
    facility: "McGill University & Shawinigan Chemicals",
    location: "Montreal & Shawinigan, Quebec",
    year: 1941,
    category: "materials",
    categoryLabel: "Materials & Chem",
    synopsis: "A revolutionized chemical synthesis that multiplied the production speed and explosive shattering power of RDX, fueling Allied depth charges and torpedoes.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="50 14 76 29 76 59 50 74 24 59 24 29" stroke="#f59e0b" fill="rgba(245, 158, 11, 0.15)"/>
        <circle cx="50" cy="44" r="8" fill="#ef4444"/>
        <path d="M50 20v8M68 34l-7 4M68 54l-7-4M50 68v-8M32 54l7-4M32 34l7 4" stroke="#e11d48"/>
      </svg>
    `,
    problem: "RDX (Cyclonite) was recognized as 150% more destructive than TNT with extreme shock velocity, but the existing British 'Woolwich' synthesis required dangerous white fuming nitric acid, had horrific yields, and frequently exploded during processing.",
    solution: "Dr. James Hamilton Ross and his team at McGill University devised the 'Ross Process' using paraformaldehyde, ammonium nitrate, and acetic anhydride. It was safer, cheaper, yielded double the output per batch, and eliminated the need for scarce nitric acid.",
    specs: [
      { label: "Explosive Energy", value: "1.5x more shattering impulse than TNT" },
      { label: "Detonation Velocity", value: "8,750 meters per second" },
      { label: "Primary Facility", value: "St. Maurice Chemicals (Shawinigan, QC)" },
      { label: "Strategic Sharing", value: "Secret formula handed to US (Holston plant)" }
    ],
    impact: "Canada built the Shawinigan plant, producing hundreds of tons of RDX daily. It was loaded into 'Torpex' for depth charges that cracked German U-boat pressure hulls, torpedoes, and the famous 'Bouncing Bombs' of the RAF 617 Dambusters raid.",
    legacy: "The McGill process remains one of the fundamental high-energy synthesis methodologies in energetic materials chemistry, influencing rocket propellants and modern demolition engineering.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "RDX (Cyclonite): High-Explosive Chemistry & Military Applications",
        url: "https://www.britannica.com/science/RDX"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Second World War Industrial Mobilization & Munitions",
        url: "https://www.thecanadianencyclopedia.ca/en/article/second-world-war-wwii"
      },
      {
        publisher: "Canadian Military History Journal",
        title: "Canada's Wartime RDX Revolution at Shawinigan",
        url: "https://www.canadianmilitaryhistory.ca"
      }
    ]
  },

  {
    id: "polymer-rubber",
    title: "Polymer Corp & The Synthetic Rubber Miracle",
    inventor: "Canadian Chemical Engineers & National Research Council",
    facility: "Polymer Corporation Limited (Crown Corp)",
    location: "Sarnia, Ontario",
    year: 1942,
    category: "materials",
    categoryLabel: "Materials & Chem",
    synopsis: "Erected in just 14 months to replace 90% of Allied natural rubber cut off by the Pacific War, ensuring every Allied truck, tank, and airplane kept rolling.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="50" cy="42" r="28" stroke="#f59e0b" stroke-width="6" fill="none"/>
        <circle cx="50" cy="42" r="16" stroke="currentColor" fill="rgba(0,0,0,0.3)"/>
        <circle cx="50" cy="42" r="6" fill="#f59e0b"/>
        <line x1="50" y1="26" x2="50" y2="14" stroke="#f59e0b" stroke-width="2"/>
        <line x1="50" y1="58" x2="50" y2="70" stroke="#f59e0b" stroke-width="2"/>
        <line x1="34" y1="42" x2="22" y2="42" stroke="#f59e0b" stroke-width="2"/>
        <line x1="66" y1="42" x2="78" y2="42" stroke="#f59e0b" stroke-width="2"/>
      </svg>
    `,
    problem: "In early 1942, Japanese forces rapidly seized British Malaya and the Dutch East Indies, cutting off over 90% of the global natural rubber supply. Without rubber for vehicle tires, aircraft seals, engine gaskets, and gas masks, the Allied war effort faced total paralysis.",
    solution: "C.D. Howe, Canada's Minister of Munitions and Supply, launched the Crown corporation Polymer Corp in Sarnia, Ontario, strategically located beside Imperial Oil refineries and Lake Huron freshwater. In a stunning 14 months, Canadian engineers built an integrated petro-chemical complex synthesizing Buna-S (styrene-butadiene) and Butyl rubber.",
    specs: [
      { label: "Plant Construction", value: "Record 14 months from bare ground" },
      { label: "Annual Output", value: "Over 50,000 tons of high-grade synthetic rubber" },
      { label: "Rubber Types", value: "Buna-S (treads) and Butyl rubber (inner tubes)" },
      { label: "Strategic Impact", value: "Complete Allied tire independence by 1944" }
    ],
    impact: "Sarnia became the synthetic rubber capital of the Commonwealth. Polymer Corp supplied tires and tread components for over 800,000 Canadian-built military vehicles and thousands of Allied bombers.",
    legacy: "Polymer Corporation proved that synthetic polymers could equal or exceed natural rubber. Post-war, it evolved into Polysar, establishing Canada as an international powerhouse in synthetic materials science and green elastomers.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "Synthetic Rubber: Wartime Development & Polymerization",
        url: "https://www.britannica.com/science/synthetic-rubber"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Polymer Corporation (Polysar Limited)",
        url: "https://www.thecanadianencyclopedia.ca/en/article/polymer-corporation"
      },
      {
        publisher: "Parks Canada Directory of Federal Heritage",
        title: "Polymer Corporation Chemical Complex National Historic Site",
        url: "https://www.pc.gc.ca"
      }
    ]
  },

  {
    id: "nrc-radar",
    title: "Type 268 Radar & Plan Position Indicator (PPI)",
    inventor: "NRC Radio Branch & Canadian Naval Scientists",
    facility: "National Research Council Radio Laboratories",
    location: "Ottawa, Ontario & Halifax, Nova Scotia",
    year: 1943,
    category: "comms",
    categoryLabel: "Comms & Radar",
    synopsis: "The compact microwave marine radar with a 360-degree top-down cathode-ray display that allowed escort corvettes to detect surfaced U-boats through pitch-black fog.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="50" cy="40" r="30" stroke="#38bdf8" stroke-dasharray="4 2"/>
        <circle cx="50" cy="40" r="18" stroke="#38bdf8" stroke-opacity="0.4"/>
        <circle cx="50" cy="40" r="6" fill="#38bdf8"/>
        <line x1="50" y1="40" x2="72" y2="20" stroke="#10b981" stroke-width="2.5"/>
        <circle cx="68" cy="24" r="3" fill="#ef4444"/>
        <path d="M50 10v60M20 40h60" stroke="#38bdf8" stroke-opacity="0.3"/>
      </svg>
    `,
    problem: "In the Battle of the Atlantic, German U-boats frequently surfaced at night or during thick North Atlantic sea fog to recharge their electric batteries and launch surface torpedo attacks, invisible to visual spotters.",
    solution: "The NRC's Radio Branch under Dr. John Henderson developed the Type 268 radar—a 3-centimeter microwave surface warning and navigation set tailored for small naval vessels. Paired with Canadian advances in the cathode-ray Plan Position Indicator (PPI), it swept 360 degrees to paint an unmistakable map-like picture of coastlines and U-boat conning towers.",
    specs: [
      { label: "Wavelength", value: "3 cm (X-band Microwave)" },
      { label: "Display Type", value: "PPI (Plan Position Indicator, 360° top-down sweep)" },
      { label: "Detection Range", value: "Up to 10 miles for surfaced submarine" },
      { label: "Deployment", value: "Fitted on RCN corvettes, frigates, and merchant ships" }
    ],
    impact: "Equipped on Canadian corvettes and destroyers, Type 268 stripped away the U-boats' greatest tactical weapon: concealment in darkness and mist. It enabled devastating night-time counterattacks.",
    legacy: "The Plan Position Indicator sweep display became the universal visual interface for all air traffic control towers, modern marine navigation systems, weather radar, and airport displays worldwide.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "Radar: Evolution of the Plan Position Indicator (PPI)",
        url: "https://www.britannica.com/technology/radar"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Radar in Canada: NRC Military Research",
        url: "https://www.thecanadianencyclopedia.ca/en/article/radar"
      },
      {
        publisher: "National Research Council of Canada",
        title: "Historical Science: NRC Microwave Radar Development",
        url: "https://nrc.canada.ca"
      }
    ]
  },

  {
    id: "project-habakkuk",
    title: "Project Habakkuk & The Pykrete Prototype",
    inventor: "Geoffrey Pyke (Concept), NRC & Canadian Military Engineers",
    facility: "National Research Council Secret Facility",
    location: "Patricia Lake, Jasper National Park, Alberta",
    year: 1943,
    category: "blackops",
    categoryLabel: "Secret Projects",
    synopsis: "The classified 1,000-ton model of an unsinkable iceberg aircraft carrier built out of Pykrete (ice + wood pulp) and refrigerated through a Canadian mountain summer.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 50 L88 50 L78 68 L22 68 Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
        <path d="M20 44 L50 28 L80 44" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 2"/>
        <line x1="8" y1="50" x2="92" y2="50" stroke="#7dd3fc" stroke-width="1.5"/>
        <rect x="42" y="38" width="16" height="12" fill="#0284c7"/>
      </svg>
    `,
    problem: "In 1942, the 'Mid-Atlantic Gap' was an ocean dead zone where land-based Allied aircraft could not reach. U-boats operated with impunity, sinking hundreds of thousands of tons of shipping every month.",
    solution: "Inventor Geoffrey Pyke suggested building colossal 2,000-foot aircraft carriers out of Pykrete: 86% ice reinforced with 14% wood pulp. Because Canada had freezing winters, vast timber forests, and world-class NRC engineers, Jasper National Park was chosen. In early 1943, a 1,000-ton, 60-foot prototype was secretly constructed at Patricia Lake with built-in refrigeration piping.",
    specs: [
      { label: "Prototype Weight", value: "1,000 tons (60 ft long, 30 ft wide)" },
      { label: "Pykrete Composition", value: "86% water ice + 14% spruce wood pulp" },
      { label: "Refrigeration", value: "1-horsepower motor pumping chilled air" },
      { label: "Survivability", value: "Resistant to torpedo detonations and .303 bullets" }
    ],
    impact: "The Patricia Lake experiment proved that a refrigerated Pykrete vessel could survive the summer heat without melting. By late 1943, however, the invention of ultra-long-range B-24 Liberators and escort carriers closed the Atlantic Gap, making full-scale production obsolete.",
    legacy: "The wooden frame and galvanized pipes of the prototype still rest at the bottom of Patricia Lake today, attracting historical diving expeditions and remaining one of the most imaginative engineering experiments in military history.",
    sources: [
      {
        publisher: "The Canadian Encyclopedia",
        title: "C.J. Mackenzie (NRC President) & Project Habakkuk",
        url: "https://www.thecanadianencyclopedia.ca/en/article/chalmers-jack-mackenzie"
      },
      {
        publisher: "Canadian War Museum",
        title: "Project Habakkuk: The Ice Aircraft Carrier Experiment",
        url: "https://www.warmuseum.ca"
      },
      {
        publisher: "Jasper-Yellowhead Museum & Archives",
        title: "Underwater Relics of Patricia Lake: The Habakkuk Expedition",
        url: "https://www.jaspermuseum.org"
      }
    ]
  },

  {
    id: "camp-x-hydra",
    title: "Camp X & The 'Hydra' Communications Grid",
    inventor: "Sir William Stephenson ('Intrepid') & Allied Engineers",
    facility: "Special Training School 103 (Camp X)",
    location: "Whitby & Oshawa, Lake Ontario",
    year: 1941,
    category: "blackops",
    categoryLabel: "Secret Projects",
    synopsis: "The ultra-secret Allied spy academy and the colossal high-speed 'Hydra' transmitter that linked MI6, the White House, and covert operatives across occupied Europe.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="50 8 40 72 60 72" stroke="#f43f5e" fill="rgba(244, 63, 94, 0.15)"/>
        <line x1="43" y1="28" x2="57" y2="28" stroke="currentColor"/>
        <line x1="41" y1="48" x2="59" y2="48" stroke="currentColor"/>
        <circle cx="50" cy="8" r="4" fill="#f59e0b"/>
        <path d="M34 16c-6 6-6 16 0 22M66 16c6 6 6 16 0 22" stroke="#38bdf8" stroke-dasharray="2 2"/>
      </svg>
    `,
    problem: "Before the US entered the war, the British Secret Intelligence Service (MI6) needed an unmonitored North American base to train covert agents in sabotage, guerrilla tactics, and silent killing, alongside an ultra-secure telecommunications pipeline to Washington.",
    solution: "Canadian industrialist and spymaster Sir William Stephenson established Camp X on an isolated farm on Lake Ontario. He assembled 'Hydra', a massive 10-kilowatt high-speed radio transmitter using reclaimed radio station components. Operating at 300 words per minute via perforated tape, it routed encrypted intelligence instantly across the Atlantic.",
    specs: [
      { label: "Transmitter Power", value: "10 kW customized shortwave" },
      { label: "Transmission Rate", value: "300 words per minute (Rockex & Enigma traffic)" },
      { label: "Operatives Trained", value: "Over 500 secret agents (including SOE & OSS)" },
      { label: "Famous Alumni", value: "Roald Dahl, Ian Fleming, William Donovan" }
    ],
    impact: "Camp X trained the first agents of the US Office of Strategic Services (OSS)—the direct precursor to the CIA. Hydra transmitted millions of words of Ultra decrypts between Bletchley Park, Winston Churchill, and Franklin D. Roosevelt.",
    legacy: "Camp X established the protocols for modern five-eyes intelligence sharing and covert signals intelligence, with Ian Fleming later crediting Stephenson as the real-life inspiration for James Bond.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "Sir William Stephenson: Spymaster 'Intrepid' & BSC",
        url: "https://www.britannica.com/biography/William-Stephenson"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Camp X: Special Training School 103",
        url: "https://www.thecanadianencyclopedia.ca/en/article/camp-x"
      },
      {
        publisher: "Canadian War Museum",
        title: "Secret Operations & Intelligence at Camp X",
        url: "https://www.warmuseum.ca"
      }
    ]
  },

  {
    id: "cat-gear",
    title: "Canadian Anti-Acoustic Torpedo (CAT) Gear",
    inventor: "Royal Canadian Navy & NRC Naval Scientists",
    facility: "HMCS Stadacona & NRC Laboratories",
    location: "Halifax, Nova Scotia",
    year: 1943,
    category: "naval",
    categoryLabel: "Naval & U-Boat",
    synopsis: "The simple, brilliant towed acoustic decoy that seduced German acoustic homing torpedoes away from warship propellers into empty ocean water.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 35h30l10 15h-45z" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981"/>
        <line x1="55" y1="42" x2="72" y2="52" stroke="#94a3b8" stroke-dasharray="3 2"/>
        <rect x="72" y="48" width="16" height="8" rx="2" fill="#f59e0b" stroke="#d97706"/>
        <path d="M78 62c4 4 10 4 14 0M76 68c8 6 18 6 24 0" stroke="#38bdf8"/>
      </svg>
    `,
    problem: "In autumn 1943, the Kriegsmarine unleashed the G7es 'Zaunkönig' (T-5) acoustic homing torpedo. The weapon tuned into the cavitation sound of Allied warship propellers, homing in autonomously and wiping out escort corvettes.",
    solution: "Canadian naval engineers rapidly designed CAT gear (Canadian Anti-Acoustic Torpedo): two parallel steel bars slotted together and towed several hundred meters astern of the ship. When towed through the water, water flow violently banged the steel bars together, generating a clattering racket far louder than the ship's propellers.",
    specs: [
      { label: "Deployment Method", value: "Towed 200–300 yards astern of ship" },
      { label: "Acoustic Decoy Sound", value: "High-decibel steel-on-steel cavitation rattle" },
      { label: "Manufacture Cost", value: "Low cost, fabricated from shipyard scrap metal" },
      { label: "Countermeasure Success", value: "Diverted German T-5 acoustic homing torpedoes" }
    ],
    impact: "CAT gear (and its British Foxer adaptation) neutralized Germany's high-tech acoustic torpedo offensive within weeks of its introduction, saving dozens of Allied destroyers and corvettes in late 1943 and 1944.",
    legacy: "CAT gear pioneered modern naval acoustic countermeasures (such as the modern AN/SLQ-25 Nixie system), which still uses towed acoustic noisemakers to defeat modern submarine homing torpedoes.",
    sources: [
      {
        publisher: "The Canadian Encyclopedia",
        title: "Battle of the Atlantic: Tactical Evolution & Decoys",
        url: "https://www.thecanadianencyclopedia.ca/en/article/battle-of-the-atlantic"
      },
      {
        publisher: "Canadian War Museum",
        title: "Allied Anti-Submarine Technology in the Atlantic",
        url: "https://www.warmuseum.ca"
      },
      {
        publisher: "Royal Canadian Navy History & Heritage",
        title: "Defeating the Acoustic Torpedo: Canadian Ingenuity at Sea",
        url: "https://www.canada.ca/en/navy/services/history.html"
      }
    ]
  },

  {
    id: "blood-serum",
    title: "Dried Blood Serum Plasma Transfusions",
    inventor: "Dr. Charles Best & Canadian Red Cross",
    facility: "Connaught Laboratories & Banting Institute",
    location: "Toronto, Ontario",
    year: 1940,
    category: "medicine",
    categoryLabel: "Medicine & Trauma",
    synopsis: "Developing shelf-stable dried human blood serum that could be reconstituted in muddy frontline foxholes with distilled water to prevent fatal hemorrhagic shock.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="38" y="24" width="24" height="42" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444"/>
        <line x1="44" y1="24" x2="44" y2="14" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="56" y1="24" x2="56" y2="14" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="42" y1="14" x2="58" y2="14" stroke="#cbd5e1" stroke-width="3"/>
        <circle cx="50" cy="45" r="6" fill="#f59e0b"/>
        <path d="M50 35v20M40 45h20" stroke="#ffffff" stroke-width="2"/>
      </svg>
    `,
    problem: "Wounded combat soldiers frequently died within minutes not from tissue destruction, but from traumatic circulatory shock due to rapid blood loss. Whole blood required refrigeration that did not exist on muddy battlefields and spoiled within days.",
    solution: "Dr. Charles Best (co-discoverer of insulin) spearheaded the Canadian blood donor project with the Red Cross and Connaught Labs. Canadian researchers perfected the freeze-drying process to dehydrate pooled human serum into a sterile golden powder packed into vacuum bottles.",
    specs: [
      { label: "Shelf Life", value: "Years without refrigeration in extreme heat/cold" },
      { label: "Donation Volume", value: "Over 2.5 million blood donations collected in Canada" },
      { label: "Administration", value: "Mixed with distilled water on battlefield in 3 minutes" },
      { label: "Safety Advantage", value: "No blood-type cross-matching required" }
    ],
    impact: "Over 400,000 bottles of Canadian dried serum were delivered to frontline combat medics across Europe and the Pacific, dropping battle shock mortality from 50% in WW1 to under 5% in WW2.",
    legacy: "The Canadian wartime blood collection network laid the blueprint for modern voluntary blood donation agencies, disaster trauma response systems, and plasma fractionation therapy.",
    sources: [
      {
        publisher: "Encyclopaedia Britannica",
        title: "Blood Transfusion: Plasma Fractions & Historical Blood Banks",
        url: "https://www.britannica.com/science/blood-transfusion"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Charles Herbert Best: Physiology & Medical Contributions",
        url: "https://www.thecanadianencyclopedia.ca/en/article/charles-herbert-best"
      },
      {
        publisher: "Canadian Red Cross Archives",
        title: "The Canadian Blood Donor Service in the Second World War",
        url: "https://www.redcross.ca"
      }
    ]
  },

  {
    id: "de-icing-systems",
    title: "Electro-Thermal Propeller & Wing De-Icing",
    inventor: "NRC Low Temperature Laboratory & de Havilland Canada",
    facility: "National Research Council Aerodynamics Division",
    location: "Ottawa, Ontario & Downsview, Ontario",
    year: 1941,
    category: "aviation",
    categoryLabel: "Aviation & Flight",
    synopsis: "Pioneering electrical heating elements embedded in propeller blades and airframes to prevent catastrophic ice accretion during sub-zero North Atlantic flights.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="50" cy="40" r="10" fill="#38bdf8"/>
        <ellipse cx="50" cy="40" rx="42" ry="7" stroke="#f59e0b" fill="rgba(245, 158, 11, 0.15)"/>
        <path d="M20 38q5-4 10 0t10 0" stroke="#ef4444"/>
        <path d="M60 42q5-4 10 0t10 0" stroke="#ef4444"/>
        <circle cx="20" cy="20" r="2" fill="#7dd3fc"/>
        <circle cx="80" cy="22" r="2" fill="#7dd3fc"/>
      </svg>
    `,
    problem: "Severe ice accumulation on aircraft wings, propellers, and carburetors altered aerodynamic lift and choked engines, causing hundreds of Allied bombers and ferry transport aircraft to plunge into the icy North Atlantic without firing a shot.",
    solution: "The NRC Low Temperature Laboratory engineered electro-thermal de-icing pads. By sandwiching conducting rubber or electrical wire elements into neoprene boots on propeller blades and wing leading edges, cyclic heating melted the micro-layer of ice, allowing aerodynamic airflow to blow it harmlessly away.",
    specs: [
      { label: "Heating Mechanism", value: "Conductive rubber & embedded cyclic heating wires" },
      { label: "Efficiency", value: "Fraction of the weight and power of pneumatic boots" },
      { label: "Testing Ground", value: "Cold-chamber wind tunnels & RCAF winter flights" },
      { label: "Aircraft Application", value: "Avro Lancaster, C-47, and de Havilland Mosquito" }
    ],
    impact: "Canadian de-icing systems enabled year-round transatlantic ferry flights of tens of thousands of Canadian-built aircraft to Britain and allowed RAF Bomber Command to operate through brutal winter cloud decks.",
    legacy: "Electro-thermal de-icing systems developed by the NRC established the design standard for all modern commercial and military jet aircraft leading-edge and propeller protection.",
    sources: [
      {
        publisher: "National Research Council of Canada",
        title: "NRC Low Temperature Laboratory: De-icing Aviation Innovations",
        url: "https://nrc.canada.ca"
      },
      {
        publisher: "Ingenium Canada (Aviation & Space Museum)",
        title: "Combating Cold Weather: Canadian Aviation Engineering",
        url: "https://ingeniumcanada.org"
      },
      {
        publisher: "The Canadian Encyclopedia",
        title: "Aviation History in Canada during WWII",
        url: "https://www.thecanadianencyclopedia.ca/en/article/aviation"
      }
    ]
  },

  {
    id: "sexton-artillery",
    title: "The Sexton 25-Pounder Self-Propelled Gun",
    inventor: "Canadian Military Headquarters & MLW Engineers",
    facility: "Montreal Locomotive Works (MLW)",
    location: "Montreal, Quebec",
    year: 1943,
    category: "naval",
    categoryLabel: "Naval & Armor",
    synopsis: "Marrying the robust Canadian Ram tank chassis with the famous British 25-pounder howitzer to create the Allied standard for mobile battlefield artillery.",
    graphicSvg: `
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="22" y="38" width="56" height="24" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b"/>
        <line x1="56" y1="36" x2="88" y2="24" stroke="#ffffff" stroke-width="3"/>
        <circle cx="32" cy="64" r="6" fill="#1e293b" stroke="#f59e0b"/>
        <circle cx="44" cy="64" r="6" fill="#1e293b" stroke="#f59e0b"/>
        <circle cx="56" cy="64" r="6" fill="#1e293b" stroke="#f59e0b"/>
        <circle cx="68" cy="64" r="6" fill="#1e293b" stroke="#f59e0b"/>
      </svg>
    `,
    problem: "Towed artillery could not keep pace with rapid motorized armored advances across Sicily, Italy, and France. British attempt to mount 25-pounders on Valentine chassis (the 'Bishop') had too little gun elevation and cramped ammo stowage.",
    solution: "Engineers at the Montreal Locomotive Works took Canada's domestically produced Ram tank chassis, opened the superstructure, and mounted the venerable Ordnance QF 25-pounder gun-howitzer with an elevation of +40 degrees, complete with 112 rounds of onboard ammunition.",
    specs: [
      { label: "Main Armament", value: "Ordnance QF 25-pounder (87.6 mm) gun-howitzer" },
      { label: "Chassis", value: "Canadian Ram / Grizzly (Continental R-975 radial)" },
      { label: "Production", value: "2,150 vehicles built in Montreal" },
      { label: "Mobility", value: "25 mph (40 km/h) road speed" }
    ],
    impact: "The Sexton provided mobile fire support for British and Canadian armored divisions in Normandy, opening the path through Caen and the Falaise Gap with relentless barrages.",
    legacy: "The Sexton proved the necessity of self-propelled artillery in combined-arms warfare, serving in Commonwealth armies well into the 1950s and shaping postwar motorized division doctrine.",
    sources: [
      {
        publisher: "The Canadian Encyclopedia",
        title: "Ram Tank & The Sexton Self-Propelled Gun",
        url: "https://www.thecanadianencyclopedia.ca/en/article/ram-tank"
      },
      {
        publisher: "Canadian War Museum",
        title: "Armoured Vehicles & Canadian Artillery Production",
        url: "https://www.warmuseum.ca"
      },
      {
        publisher: "Imperial War Museums",
        title: "25-Pdr SP Tracked Sexton History & Specifications",
        url: "https://www.iwm.org.uk"
      }
    ]
  }
];

// ============================================================================
// 2. WAR ROOM INTELLIGENCE EXAM DATA
// ============================================================================
const QUIZ_QUESTIONS = [
  {
    question: "What physical problem did Dr. Wilbur Franks' anti-G suit solve for Allied fighter pilots in 1940?",
    options: [
      "Extreme cabin freezing at 30,000 feet",
      "G-induced Loss of Consciousness (blackout) during high-G dogfight turns",
      "Poisonous carbon monoxide fumes leaking from Merlin engines",
      "Shrapnel penetration through non-armored cockpits"
    ],
    correct: 1,
    explanation: "Correct! Documented in Encyclopaedia Britannica and The Canadian Encyclopedia, the Franks Flying Suit used liquid-filled bladders to exert hydrostatic counter-pressure on the legs and abdomen, preventing blood from draining away from the brain during violent maneuvers."
  },
  {
    question: "Which Canadian inventor developed the first portable packset two-way radio, coining the term 'walkie-talkie'?",
    options: [
      "Alexander Graham Bell",
      "Donald L. Hings",
      "Reginald Fessenden",
      "Sir Sandford Fleming"
    ],
    correct: 1,
    explanation: "Correct! As cited in Britannica and The Canadian Encyclopedia, Donald L. Hings invented the portable packset radio in British Columbia and militarized it at the NRC in Ottawa into the famous C-58 Walkie-Talkie (Wireless Set No. 58)."
  },
  {
    question: "What was 'Pykrete', the experimental material secretly tested at Patricia Lake, Alberta in 1943 for Project Habakkuk?",
    options: [
      "A mixture of 86% water ice and 14% wood pulp / sawdust",
      "A synthetic liquid rubber created from petroleum gases",
      "An aluminum-magnesium alloy for aircraft frames",
      "A super-hard bulletproof concrete made with heavy river sand"
    ],
    correct: 0,
    explanation: "Correct! Historical records from the Canadian War Museum and NRC show that Pykrete was an ice-wood pulp composite. It was bullet-resistant, slow-melting, and formed the hull of the secret 1,000-ton prototype tested in Jasper National Park."
  },
  {
    question: "Why was the Crown corporation Polymer Corp built with extreme urgency in Sarnia, Ontario in 1942?",
    options: [
      "To produce heavy water for the Manhattan Project",
      "To manufacture synthetic rubber after Japan cut off 90% of natural rubber supplies",
      "To assemble Spitfire aircraft wings out of Canadian plywood",
      "To build radar antennas for convoy escorts"
    ],
    correct: 1,
    explanation: "Correct! As recorded in The Canadian Encyclopedia and Britannica, Japanese conquests in Southeast Asia cut off over 90% of Allied natural rubber. Polymer Corp was constructed in Sarnia in just 14 months to manufacture synthetic rubber from petroleum gases."
  },
  {
    question: "Which Toronto institution pioneered deep-tank fermentation to mass-produce penicillin in time for the Normandy D-Day invasion?",
    options: [
      "Mount Sinai Hospital",
      "Connaught Medical Research Laboratories (University of Toronto)",
      "National Research Council Aviation Lab",
      "The Royal Canadian Medical Corps Depot"
    ],
    correct: 1,
    explanation: "Correct! According to University of Toronto archives and The Canadian Encyclopedia, Connaught Laboratories scaled up deep-tank fermentation, producing millions of doses of penicillin in time to treat Allied casualties on Juno Beach."
  }
];

// ============================================================================
// 3. PROCEDURAL AUDIO SYNTHESIZER (WEB AUDIO API)
// ============================================================================
class WartimeAudio {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 750, duration = 0.08) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playShot() {
    if (!this.enabled || !this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 400;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playSonarPing() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playExplosion() {
    if (!this.enabled || !this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.6;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.5);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playMorse() {
    if (!this.enabled || !this.ctx) return;
    this.playBeep(800, 0.06);
    setTimeout(() => this.playBeep(800, 0.06), 100);
    setTimeout(() => this.playBeep(800, 0.16), 200);
  }
}

const audioFX = new WartimeAudio();

// ============================================================================
// 4. APPLICATION STATE & DOM CONTROLLER
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const container = document.getElementById('innovations-container');
  const searchInput = document.getElementById('dossier-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const filterButtons = document.querySelectorAll('.filter-pill');
  const noResults = document.getElementById('no-results');
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  const countAll = document.getElementById('count-all');

  // Modal elements
  const modal = document.getElementById('detail-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCloseBottom = document.getElementById('modal-close-bottom');

  // Audio & Theme toggles
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (countAll) {
    countAll.textContent = INNOVATIONS_DATA.length;
  }

  // --------------------------------------------------------------------------
  // INTERACTIVE MODULE 1: G-FORCE FLIGHT & CENTRIFUGE SIMULATOR
  // --------------------------------------------------------------------------
  const gSlider = document.getElementById('g-slider');
  const gDisplayVal = document.getElementById('g-display-val');
  const hudGVal = document.getElementById('hud-g-val');
  const hudVisionStatus = document.getElementById('hud-vision-status');
  const hudSuitStatus = document.getElementById('hud-suit-status');
  const gsuitToggle = document.getElementById('gsuit-toggle');
  const blackoutVignette = document.getElementById('blackout-vignette');
  const glocAlert = document.getElementById('gloc-alert');
  const skyHorizon = document.getElementById('sky-horizon');

  const telBp = document.getElementById('tel-bp');
  const telHr = document.getElementById('tel-hr');
  const telBladder = document.getElementById('tel-bladder');
  const telDanger = document.getElementById('tel-danger');
  const physioStatusBox = document.getElementById('physio-status-box');

  function updateGSimulator() {
    const gVal = parseFloat(gSlider.value);
    const suitActive = gsuitToggle.checked;

    gDisplayVal.textContent = `${gVal.toFixed(1)} G`;
    hudGVal.textContent = `${gVal.toFixed(1)} G`;

    // Roll/tilt visual effect on horizon
    const tilt = (gVal - 1.0) * 4;
    skyHorizon.style.transform = `scale(1.2) rotate(${tilt}deg) translateY(${(gVal - 1.0) * 8}px)`;

    if (suitActive) {
      hudSuitStatus.textContent = "ENGAGED (WATER BLADDERS ACTIVE)";
      hudSuitStatus.style.color = "#10b981";
      telBladder.textContent = `${(gVal * 0.85).toFixed(1)} PSI (Pressurized)`;
    } else {
      hudSuitStatus.textContent = "DISENGAGED (NO PROTECTION)";
      hudSuitStatus.style.color = "#ef4444";
      telBladder.textContent = "0.0 PSI (Passive)";
    }

    if (!suitActive) {
      // Without G-suit: blood drains away from brain above 3.5G
      if (gVal <= 2.5) {
        blackoutVignette.style.opacity = '0';
        glocAlert.style.display = 'none';
        hudVisionStatus.textContent = "100% (CLEAR)";
        hudVisionStatus.style.color = "#38bdf8";

        telBp.textContent = `${Math.round(120 - (gVal - 1) * 10)} mmHg`;
        telHr.textContent = `${Math.round(75 + (gVal - 1) * 8)} BPM`;
        telDanger.textContent = "LOW (Tolerable Acceleration)";
        telDanger.style.color = "#10b981";
        physioStatusBox.className = "physio-status-box";
        physioStatusBox.textContent = "Normal flight maneuvering. Retinal arteries receive adequate blood pressure.";
      } else if (gVal <= 4.5) {
        // Greyout / Tunnel Vision
        const op = (gVal - 2.5) / 2.0 * 0.75;
        blackoutVignette.style.opacity = op.toString();
        blackoutVignette.style.background = 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.95) 100%)';
        glocAlert.style.display = 'none';
        hudVisionStatus.textContent = "TUNNEL VISION (GREYOUT)";
        hudVisionStatus.style.color = "#f59e0b";

        telBp.textContent = `${Math.round(100 - (gVal - 2.5) * 25)} mmHg (Declining)`;
        telHr.textContent = `${Math.round(90 + (gVal - 2.5) * 20)} BPM`;
        telDanger.textContent = "MODERATE (Impaired Peripheral Sight)";
        telDanger.style.color = "#f59e0b";
        physioStatusBox.className = "physio-status-box danger";
        physioStatusBox.textContent = "Centrifugal force is pulling arterial blood into the pilot's legs and abdomen. Peripheral retinal ischemia begins.";
      } else {
        // Full Blackout / G-LOC
        blackoutVignette.style.opacity = '1';
        blackoutVignette.style.background = '#000000';
        glocAlert.style.display = 'block';
        hudVisionStatus.textContent = "BLACKOUT (G-LOC ACTIVE)";
        hudVisionStatus.style.color = "#ef4444";

        telBp.textContent = "35 mmHg (Severe Ischemia)";
        telHr.textContent = "155 BPM (Tachycardia)";
        telDanger.textContent = "CRITICAL (G-LOC LOSS OF CONSCIOUSNESS)";
        telDanger.style.color = "#ef4444";
        physioStatusBox.className = "physio-status-box danger";
        physioStatusBox.textContent = "PILOT BLACKOUT: Cerebral blood pressure collapsed below critical oxygen threshold. Total unconsciousness. Spitfire risks lawn-darting without immediate recovery!";
        audioFX.playBeep(450, 0.2);
      }
    } else {
      // With Franks G-Suit: water bladders exert external hydrostatic pressure on calves, thighs, and abdomen
      glocAlert.style.display = 'none';
      if (gVal <= 6.5) {
        blackoutVignette.style.opacity = '0';
        hudVisionStatus.textContent = "100% (STABILIZED BY FRANKS SUIT)";
        hudVisionStatus.style.color = "#10b981";

        telBp.textContent = `${Math.round(115 - (gVal - 1) * 4)} mmHg (Protected)`;
        telHr.textContent = `${Math.round(80 + (gVal - 1) * 6)} BPM`;
        telDanger.textContent = "SAFE (+2.5G Protection Margin)";
        telDanger.style.color = "#10b981";
        physioStatusBox.className = "physio-status-box";
        physioStatusBox.textContent = "FRANKS SUIT ACTIVE: Incompressible liquid bladders automatically push blood back into the upper torso. The pilot retains 100% full vision and situational awareness!";
      } else {
        // Extreme G (7G+)
        blackoutVignette.style.opacity = '0.35';
        hudVisionStatus.textContent = "SLIGHT DIMMING (SUSTAINED COMBAT TURN)";
        hudVisionStatus.style.color = "#38bdf8";

        telBp.textContent = "88 mmHg (Maintained)";
        telHr.textContent = "135 BPM";
        telDanger.textContent = "ELEVATED (High-G Dogfight)";
        telDanger.style.color = "#38bdf8";
        physioStatusBox.className = "physio-status-box";
        physioStatusBox.textContent = "Dr. Wilbur Franks' suit provides +2.0 to +2.5 G of extra tolerance. The pilot out-turns Axis fighters (Bf 109 / Zero) without losing consciousness!";
      }
    }
  }

  if (gSlider && gsuitToggle) {
    gSlider.addEventListener('input', () => {
      audioFX.playBeep(700 + parseFloat(gSlider.value) * 60, 0.03);
      updateGSimulator();
    });

    gsuitToggle.addEventListener('change', () => {
      audioFX.playBeep(850, 0.05);
      updateGSimulator();
    });

    updateGSimulator();
  }

  // --------------------------------------------------------------------------
  // INTERACTIVE MODULE 2: PROJECT HABAKKUK — NRC PATRICIA LAKE FIELD TEST (1943)
  // All framing set entirely within WW2 context. Source: The Canadian Encyclopedia,
  // Canadian War Museum. No modern materials-science language.
  // --------------------------------------------------------------------------
  const PROTOCOL_DESCS = {
    bullet: `<strong style="color:#e2e8f0;">PROTOCOL 1 — Ballistic Resistance (.303 Lee-Enfield):</strong> German U-boats carry 20mm deck guns and boarding parties armed with standard rifles. The hull of HMS Habakkuk must stop small-arms fire without splintering. Fire a standard .303 Lee-Enfield round — the weapon carried by every Commonwealth soldier — at the material sample. Record penetration depth and fracture behaviour for Admiralty files.`,
    torch: `<strong style="color:#e2e8f0;">PROTOCOL 2 — Thermal Endurance (Canadian Summer, 1943):</strong> Habakkuk must survive a full year at sea in Atlantic waters. The Patricia Lake prototype was kept frozen through an Alberta summer using only a 1-horsepower compressor. Apply sustained summer heat to the sample and record whether the spruce-pulp matrix insulates the frozen core long enough to remain structurally viable on a North Atlantic patrol.`,
    crush: `<strong style="color:#e2e8f0;">PROTOCOL 3 — Depth-Charge Shockwave Resistance:</strong> Royal Canadian Navy destroyers routinely attack submerged U-boats with Hedgehog depth charges detonating at 50–300 feet. If Habakkuk is attacked from below, its keel must absorb the underwater shockwave without shattering. Apply a simulated explosive pressure wave to the material sample and record the structural response for the Admiralty.`
  };

  const stressTabBtns = document.querySelectorAll('.stress-tab-btn');
  const pulpSlider = document.getElementById('pulp-slider');
  const pulpPercentLabel = document.getElementById('pulp-percent-label');
  const matTitleLabel = document.getElementById('mat-title-label');
  const testTarget = document.getElementById('test-target');
  const targetLabel = document.getElementById('target-label');
  const bullet = document.getElementById('bullet');
  const flameTorch = document.getElementById('flame-torch');
  const pressRam = document.getElementById('press-ram');
  const fireTestBtn = document.getElementById('fire-test-btn');
  const resetTestBtn = document.getElementById('reset-test-btn');
  const protocolDesc = document.getElementById('protocol-desc');

  const metricCompressive = document.getElementById('metric-compressive');
  const metricShatter = document.getElementById('metric-shatter');
  const metricMelt = document.getElementById('metric-melt');
  const metricVerdict = document.getElementById('metric-verdict');

  let activeStressMode = 'bullet';

  function updatePykreteProperties() {
    const pulp = parseInt(pulpSlider.value, 10);

    if (pulp === 0) {
      pulpPercentLabel.textContent = 'Pure Water Ice — Control Sample (0% pulp)';
      matTitleLabel.textContent = 'Pure Water Ice (H\u2082O) — NRC Control Block';
      targetLabel.textContent = 'Pure Ice (Control)';
      testTarget.dataset.material = 'ice';
      metricCompressive.textContent = 'Weak and brittle — shatters under sharp blows';
      metricShatter.textContent = 'None — instant catastrophic fracture on impact';
      metricMelt.textContent = 'Rapid — melts quickly in summer temperatures';
    } else if (pulp < 10) {
      pulpPercentLabel.textContent = `Low-Cellulose Mix (${pulp}% spruce pulp) — Below NRC Standard`;
      matTitleLabel.textContent = `Experimental Pykrete — ${100 - pulp}% Ice + ${pulp}% Spruce Pulp`;
      targetLabel.textContent = `Pykrete (${pulp}% Pulp) — Sub-Standard`;
      testTarget.dataset.material = 'pykrete';
      metricCompressive.textContent = `Moderate — holds shape under light loads`;
      metricShatter.textContent = 'Some fracture resistance — not adequate for hull armour';
      metricMelt.textContent = 'Moderate — pulp provides some insulation';
    } else {
      pulpPercentLabel.textContent = `Standard Pykrete (${pulp}% spruce pulp) — NRC-Approved Formula`;
      matTitleLabel.textContent = `NRC Pykrete — ${100 - pulp}% Water Ice + ${pulp}% Spruce Wood Pulp`;
      targetLabel.textContent = `Pykrete (${pulp}% Pulp) — Wartime Formula`;
      testTarget.dataset.material = 'pykrete';
      metricCompressive.textContent = 'Strong — comparable to low-grade concrete; holds hull form';
      metricShatter.textContent = 'High — spruce fibres arrest fracture lines before they propagate';
      metricMelt.textContent = 'Very slow — wood-pulp jacket insulates the frozen core';
    }
  }

  stressTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      audioFX.playBeep(650, 0.04);
      stressTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStressMode = btn.dataset.mode;
      resetPykreteVisuals();

      if (protocolDesc) {
        protocolDesc.innerHTML = PROTOCOL_DESCS[activeStressMode] || '';
      }

      if (activeStressMode === 'bullet') {
        fireTestBtn.textContent = '\u25b6 Fire .303 Lee-Enfield Round';
      } else if (activeStressMode === 'torch') {
        fireTestBtn.textContent = '\u25b6 Apply Summer Heat (Patricia Lake, July 1943)';
      } else {
        fireTestBtn.textContent = '\u25b6 Simulate Depth-Charge Shockwave';
      }
    });
  });

  if (pulpSlider) {
    pulpSlider.addEventListener('input', () => {
      audioFX.playBeep(550 + parseInt(pulpSlider.value, 10) * 20, 0.02);
      resetPykreteVisuals();
      updatePykreteProperties();
    });
  }

  function resetPykreteVisuals() {
    testTarget.classList.remove('shattered', 'dented', 'melted', 'crushed');
    bullet.classList.remove('firing');
    flameTorch.classList.remove('active');
    pressRam.classList.remove('pressing');
    metricVerdict.className = 'readout-verdict';
    metricVerdict.textContent = 'Sample mounted on Patricia Lake test rig. Ready to execute protocol.';
  }

  if (fireTestBtn) {
    fireTestBtn.addEventListener('click', () => {
      const pulp = parseInt(pulpSlider.value, 10);
      resetPykreteVisuals();

      // ---- PROTOCOL 1: .303 Lee-Enfield Ballistic Test ----
      if (activeStressMode === 'bullet') {
        audioFX.playShot();
        bullet.classList.add('firing');

        setTimeout(() => {
          if (pulp < 8) {
            testTarget.classList.add('shattered');
            metricVerdict.className = 'readout-verdict';
            metricVerdict.textContent =
              'FAILED — CRITICAL SHATTER: Pure ice splintered catastrophically when struck by the .303 round. No structural integrity survives. This material cannot serve as a warship hull — NRC engineers discard the control sample.';
          } else {
            testTarget.classList.add('dented');
            metricVerdict.className = 'readout-verdict success';
            metricVerdict.textContent =
              `PROTOCOL PASSED — ROUND STOPPED: The .303 Lee-Enfield projectile penetrated barely 2 inches before the spruce-fibre matrix arrested its progress. No crack propagation observed. C.J. Mackenzie cables the Admiralty: "The ${pulp}% pulp formula is bullet-resistant. Habakkuk is viable." (Patricia Lake field trial, 1943)`;
          }
        }, 300);

      // ---- PROTOCOL 2: Thermal Endurance (Summer 1943) ----
      } else if (activeStressMode === 'torch') {
        audioFX.playBeep(400, 0.3);
        flameTorch.classList.add('active');

        setTimeout(() => {
          if (pulp < 8) {
            testTarget.classList.add('melted');
            metricVerdict.className = 'readout-verdict';
            metricVerdict.textContent =
              'FAILED — RAPID LIQUEFACTION: Pure ice melted quickly under summer conditions. The 1,000-ton Patricia Lake prototype could never have survived a North Atlantic deployment without the wood-pulp insulating jacket. NRC engineers record the control-sample failure.';
          } else {
            metricVerdict.className = 'readout-verdict success';
            metricVerdict.textContent =
              `PROTOCOL PASSED — CORE PRESERVED: Summer heat evaporated surface water, but the remaining spruce fibres formed a dry insulating crust that protected the frozen interior. The actual Patricia Lake prototype — ${pulp}% pulp formula — survived the entire Alberta summer of 1943 using only a 1-horsepower refrigeration compressor. NRC field report confirms: Habakkuk survives summer latitudes.`;
          }
        }, 600);

      // ---- PROTOCOL 3: Depth-Charge Shockwave ----
      } else if (activeStressMode === 'crush') {
        audioFX.playBeep(320, 0.4);
        pressRam.classList.add('pressing');

        setTimeout(() => {
          if (pulp < 8) {
            testTarget.classList.add('shattered');
            metricVerdict.className = 'readout-verdict';
            metricVerdict.textContent =
              'FAILED — BRITTLE SHEAR: Pure ice shattered along internal crystal fracture planes when subjected to the pressure wave, the same failure mode seen when sea ice is broken by ship hulls. Useless for a vessel expected to operate alongside Navy destroyers firing depth charges. Control sample discarded.';
          } else {
            metricVerdict.className = 'readout-verdict success';
            metricVerdict.textContent =
              `PROTOCOL PASSED — SHOCKWAVE ABSORBED: Pykrete (${pulp}% pulp) absorbed the simulated depth-charge pressure wave without cracking. The interlocked spruce fibres distribute the blast load across thousands of wood-fibre bonds rather than concentrating it in a single fracture plane. NRC engineers log the result: Habakkuk's hull survives proximity depth-charge detonation.`;
          }
        }, 400);
      }
    });
  }

  if (resetTestBtn) {
    resetTestBtn.addEventListener('click', () => {
      audioFX.playBeep(500, 0.04);
      resetPykreteVisuals();
      updatePykreteProperties();
    });
  }

  // Initialise display
  updatePykreteProperties();

    // INTERACTIVE MODULE 3: BATTLE OF THE ATLANTIC RADAR & U-BOAT HUNTER
  // --------------------------------------------------------------------------
  const radarCanvas = document.getElementById('radar-canvas');
  let radarCtx = null;
  let radarAngle = 0;
  let uboatDetected = true;
  let uboatPosition = { x: 230, y: 110, bearing: 45, dist: 3.8 };
  let torpedoIncoming = false;
  let catDeployed = false;
  let uboatSunk = false;

  const radarSweepBtn = document.getElementById('radar-sweep-btn');
  const deployCatBtn = document.getElementById('deploy-cat-btn');
  const dropDepthBtn = document.getElementById('drop-depth-btn');
  const resetTacticalBtn = document.getElementById('reset-tactical-btn');
  const tacticalLog = document.getElementById('tactical-log');
  const tacticalAlertBadge = document.getElementById('tactical-alert-badge');

  function logTactical(msg) {
    if (!tacticalLog) return;
    const time = new Date().toTimeString().split(' ')[0];
    tacticalLog.innerHTML += `<br>[${time}] ${msg}`;
    tacticalLog.scrollTop = tacticalLog.scrollHeight;
  }

  if (radarCanvas && radarCanvas.getContext) {
    radarCtx = radarCanvas.getContext('2d');

    function drawRadar() {
      if (!radarCtx) return;
      const w = radarCanvas.width;
      const h = radarCanvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Fading background for phosphor trail
      radarCtx.fillStyle = 'rgba(3, 20, 8, 0.12)';
      radarCtx.fillRect(0, 0, w, h);

      // Rings
      radarCtx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      radarCtx.lineWidth = 1;
      for (let r = 40; r <= 150; r += 35) {
        radarCtx.beginPath();
        radarCtx.arc(cx, cy, r, 0, Math.PI * 2);
        radarCtx.stroke();
      }

      // Crosshairs
      radarCtx.beginPath();
      radarCtx.moveTo(cx, 15);
      radarCtx.lineTo(cx, h - 15);
      radarCtx.moveTo(15, cy);
      radarCtx.lineTo(w - 15, cy);
      radarCtx.stroke();

      // Sweep line
      radarAngle += 0.035;
      if (radarAngle >= Math.PI * 2) radarAngle = 0;

      const sx = cx + Math.cos(radarAngle) * 155;
      const sy = cy + Math.sin(radarAngle) * 155;

      radarCtx.strokeStyle = '#22c55e';
      radarCtx.lineWidth = 2;
      radarCtx.beginPath();
      radarCtx.moveTo(cx, cy);
      radarCtx.lineTo(sx, sy);
      radarCtx.stroke();

      // Center Corvette ship marker
      radarCtx.fillStyle = '#38bdf8';
      radarCtx.beginPath();
      radarCtx.arc(cx, cy, 4, 0, Math.PI * 2);
      radarCtx.fill();

      // U-boat target blip
      if (uboatDetected && !uboatSunk) {
        radarCtx.fillStyle = '#ef4444';
        radarCtx.beginPath();
        radarCtx.arc(uboatPosition.x, uboatPosition.y, 5, 0, Math.PI * 2);
        radarCtx.fill();

        // Pulsing target beacon
        radarCtx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
        radarCtx.beginPath();
        radarCtx.arc(uboatPosition.x, uboatPosition.y, 10 + Math.sin(Date.now() / 200) * 3, 0, Math.PI * 2);
        radarCtx.stroke();
      }

      // CAT gear decoy marker
      if (catDeployed) {
        radarCtx.fillStyle = '#f59e0b';
        radarCtx.beginPath();
        radarCtx.arc(cx - 30, cy + 30, 4, 0, Math.PI * 2);
        radarCtx.fill();
      }

      requestAnimationFrame(drawRadar);
    }

    drawRadar();
  }

  if (radarSweepBtn) {
    radarSweepBtn.addEventListener('click', () => {
      audioFX.playSonarPing();
      tacticalAlertBadge.textContent = "CONTACT: U-BOAT SURFACED";
      tacticalAlertBadge.style.background = "rgba(239, 68, 68, 0.3)";
      tacticalAlertBadge.style.color = "#fca5a5";
      logTactical("NRC Type 268 Radar: High-definition 3-cm microwave echo detected at bearing 045°, 3.8 miles. Submarine conning tower identified.");
      torpedoIncoming = true;
      setTimeout(() => {
        if (!catDeployed && !uboatSunk) {
          logTactical("WARNING: Hydrophone operator reports German G7es 'Zaunkönig' (T-5) acoustic homing torpedo in the water!");
          audioFX.playBeep(900, 0.1);
        }
      }, 1500);
    });
  }

  if (deployCatBtn) {
    deployCatBtn.addEventListener('click', () => {
      audioFX.playBeep(600, 0.1);
      catDeployed = true;
      tacticalAlertBadge.textContent = "CAT DECOY ACTIVE";
      tacticalAlertBadge.style.background = "rgba(16, 185, 129, 0.25)";
      tacticalAlertBadge.style.color = "#86efac";
      logTactical("Canadian Anti-Acoustic Torpedo (CAT) gear deployed 250 yards astern. High-decibel mechanical clatter successfully seduced the German homing torpedo away from ship propellers!");
    });
  }

  if (dropDepthBtn) {
    dropDepthBtn.addEventListener('click', () => {
      audioFX.playExplosion();
      uboatSunk = true;
      tacticalAlertBadge.textContent = "TARGET DESTROYED // RDX";
      tacticalAlertBadge.style.background = "rgba(16, 185, 129, 0.3)";
      tacticalAlertBadge.style.color = "#86efac";
      logTactical("McGill RDX 10-charge pattern dropped. 1.5x TNT impulse shockwave ruptured U-boat double pressure hull! Air bubbles and heavy oil slick observed on surface.");
    });
  }

  if (resetTacticalBtn) {
    resetTacticalBtn.addEventListener('click', () => {
      audioFX.playBeep(500, 0.05);
      uboatDetected = true;
      uboatSunk = false;
      catDeployed = false;
      torpedoIncoming = false;
      tacticalAlertBadge.textContent = "RADAR SWEEP ACTIVE";
      tacticalAlertBadge.style.background = "rgba(34, 197, 94, 0.2)";
      tacticalAlertBadge.style.color = "#86efac";
      logTactical("New convoy patrol sector initialized. Escorting 40 merchant ships in dense fog.");
    });
  }

  // --------------------------------------------------------------------------
  // INTERACTIVE MODULE 4: DONALD HINGS FIELD RADIO & NOISE-FILTER STATION
  // --------------------------------------------------------------------------
  const freqSlider = document.getElementById('freq-slider');
  const freqDisplay = document.getElementById('freq-display');
  const voiceFilterToggle = document.getElementById('voice-filter-toggle');
  const pttBtn = document.getElementById('ptt-btn');
  const radioLog = document.getElementById('radio-log');

  function updateRadioTuning() {
    const freq = parseFloat(freqSlider.value).toFixed(2);
    freqDisplay.textContent = `${freq} MHz`;
    const filterOn = voiceFilterToggle.checked;

    if (Math.abs(parseFloat(freq) - 5.80) < 0.15) {
      if (filterOn) {
        radioLog.className = "radio-dispatch-log filtered";
        radioLog.innerHTML = "<strong>[CANADIAN 3RD DIVISION NET // CLEAR SPEECH]:</strong><br>'Bravo Platoon to Headquarters. Artillery barrage coordinates confirmed. Advancing on flank with Sexton 25-pounders.'";
      } else {
        radioLog.className = "radio-dispatch-log";
        radioLog.innerHTML = "<strong>[FRONT-LINE NOISE & BLAST INTERFERENCE]:</strong><br>[BOOM! RAT-TAT-TAT] ...KZZZZT... Bravo Platoon... [HEAVY ENGINE ROAR] ...coordinates... KZZZZZT... flank...";
      }
    } else {
      radioLog.className = "radio-dispatch-log";
      radioLog.innerHTML = `[STATIC NOISE ON ${freq} MHz] Tune frequency slider closer to 5.80 MHz to intercept Allied infantry division net...`;
    }
  }

  if (freqSlider && voiceFilterToggle) {
    freqSlider.addEventListener('input', () => {
      audioFX.playBeep(400 + parseFloat(freqSlider.value) * 80, 0.03);
      updateRadioTuning();
    });

    voiceFilterToggle.addEventListener('change', () => {
      audioFX.playBeep(850, 0.05);
      updateRadioTuning();
    });

    if (pttBtn) {
      pttBtn.addEventListener('click', () => {
        audioFX.playMorse();
        const filterOn = voiceFilterToggle.checked;
        if (filterOn) {
          radioLog.innerHTML = "<strong>[TRANSMITTING OVER C-58 WALKIE-TALKIE]:</strong><br>Carrier frequency locked. Voice filtering active. Frontline signal delivered with zero distortion.";
        } else {
          radioLog.innerHTML = "<strong>[TRANSMITTING OVER C-58 WALKIE-TALKIE]:</strong><br>Carrier frequency locked. Heavy microphone acoustic feedback detected from nearby mortar detonations.";
        }
      });
    }

    updateRadioTuning();
  }

  // --------------------------------------------------------------------------
  // RENDER INNOVATION CARDS WITH SOURCE BADGES
  // --------------------------------------------------------------------------
  function renderInnovations() {
    container.innerHTML = '';

    const filtered = INNOVATIONS_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.inventor.toLowerCase().includes(q) ||
        item.facility.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.synopsis.toLowerCase().includes(q) ||
        item.problem.toLowerCase().includes(q) ||
        item.solution.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      filtered.forEach(item => {
        const card = document.createElement('article');
        card.className = 'dossier-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${item.title}`);
        card.dataset.id = item.id;

        const primarySource = item.sources && item.sources.length > 0 ? item.sources[0].publisher : 'Canadian War Museum';

        card.innerHTML = `
          <div class="card-top-meta">
            <span class="card-category-badge cat-${item.category}">
              ${item.categoryLabel}
            </span>
            <span class="card-year-badge">${item.year}</span>
          </div>

          <div class="card-graphic-container">
            ${item.graphicSvg}
          </div>

          <h3 class="card-title">${item.title}</h3>
          <div class="card-inventor">${item.inventor}</div>
          <p class="card-synopsis">${item.synopsis}</p>

          <div class="card-source-bar">
            <svg class="verify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>Verified Source: <strong>${primarySource}</strong></span>
          </div>

          <div class="card-footer">
            <span class="card-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${item.location}
            </span>
            <span class="card-cta">
              Declassified Dossier ➔
            </span>
          </div>
        `;

        card.addEventListener('click', () => {
          audioFX.playBeep(900, 0.05);
          openModal(item);
        });

        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            audioFX.playBeep(900, 0.05);
            openModal(item);
          }
        });

        container.appendChild(card);
      });
    }
  }

  // Initial render
  let activeCategory = 'all';
  let searchTerm = '';
  renderInnovations();

  // Search & Filter listeners
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    clearSearchBtn.style.display = searchTerm ? 'block' : 'none';
    renderInnovations();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderInnovations();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      audioFX.playBeep(700, 0.04);
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategory = btn.dataset.category;
      renderInnovations();
    });
  });

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      clearSearchBtn.style.display = 'none';
      activeCategory = 'all';
      filterButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'all');
      });
      renderInnovations();
    });
  }

  // --------------------------------------------------------------------------
  // MODAL CONTROLLER
  // --------------------------------------------------------------------------
  function openModal(item) {
    document.getElementById('modal-field').textContent = item.categoryLabel;
    document.getElementById('modal-dossier-code').textContent = `NRC-ARCHIVE-${item.year}-${item.id.toUpperCase()}`;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-meta').innerHTML = `
      <span><strong>Primary Pioneers:</strong> ${item.inventor}</span> • 
      <span><strong>Facility:</strong> ${item.facility}</span> • 
      <span><strong>Introduced:</strong> ${item.year}</span>
    `;

    document.getElementById('modal-problem').textContent = item.problem;
    document.getElementById('modal-solution').textContent = item.solution;
    document.getElementById('modal-impact').textContent = item.impact;
    document.getElementById('modal-legacy').textContent = item.legacy;

    const specsContainer = document.getElementById('modal-specs');
    specsContainer.innerHTML = '';
    item.specs.forEach(spec => {
      const specEl = document.createElement('div');
      specEl.className = 'spec-item';
      specEl.innerHTML = `<span>${spec.label}</span><strong>${spec.value}</strong>`;
      specsContainer.appendChild(specEl);
    });

    const sourcesContainer = document.getElementById('modal-sources-list');
    if (sourcesContainer) {
      sourcesContainer.innerHTML = '';
      if (item.sources && item.sources.length > 0) {
        item.sources.forEach(src => {
          const a = document.createElement('a');
          a.className = 'source-link-pill';
          a.href = src.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.innerHTML = `
            <span class="source-pub">${src.publisher}</span>
            <span class="source-art-title">${src.title}</span>
            <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          `;
          sourcesContainer.appendChild(a);
        });
      }
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalCloseBottom.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // WAR ROOM QUIZ ENGINE
  // --------------------------------------------------------------------------
  let currentQIndex = 0;
  let score = 0;
  let answered = false;

  const quizStepLabel = document.getElementById('quiz-step-label');
  const quizScoreBadge = document.getElementById('quiz-score-badge');
  const quizProgress = document.getElementById('quiz-progress');
  const quizQuestionText = document.getElementById('quiz-question-text');
  const quizOptionsContainer = document.getElementById('quiz-options-container');
  const quizExplanation = document.getElementById('quiz-explanation');
  const explanationStatus = document.getElementById('explanation-status');
  const explanationBody = document.getElementById('explanation-body');
  const nextQuestionBtn = document.getElementById('next-question-btn');
  const quizCard = document.getElementById('quiz-card');
  const quizResults = document.getElementById('quiz-results');
  const finalScoreVal = document.getElementById('final-score-val');
  const resultRankTitle = document.getElementById('result-rank-title');
  const resultSummaryText = document.getElementById('result-summary-text');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');

  function renderQuestion() {
    answered = false;
    quizExplanation.style.display = 'none';

    const q = QUIZ_QUESTIONS[currentQIndex];
    quizStepLabel.textContent = `QUESTION ${currentQIndex + 1} OF ${QUIZ_QUESTIONS.length}`;
    quizScoreBadge.textContent = `CURRENT SCORE: ${score}`;
    quizProgress.style.width = `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    quizQuestionText.textContent = q.question;
    quizOptionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span class="option-letter">${letters[i]}</span> <span>${optText}</span>`;
      btn.addEventListener('click', () => selectQuizAnswer(i, btn));
      quizOptionsContainer.appendChild(btn);
    });
  }

  function selectQuizAnswer(selectedIndex, clickedBtn) {
    if (answered) return;
    answered = true;
    const q = QUIZ_QUESTIONS[currentQIndex];
    const optionBtns = quizOptionsContainer.querySelectorAll('.quiz-option-btn');

    if (selectedIndex === q.correct) {
      score++;
      audioFX.playBeep(950, 0.1);
      clickedBtn.classList.add('correct');
      explanationStatus.textContent = "VERIFIED BY HISTORICAL RECORD";
      explanationStatus.className = "explanation-tag success";
    } else {
      audioFX.playBeep(350, 0.15);
      clickedBtn.classList.add('wrong');
      optionBtns[q.correct].classList.add('correct');
      explanationStatus.textContent = "INCORRECT // HISTORICAL RECORD ADJUSTMENT";
      explanationStatus.className = "explanation-tag danger";
    }

    optionBtns.forEach(btn => btn.disabled = true);
    quizScoreBadge.textContent = `CURRENT SCORE: ${score}`;
    explanationBody.textContent = q.explanation;
    quizExplanation.style.display = 'block';

    if (currentQIndex === QUIZ_QUESTIONS.length - 1) {
      nextQuestionBtn.textContent = "Finish & See Final Rank ➔";
    } else {
      nextQuestionBtn.textContent = "Next Evaluation Question ➔";
    }
  }

  nextQuestionBtn.addEventListener('click', () => {
    audioFX.playBeep(800, 0.05);
    currentQIndex++;
    if (currentQIndex < QUIZ_QUESTIONS.length) {
      renderQuestion();
    } else {
      showQuizResults();
    }
  });

  function showQuizResults() {
    quizCard.style.display = 'none';
    quizResults.style.display = 'block';
    finalScoreVal.textContent = score;

    let rank = '';
    let summary = '';
    if (score === 5) {
      rank = "Rank: Director of Allied Technical Intelligence";
      summary = "Flawless score! You possess encyclopedic knowledge of Canadian scientific mobilization and battlefield engineering in World War II.";
    } else if (score >= 4) {
      rank = "Rank: Senior NRC Laboratory Officer";
      summary = "Remarkable mastery! You have a firm grasp of Canada's vital role in radar, aviation physiology, and wartime chemistry.";
    } else if (score >= 3) {
      rank = "Rank: Technical Intelligence Analyst";
      summary = "Good effort! You recognized several key Canadian breakthroughs that shaped Allied victory.";
    } else {
      rank = "Rank: Scientific Intelligence Cadet";
      summary = "A solid beginning. Explore the Dossier cards above to discover more fascinating Canadian discoveries!";
    }

    resultRankTitle.textContent = rank;
    resultSummaryText.textContent = summary;
  }

  restartQuizBtn.addEventListener('click', () => {
    audioFX.playMorse();
    currentQIndex = 0;
    score = 0;
    quizResults.style.display = 'none';
    quizCard.style.display = 'block';
    renderQuestion();
  });

  renderQuestion();

  // --------------------------------------------------------------------------
  // AUDIO & THEME CONTROLS
  // --------------------------------------------------------------------------
  audioToggleBtn.addEventListener('click', () => {
    audioFX.init();
    audioFX.enabled = !audioFX.enabled;
    const label = audioToggleBtn.querySelector('.btn-label');
    if (audioFX.enabled) {
      label.textContent = "Radio FX: On";
      audioToggleBtn.style.borderColor = 'var(--accent-gold)';
      audioFX.playMorse();
    } else {
      label.textContent = "Radio FX: Off";
      audioToggleBtn.style.borderColor = '';
    }
  });

  themeToggleBtn.addEventListener('click', () => {
    const isParchment = document.body.classList.toggle('theme-parchment');
    const label = themeToggleBtn.querySelector('.theme-label');
    if (isParchment) {
      label.textContent = "Style: Parchment";
      localStorage.setItem('canadian_innovations_theme', 'parchment');
    } else {
      label.textContent = "Style: War Room";
      localStorage.setItem('canadian_innovations_theme', 'slate');
    }
    audioFX.playBeep(750, 0.05);
  });

  const savedTheme = localStorage.getItem('canadian_innovations_theme');
  if (savedTheme === 'parchment') {
    document.body.classList.add('theme-parchment');
    const label = themeToggleBtn.querySelector('.theme-label');
    if (label) label.textContent = "Style: Parchment";
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
});
