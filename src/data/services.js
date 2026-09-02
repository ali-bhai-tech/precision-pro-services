import hvacImg from "../assets/hvac.jpg";
import refrigerationImg from "../assets/refrigeration.jpg";
import appliancesImg from "../assets/appliances.jpg";
import thermostatImg from "../assets/thermostat.jpg";
import detailImg from "../assets/detail.jpg";
import wineImg from "../assets/wine.jpg";
import heroImg from "../assets/hero.jpg";
import processImg from "../assets/process.jpg";

export const categories = [
  {
    slug: "hvac",
    title: "HVAC",
    heading: "Heating & Cooling Systems",
    short: "Furnaces, air conditioners, heat pumps, ductwork and smart controls.",
    description:
      "Complete residential and light-commercial heating and cooling — diagnostics, repair, maintenance and full system replacement. We size, install and commission equipment properly so it runs efficiently for its full service life.",
    image: hvacImg,
  },
  {
    slug: "refrigeration",
    title: "Refrigeration",
    heading: "Commercial & Residential Refrigeration",
    short: "Condensers, evaporators, walk-in coolers, refrigerators and wine storage.",
    description:
      "Refrigeration keeps inventory and food safe, and downtime is expensive. We service sealed systems, condensing units, evaporators and walk-ins with the diagnostic depth these systems require.",
    image: refrigerationImg,
  },
  {
    slug: "high-end-appliances",
    title: "High-End Appliances",
    heading: "Luxury Appliance Service",
    short: "Sub-Zero, Viking, Thermador, Wolf and KitchenAid specialists.",
    description:
      "Premium appliances need technicians who know their platforms. We repair built-in refrigeration, pro ranges, ovens and integrated units with OEM-grade parts and careful, cabinetry-safe workmanship.",
    image: appliancesImg,
  },
];

export const services = [
  // ---------------- HVAC ----------------
  {
    slug: "furnaces",
    category: "hvac",
    categoryTitle: "HVAC",
    title: "Furnace Services",
    short: "Repair, maintenance and high-efficiency furnace installation.",
    description:
      "From no-heat emergencies to planned replacement, we service gas, electric and high-efficiency condensing furnaces. Every visit includes combustion, airflow and safety verification — not just a parts swap.",
    image: heroImg,
    commonProblems: [
      "Furnace runs but blows cold air",
      "Short cycling or frequent shutdowns",
      "Failed igniter, flame sensor or inducer motor",
      "Blower noise, rattling or burning smells",
      "Cracked heat exchanger and safety lockouts",
    ],
    solutions: [
      "Full combustion and safety diagnostics",
      "Igniter, sensor, board and motor replacement",
      "Airflow correction and duct static testing",
      "Annual maintenance and tune-up plans",
      "High-efficiency furnace replacement and commissioning",
    ],
    benefits: [
      "Reliable heat through Illinois winters",
      "Lower gas usage from correct airflow and staging",
      "Safer operation with verified combustion",
      "Longer equipment life",
    ],
    faqs: [
      {
        q: "How often should a furnace be serviced?",
        a: "Once a year, ideally in early fall before the heating season starts.",
      },
      {
        q: "Should I repair or replace my furnace?",
        a: "If it's over 15 years old and the repair exceeds roughly a third of replacement cost, replacement usually wins. We give you both numbers.",
      },
      {
        q: "Do you offer emergency no-heat service?",
        a: "Please call during business hours to discuss urgent no-heat service.",
      },
    ],
  },
  {
    slug: "air-conditioners",
    category: "hvac",
    categoryTitle: "HVAC",
    title: "Air Conditioner Services",
    short: "AC repair, seasonal maintenance and efficient system replacement.",
    description:
      "Central air, ductless mini-splits and high-SEER systems. We measure refrigerant charge, superheat and airflow so your system cools evenly instead of just running.",
    image: hvacImg,
    commonProblems: [
      "System runs but the house never cools",
      "Frozen evaporator coil or iced lines",
      "Refrigerant leaks and low charge",
      "Failed capacitor, contactor or compressor",
      "Water leaks from the condensate drain",
    ],
    solutions: [
      "Electronic leak detection and proper charge correction",
      "Coil cleaning and airflow restoration",
      "Electrical component replacement",
      "Condensate drain clearing and safety switch testing",
      "Right-sized system replacement with load calculation",
    ],
    benefits: [
      "Even, consistent cooling in every room",
      "Lower summer electricity bills",
      "Fewer breakdowns during heat waves",
      "Better humidity control",
    ],
    faqs: [
      {
        q: "Why does my AC freeze up?",
        a: "Almost always low airflow or low refrigerant. Both need diagnosis — adding refrigerant alone hides a leak.",
      },
      {
        q: "When should I schedule AC maintenance?",
        a: "Spring, before the first stretch of hot weather.",
      },
      {
        q: "Do you service ductless mini-splits?",
        a: "Yes, including multi-zone systems and inverter units.",
      },
    ],
  },
  {
    slug: "heat-pumps-ductwork",
    category: "hvac",
    categoryTitle: "HVAC",
    title: "Heat Pumps & Ductwork",
    short: "Heat pump service plus duct design, sealing and repair.",
    description:
      "Heat pumps only perform as well as the duct system behind them. We service cold-climate and dual-fuel heat pumps, and design, seal and repair ductwork for real-world airflow.",
    image: processImg,
    commonProblems: [
      "Heat pump not switching between heating and cooling",
      "Constant auxiliary/emergency heat operation",
      "Ice build-up on the outdoor unit",
      "Rooms that never reach temperature",
      "Leaky, undersized or crushed ducts",
    ],
    solutions: [
      "Reversing valve and defrost board diagnostics",
      "Dual-fuel and balance-point setup",
      "Static pressure and airflow testing",
      "Duct sealing, insulation and re-runs",
      "Zoning and register balancing",
    ],
    benefits: [
      "Efficient heating well below freezing",
      "Balanced temperatures floor to floor",
      "Less duct loss and lower operating cost",
      "Quieter airflow",
    ],
    faqs: [
      {
        q: "Do heat pumps work in Illinois winters?",
        a: "Modern cold-climate and dual-fuel systems do. We set the balance point so the backup only runs when it should.",
      },
      {
        q: "How do I know if my ducts leak?",
        a: "Hot and cold rooms, dusty returns and high bills are the usual signs. We measure static pressure to confirm.",
      },
      { q: "Can you add zoning?", a: "Yes, on most systems with adequate duct capacity." },
    ],
  },
  {
    slug: "thermostats",
    category: "hvac",
    categoryTitle: "HVAC",
    title: "Thermostats & Controls",
    short: "Smart thermostat installation, wiring and system integration.",
    description:
      "Correct control wiring is the difference between a smart thermostat that saves energy and one that damages equipment. We install, configure and integrate controls for single and multi-stage systems.",
    image: thermostatImg,
    commonProblems: [
      "Thermostat blank or losing power",
      "Temperature reading doesn't match the room",
      "Smart thermostat incompatible with multi-stage equipment",
      "Missing C-wire",
      "Short cycling caused by bad control settings",
    ],
    solutions: [
      "Control wiring repair and C-wire installation",
      "Smart and multi-stage thermostat setup",
      "Zone panel and sensor configuration",
      "Staging, swing and cycle-rate tuning",
      "Wi-Fi and app onboarding",
    ],
    benefits: [
      "Real energy savings from correct staging",
      "Remote control and scheduling",
      "Better comfort with fewer swings",
      "Equipment protection",
    ],
    faqs: [
      {
        q: "Will a smart thermostat work with my system?",
        a: "Usually, but multi-stage and heat pump systems need correct configuration. We verify compatibility first.",
      },
      {
        q: "What is a C-wire?",
        a: "A common wire that provides continuous power. We can add one or install an adapter.",
      },
      {
        q: "How long does installation take?",
        a: "Typically under an hour, including setup and a walkthrough.",
      },
    ],
  },

  // ---------------- REFRIGERATION ----------------
  {
    slug: "condenser",
    category: "refrigeration",
    categoryTitle: "Refrigeration",
    title: "Condenser Services",
    short: "Condensing unit repair, cleaning and replacement.",
    description:
      "The condenser rejects heat from the system — when it's dirty, undercharged or failing, everything downstream suffers. We service air-cooled and remote condensing units for residential and commercial refrigeration.",
    image: detailImg,
    commonProblems: [
      "High head pressure and compressor overheating",
      "Dirty or damaged condenser coil",
      "Failed condenser fan motor",
      "Refrigerant leaks at the unit",
      "Unit running constantly without pulling temperature",
    ],
    solutions: [
      "Deep coil cleaning and fin repair",
      "Fan motor, capacitor and contactor replacement",
      "Leak detection, repair and proper evacuation",
      "Charge verification by superheat/subcooling",
      "Condensing unit replacement and startup",
    ],
    benefits: [
      "Stable box temperatures",
      "Lower energy draw",
      "Reduced compressor failure risk",
      "Longer system life",
    ],
    faqs: [
      {
        q: "How often should condenser coils be cleaned?",
        a: "Every 3–6 months in commercial settings, annually for lighter-duty systems.",
      },
      {
        q: "Can a dirty condenser cause product loss?",
        a: "Yes — it's one of the most common causes of gradual temperature rise.",
      },
      {
        q: "Do you handle remote condensing units?",
        a: "Yes, including rooftop and outdoor rack installations.",
      },
    ],
  },
  {
    slug: "evaporator",
    category: "refrigeration",
    categoryTitle: "Refrigeration",
    title: "Evaporator Services",
    short: "Evaporator coil, defrost and airflow diagnostics.",
    description:
      "Evaporator problems show up as ice, uneven temperatures and humidity issues. We diagnose defrost circuits, metering devices and airflow rather than simply adding refrigerant.",
    image: refrigerationImg,
    commonProblems: [
      "Iced-over evaporator coil",
      "Defrost cycle not initiating or terminating",
      "Failed evaporator fan motors",
      "Uneven cooling inside the box",
      "Excess humidity or condensation",
    ],
    solutions: [
      "Defrost timer, heater and termination testing",
      "Coil cleaning and ice remediation",
      "Fan motor and blade replacement",
      "TXV and metering device adjustment",
      "Drain line clearing and heat-trace repair",
    ],
    benefits: [
      "Consistent product temperatures",
      "No more repeated ice-ups",
      "Better humidity control",
      "Lower run time",
    ],
    faqs: [
      {
        q: "Why does my evaporator keep icing?",
        a: "Typically a defrost failure, restricted airflow, or a refrigerant charge problem.",
      },
      {
        q: "Do you service low-temp freezer evaporators?",
        a: "Yes, medium- and low-temperature systems both.",
      },
      {
        q: "How fast can you respond?",
        a: "Call during business hours so we can discuss the fastest available response.",
      },
    ],
  },
  {
    slug: "walk-in-coolers",
    category: "refrigeration",
    categoryTitle: "Refrigeration",
    title: "Walk-In Cooler Services",
    short: "Walk-in cooler and freezer repair, maintenance and installation.",
    description:
      "Walk-ins are business-critical. We handle sealed systems, controls, doors, panels and gaskets, plus preventive maintenance programs that keep temperatures logged and stable.",
    image: refrigerationImg,
    commonProblems: [
      "Box temperature drifting above setpoint",
      "Compressor short cycling",
      "Door gasket, hinge and closer failures",
      "Frost build-up on panels and floor",
      "Controller and alarm faults",
    ],
    solutions: [
      "Full sealed-system diagnostics and repair",
      "Controller programming and alarm setup",
      "Door, gasket, sweep and closer replacement",
      "Preventive maintenance agreements",
      "New walk-in installation and startup",
    ],
    benefits: [
      "Protected inventory and reduced spoilage",
      "Health-inspection-ready temperature control",
      "Fewer emergency shutdowns",
      "Predictable maintenance costs",
    ],
    faqs: [
      {
        q: "Do you offer maintenance contracts?",
        a: "Yes — scheduled visits with documented readings and priority response.",
      },
      {
        q: "Can you service the system after hours?",
        a: "Yes, we schedule around business hours whenever possible.",
      },
      {
        q: "Do you install new walk-ins?",
        a: "We install, relocate and commission walk-in coolers and freezers.",
      },
    ],
  },
  {
    slug: "free-standing-refrigerators",
    category: "refrigeration",
    categoryTitle: "Refrigeration",
    title: "Free Standing Refrigerators",
    short: "Residential and commercial reach-in refrigerator repair.",
    description:
      "Reach-ins, prep tables and residential refrigerators — cooling, ice, water and control repairs handled with correct parts and clean workmanship.",
    image: appliancesImg,
    commonProblems: [
      "Not cooling or cooling intermittently",
      "Freezer works but fridge section doesn't",
      "Ice maker and water dispenser failures",
      "Loud compressor or fan noise",
      "Water pooling inside the cabinet",
    ],
    solutions: [
      "Sealed-system and compressor diagnostics",
      "Damper, thermistor and control board repair",
      "Ice maker and water line service",
      "Defrost system repair",
      "Gasket and door alignment",
    ],
    benefits: [
      "Food kept safely in range",
      "Quieter, more efficient operation",
      "Repairs that avoid full replacement",
      "Fast turnaround on common parts",
    ],
    faqs: [
      {
        q: "Is it worth repairing a refrigerator?",
        a: "Often yes, especially for units under 10 years old or premium models.",
      },
      {
        q: "Do you carry common parts on the truck?",
        a: "We stock high-failure-rate parts to finish most jobs in one visit.",
      },
      {
        q: "Do you service commercial reach-ins?",
        a: "Yes, including prep tables and merchandisers.",
      },
    ],
  },
  {
    slug: "wine-coolers",
    category: "refrigeration",
    categoryTitle: "Refrigeration",
    title: "Wine Cooler Services",
    short: "Wine cellar and wine refrigeration repair and calibration.",
    description:
      "Wine storage demands tight temperature and humidity control. We service built-in and free-standing wine coolers, dual-zone units and small cellar systems.",
    image: wineImg,
    commonProblems: [
      "Temperature drifting out of the correct range",
      "Dual zones not holding separate setpoints",
      "Condensation or humidity problems",
      "Compressor or thermoelectric module failure",
      "Door seal and UV glass issues",
    ],
    solutions: [
      "Zone calibration and control diagnostics",
      "Thermoelectric and compressor system repair",
      "Humidity and airflow correction",
      "Seal, hinge and rack replacement",
      "Preventive maintenance for cellar systems",
    ],
    benefits: [
      "Collection protected at proper temperature",
      "Stable humidity that preserves corks",
      "Quiet, vibration-controlled operation",
      "Extended unit lifespan",
    ],
    faqs: [
      {
        q: "What temperature should a wine cooler hold?",
        a: "Generally 45–55°F for whites and 55–65°F for reds, with minimal fluctuation.",
      },
      {
        q: "Do you service built-in units?",
        a: "Yes, including cabinetry-integrated and dual-zone models.",
      },
      {
        q: "Can vibration damage wine?",
        a: "Over time, yes. We check compressor mounts and isolation during service.",
      },
    ],
  },

  // ---------------- HIGH-END APPLIANCES ----------------
  {
    slug: "sub-zero",
    category: "high-end-appliances",
    categoryTitle: "High-End Appliances",
    title: "Sub-Zero Appliance Service",
    short: "Built-in Sub-Zero refrigeration repair and maintenance.",
    description:
      "Sub-Zero built-ins use dual refrigeration systems and platform-specific controls. We diagnose sealed systems, condenser assemblies and electronic controls without damaging your cabinetry.",
    image: appliancesImg,
    commonProblems: [
      "One compartment cold, the other warm",
      "Vacuum condenser fouling and overheating",
      "Ice maker not producing",
      "Control panel errors and alarms",
      "Door seals and hinge alignment",
    ],
    solutions: [
      "Dual sealed-system diagnostics",
      "Condenser cleaning and fan service",
      "Control board and sensor replacement",
      "Ice maker rebuild and water line repair",
      "Gasket, hinge and panel alignment",
    ],
    benefits: [
      "Preserved value of a premium appliance",
      "OEM-grade parts and correct procedures",
      "Careful, cabinetry-safe service",
      "Long-term maintenance guidance",
    ],
    faqs: [
      {
        q: "Do you work on older Sub-Zero units?",
        a: "Yes, including legacy 500 and 600 series built-ins.",
      },
      {
        q: "How often should the condenser be cleaned?",
        a: "Every 6–12 months — it's the single biggest cause of premature failure.",
      },
      {
        q: "Can you service integrated column units?",
        a: "Yes, refrigerator, freezer and wine columns.",
      },
    ],
  },
  {
    slug: "viking",
    category: "high-end-appliances",
    categoryTitle: "High-End Appliances",
    title: "Viking Appliance Service",
    short: "Viking range, oven and refrigeration repair.",
    description:
      "Professional-grade Viking ranges, ovens and refrigeration serviced by technicians familiar with their burner assemblies, ignition systems and control platforms.",
    image: appliancesImg,
    commonProblems: [
      "Burners not igniting or clicking continuously",
      "Oven not holding calibrated temperature",
      "Convection fan and element failures",
      "Refrigerator not cooling properly",
      "Door hinge and seal wear",
    ],
    solutions: [
      "Ignition system and burner rebuild",
      "Oven calibration and element replacement",
      "Control board diagnostics",
      "Sealed-system refrigeration repair",
      "Hinge, spring and gasket service",
    ],
    benefits: [
      "Restored professional cooking performance",
      "Accurate, repeatable oven temperatures",
      "Safe gas and electrical operation",
      "Extended appliance life",
    ],
    faqs: [
      {
        q: "Why do my burners keep clicking?",
        a: "Usually a wet or cracked igniter, or a misaligned burner cap. Both are quick fixes.",
      },
      {
        q: "Can you calibrate my oven?",
        a: "Yes, we verify with independent instrumentation and adjust the offset.",
      },
      { q: "Do you service Viking refrigeration?", a: "Yes, built-in and free-standing models." },
    ],
  },
  {
    slug: "thermador",
    category: "high-end-appliances",
    categoryTitle: "High-End Appliances",
    title: "Thermador Appliance Service",
    short: "Thermador cooktop, oven and refrigeration specialists.",
    description:
      "Star burner cooktops, steam and speed ovens, and built-in refrigeration — we service the full Thermador lineup with proper diagnostics and OEM-grade parts.",
    image: appliancesImg,
    commonProblems: [
      "Induction cooktop error codes",
      "Star burner uneven flame",
      "Steam oven water system faults",
      "Refrigerator temperature drift",
      "Touch control unresponsiveness",
    ],
    solutions: [
      "Induction module and sensor replacement",
      "Burner and orifice service",
      "Steam generator and water valve repair",
      "Sealed-system and control diagnostics",
      "User interface board replacement",
    ],
    benefits: [
      "Precise cooking control restored",
      "Fewer repeat service calls",
      "Correct parts, correct procedures",
      "Protected warranty compliance",
    ],
    faqs: [
      {
        q: "What do induction error codes mean?",
        a: "They usually point to a specific power module or sensor — we read them at the board.",
      },
      { q: "Do you service steam ovens?", a: "Yes, including descaling and water system repairs." },
      {
        q: "Do you handle built-in column refrigeration?",
        a: "Yes, including Freedom column installations.",
      },
    ],
  },
  {
    slug: "wolf",
    category: "high-end-appliances",
    categoryTitle: "High-End Appliances",
    title: "Wolf Appliance Service",
    short: "Wolf range, cooktop and oven repair.",
    description:
      "Dual-fuel and gas Wolf ranges, rangetops, wall ovens and modules. We restore ignition, calibration and convection performance to factory specification.",
    image: appliancesImg,
    commonProblems: [
      "Oven overheating or under-heating",
      "Spark module clicking after ignition",
      "Broil element or convection fan failure",
      "Griddle and charbroiler temperature issues",
      "Control display faults",
    ],
    solutions: [
      "Thermostat and probe calibration",
      "Spark module and igniter replacement",
      "Element, fan and relay repair",
      "Gas pressure verification and adjustment",
      "Control board diagnostics and replacement",
    ],
    benefits: [
      "Consistent, professional cooking results",
      "Safe gas operation verified on every visit",
      "Restored convection performance",
      "Longer appliance service life",
    ],
    faqs: [
      {
        q: "Why is my Wolf oven off by 25 degrees?",
        a: "Typically a calibration offset or an aging temperature probe — both correctable.",
      },
      {
        q: "Do you service Wolf modules and griddles?",
        a: "Yes, including integrated cooktop modules.",
      },
      {
        q: "Are parts readily available?",
        a: "We source OEM-grade parts; most repairs finish within a few days.",
      },
    ],
  },
  {
    slug: "kitchenaid",
    category: "high-end-appliances",
    categoryTitle: "High-End Appliances",
    title: "KitchenAid Appliance Service",
    short: "KitchenAid refrigerator, oven and dishwasher repair.",
    description:
      "Full-line KitchenAid service — refrigeration, cooking and dishwashers — with the same diagnostic care we bring to every premium appliance.",
    image: appliancesImg,
    commonProblems: [
      "Refrigerator not cooling or ice maker failure",
      "Dishwasher not draining or cleaning poorly",
      "Oven temperature and self-clean faults",
      "Noisy fans and pumps",
      "Water leaks and valve failures",
    ],
    solutions: [
      "Sealed-system and defrost repair",
      "Drain pump, valve and spray arm service",
      "Oven sensor and element replacement",
      "Control board and wiring diagnostics",
      "Leak tracing and seal replacement",
    ],
    benefits: [
      "Appliances back to full performance",
      "Cost-effective repairs over replacement",
      "One provider for the whole kitchen",
      "Clean, respectful in-home service",
    ],
    faqs: [
      {
        q: "Is a dishwasher repair worth it?",
        a: "For most premium units, yes — drain and spray issues are inexpensive to correct.",
      },
      {
        q: "Do you repair French-door refrigerators?",
        a: "Yes, including ice and water dispenser systems.",
      },
      { q: "How soon can you come out?", a: "Often same or next day within our service area." },
    ],
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getServicesByCategory = (slug) => services.filter((s) => s.category === slug);
export const getService = (category, slug) =>
  services.find((s) => s.category === category && s.slug === slug);

export default services;
