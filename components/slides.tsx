import type { ReactNode } from 'react'
import { SolutionTile } from './solution-tile'

export type SlideDef = {
  section: string
  tone: string
  content: ReactNode
}

const SdgMark = ({ size = 19 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width: size, height: size }}>
    <path d="M4 20V11L12 5L20 11V20H14V15H10V20H4Z" fill="#16241b" />
  </svg>
)

const TITLE_TILES = [
  { bg: '#8fbf7f', z: 78 },
  { bg: '#4a3323', z: 52 },
  { bg: '#6b4a30', z: 26 },
  { bg: '#7c5738', z: 0 },
  { bg: '#c9a06a', z: -26 },
]

const SOLUTION_LEGEND = [
  { c: '#8fbf7f', t: 'Native plants', d: 'Low-maintenance, locally adapted species' },
  { c: '#5c8168', t: 'Automated irrigation layer', d: 'Sensor-driven moisture delivery' },
  { c: '#4a3323', t: 'Cocopeat', d: 'Water retention, aeration' },
  { c: '#6b4a30', t: 'Compost', d: 'Nutrient supply for growth' },
  { c: '#7c5738', t: 'Soil', d: 'Root anchoring medium' },
  { c: '#c9a06a', t: 'Biodegradable base', d: 'Jute / coconut coir — compostable foundation' },
]

export const SLIDES: SlideDef[] = [
  // 1 — TITLE
  {
    section: 'Introduction',
    tone: 'forest',
    content: (
      <div className="title-wrap">
        <div className="title-left">
          <div className="sdg-badge">
            <span className="sdg-icon">
              <SdgMark />
            </span>
            <span>SDG 11 &nbsp;·&nbsp; Sustainable Cities and Communities</span>
          </div>
          <div className="eyebrow">IBDP Group 4 Collaborative Project</div>
          <h1 className="display">
            Reducing Urban Heat through Modular Biodegradable Green Roof Tiles
          </h1>
          <div className="rq-strip">
            <b>Research Question</b>
            To what extent do biodegradable green roof tiles reduce the surface
            temperature of concrete surfaces within a selected urban microclimate?
          </div>
          <div className="members">
            <em>Group Members —</em> Prasanthi Muthusamy Parthiban · Yashvi Pratap ·
            Mohit Chandramohan · Sharany Ajit Nikam · Manna J
          </div>
        </div>
        <div className="tile-hero">
          <div className="tile-stack">
            {TITLE_TILES.map((l, i) => (
              <div
                key={i}
                className="tlayer"
                style={{ background: l.bg, transform: `translateZ(${l.z}px)` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 2 — PROBLEM
  {
    section: 'The Problem',
    tone: 'concrete',
    content: (
      <div className="content-row">
        <div className="col">
          <div className="eyebrow">The Problem</div>
          <h2 className="display">Loss of Urban Green Spaces</h2>
          <ul className="bullets">
            <li>
              Rapid urbanization is converting natural land into built-up city area at
              accelerating speed.
            </li>
            <li>
              Concrete and asphalt are steadily replacing vegetation and permeable
              ground cover.
            </li>
            <li>
              This drives the Urban Heat Island (UHI) effect — cities running measurably
              hotter than surrounding rural areas.
            </li>
            <li>
              Why this matters: heat, energy demand, and liveability are all directly
              tied to how much green cover a city retains.
            </li>
          </ul>
        </div>
        <div className="visual-panel">
          <svg className="city-graphic" viewBox="0 0 320 200" fill="none" aria-hidden>
            <rect x="0" y="140" width="320" height="60" fill="#3a3934" />
            <rect x="20" y="70" width="40" height="70" fill="#55534a" />
            <rect x="70" y="40" width="34" height="100" fill="#6b6a63" />
            <rect x="112" y="90" width="30" height="50" fill="#55534a" />
            <rect x="150" y="20" width="42" height="120" fill="#6b6a63" />
            <rect x="200" y="60" width="36" height="80" fill="#55534a" />
            <rect x="244" y="50" width="30" height="90" fill="#6b6a63" />
            <rect x="282" y="80" width="30" height="60" fill="#55534a" />
            <g opacity=".85">
              <rect x="28" y="82" width="8" height="8" fill="#c97a44" />
              <rect x="44" y="98" width="8" height="8" fill="#c97a44" />
              <rect x="160" y="40" width="8" height="8" fill="#c97a44" />
              <rect x="176" y="60" width="8" height="8" fill="#c97a44" />
            </g>
          </svg>
          <div className="temp-compare">
            <div className="temp-block temp-cool">
              <div className="num">24°</div>
              <div className="lab">Green cover</div>
            </div>
            <div className="temp-block temp-hot">
              <div className="num">38°</div>
              <div className="lab">Concrete surface</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 3 — WHY IT MATTERS
  {
    section: 'Why It Matters',
    tone: 'concrete',
    content: (
      <>
        <div className="eyebrow">Why Does This Matter?</div>
        <h2 className="display">The knock-on effects of a hotter city</h2>
        <ul className="bullets" style={{ maxWidth: '60ch' }}>
          <li>Higher surface and ambient temperatures across dense urban areas.</li>
          <li>Increased energy consumption as cooling demand from buildings rises.</li>
          <li>Reduced biodiversity as habitat and vegetation cover shrink.</li>
          <li>Poorer overall urban living conditions for residents.</li>
        </ul>
        <p
          className="body-text"
          style={{
            marginTop: '2.2rem',
            fontFamily: 'var(--font-display-f)',
            fontStyle: 'italic',
            fontSize: '1.3rem',
            color: 'var(--leaf-200)',
          }}
        >
          So we asked ourselves...
        </p>
      </>
    ),
  },

  // 4 — RESEARCH QUESTION
  {
    section: 'Research Question',
    tone: 'soil',
    content: (
      <div className="rq-slide">
        <div className="eyebrow">Research Question</div>
        <h1 className="display">
          To what extent do biodegradable green roof tiles reduce the surface
          temperature of concrete surfaces within a selected urban microclimate?
        </h1>
        <div className="var-row">
          <div className="var-card">
            <div className="k">Independent Variable</div>
            <div className="v">Presence / type of biodegradable green roof tile</div>
          </div>
          <div className="var-card">
            <div className="k">Dependent Variable</div>
            <div className="v">Surface temperature of the concrete beneath</div>
          </div>
          <div className="var-card">
            <div className="k">Controlled Variables</div>
            <div className="v">
              Time of day, weather, tile area, concrete type, measurement distance
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 5 — BACKGROUND RESEARCH
  {
    section: 'Background Research',
    tone: 'soil',
    content: (
      <div className="content-row">
        <div className="col">
          <div className="eyebrow">Background Research (Collective)</div>
          <h2 className="display">What we found</h2>
          <p className="mono-label">Urban Heat Island</p>
          <ul className="bullets dense">
            <li>Concrete stores and re-radiates heat throughout the day and night.</li>
            <li>Less vegetation means less shading and less evaporative cooling.</li>
            <li>
              Green roofs mitigate UHI through shade and evapotranspiration, also cutting
              cooling energy demand.
            </li>
          </ul>
        </div>
        <div className="col">
          <p className="mono-label">Existing Green Roofs</p>
          <div className="content-row" style={{ gap: '1.6rem' }}>
            <div className="col">
              <div className="tag">Advantages</div>
              <ul className="bullets dense">
                <li>Cooling effect on surrounding surfaces</li>
                <li>Support for biodiversity</li>
                <li>Lower building energy use</li>
              </ul>
            </div>
            <div className="col">
              <div className="tag" style={{ background: 'rgba(201,122,68,.35)', color: '#3a2415' }}>
                Limitations
              </div>
              <ul className="bullets dense">
                <li>Expensive to install</li>
                <li>Heavy structural load</li>
                <li>Permanent, inflexible installation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 6 — PROJECT STAGES (NEW)
  {
    section: 'Project Stages',
    tone: 'growth',
    content: (
      <>
        <div className="eyebrow">Group 4 Process</div>
        <h2 className="display">Planning → Action → Evaluation</h2>
        <p className="body-text">
          Our collaborative investigation moved through the three stages of the Group 4
          project, with every subject contributing at each stage.
        </p>
        <div className="stage-grid">
          <div className="stage-card">
            <div className="sc-num">Stage 01</div>
            <div className="sc-title">Planning</div>
            <ul className="bullets dense">
              <li>Chose the topic and framed a shared research question</li>
              <li>Collective background research on UHI and green roofs</li>
              <li>Divided roles across five disciplines</li>
              <li>Iterated the design from seed carpet to modular tile</li>
            </ul>
          </div>
          <div className="stage-card">
            <div className="sc-num">Stage 02</div>
            <div className="sc-title">Action</div>
            <ul className="bullets dense">
              <li>Built the biodegradable prototype tile</li>
              <li>Established plants and automated irrigation</li>
              <li>Measured surface temperatures vs. a concrete control</li>
              <li>Recorded and shared data across subjects</li>
            </ul>
          </div>
          <div className="stage-card">
            <div className="sc-num">Stage 03</div>
            <div className="sc-title">Evaluation</div>
            <ul className="bullets dense">
              <li>Analysed cooling effectiveness and limitations</li>
              <li>Assessed feasibility, scalability and community impact</li>
              <li>Reflected on collaboration and personal skills</li>
              <li>Linked outcomes back to SDG 11</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  // 7 — DESIGN THINKING (Planning)
  {
    section: 'Planning',
    tone: 'growth',
    content: (
      <>
        <div className="stage-chip">Stage 01 · Planning</div>
        <div className="eyebrow">Evolution of Our Idea</div>
        <h2 className="display">From a first idea to a working design</h2>
        <div className="timeline">
          <div className="tl-step">
            <div className="tl-dot-col">
              <div className="tl-dot" />
              <div className="tl-line" />
            </div>
            <div>
              <div className="tl-title">Initial idea</div>
              <div className="tl-desc">
                Start from the general concept of adding vegetation to hot concrete
                surfaces.
              </div>
            </div>
          </div>
          <div className="tl-step">
            <div className="tl-dot-col">
              <div className="tl-dot" />
              <div className="tl-line" />
            </div>
            <div>
              <div className="tl-title">Biodegradable Seed Carpet</div>
              <div className="tl-desc">A rollable carpet embedded with seeds.</div>
              <div className="tl-problem">
                Problem — pedestrian traffic damaged seeds; poor reliability of
                germination.
              </div>
            </div>
          </div>
          <div className="tl-step">
            <div className="tl-dot-col">
              <div
                className="tl-dot"
                style={{ background: 'var(--sdg-orange)', width: 14, height: 14 }}
              />
            </div>
            <div>
              <div className="tl-title">Final Design</div>
              <div className="tl-desc">
                Modular Biodegradable Green Roof Tile for rooftops and unused concrete —
                durable, layered, and reliable.
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 8 — PROPOSED SOLUTION
  {
    section: 'Proposed Solution',
    tone: 'growth',
    content: (
      <>
        <div className="eyebrow">Proposed Solution</div>
        <h2 className="display">The Modular Biodegradable Green Roof Tile</h2>
        <div className="solution-grid">
          <SolutionTile />
          <div className="legend">
            {SOLUTION_LEGEND.map((l, i) => (
              <div className="legend-item" key={i}>
                <div className="swatch" style={{ background: l.c }} />
                <div>
                  <div className="t">{l.t}</div>
                  <div className="d">{l.d}</div>
                </div>
              </div>
            ))}
            <div className="badge-row">
              <span className="tag">Lightweight</span>
              <span className="tag">Modular</span>
              <span className="tag">Expandable</span>
              <span className="tag">Sustainable</span>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 9 — COLLABORATION OVERVIEW
  {
    section: 'Collaboration',
    tone: 'sky',
    content: (
      <>
        <div className="eyebrow">Interdisciplinary Collaboration</div>
        <h2 className="display">One question, five disciplines</h2>
        <table className="collab">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Member(s)</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="subj">ESS</td>
              <td className="who">Prasanthi &amp; Yashvi</td>
              <td>Environmental context, urban heat island theory, sustainability framing</td>
            </tr>
            <tr>
              <td className="subj">Biology</td>
              <td className="who">Mohit</td>
              <td>Plant selection and growth suitability</td>
            </tr>
            <tr>
              <td className="subj">Chemistry</td>
              <td className="who">Sharany</td>
              <td>Tile materials and soil / growing-medium chemistry</td>
            </tr>
            <tr>
              <td className="subj">Computer Science</td>
              <td className="who">Manna</td>
              <td>Automated irrigation and environmental monitoring</td>
            </tr>
            <tr>
              <td className="subj">Physics</td>
              <td className="who">Manna</td>
              <td>Heat transfer, temperature measurement and analysis</td>
            </tr>
          </tbody>
        </table>
        <div className="collab-close">
          &ldquo;Every discipline contributes to answering one common research
          question.&rdquo;
        </div>
      </>
    ),
  },

  // 10 — ESS INDIVIDUAL
  {
    section: 'Individual Research',
    tone: 'sky',
    content: (
      <>
        <div className="person-head">
          <div className="person-avatar">ES</div>
          <div>
            <div className="eyebrow" style={{ margin: 0 }}>
              Individual Research · ESS
            </div>
            <div className="person-name">Prasanthi Muthusamy Parthiban &amp; Yashvi Pratap</div>
          </div>
        </div>
        <div className="subj-question">
          Why is the Urban Heat Island effect a problem, and why are green roofs a
          sustainable solution?
        </div>
        <div className="finding-grid">
          <div className="finding-card">
            <div className="fh">The Problem</div>
            <div className="fb">
              Concrete and asphalt absorb and store solar radiation while vegetation
              shrinks, intensifying the UHI effect and raising heat-related health risks.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Cooling Mechanism (US EPA)</div>
            <div className="fb">
              Green roofs cool by shading, deflecting radiation and releasing moisture —
              surfaces can be up to 56°F cooler, with nearby air up to 20°F cooler.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Wellbeing (WHO)</div>
            <div className="fb">
              Urban green spaces reduce exposure to heat, pollutants and noise and
              support physical and mental health where land is limited.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Feasibility</div>
            <div className="fb">
              A modular, biodegradable tile is lighter, cheaper and more adaptable than
              conventional green roofs — a realistic local response with scalability.
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 11 — BIOLOGY INDIVIDUAL
  {
    section: 'Individual Research',
    tone: 'sky',
    content: (
      <>
        <div className="person-head">
          <div className="person-avatar">MO</div>
          <div>
            <div className="eyebrow" style={{ margin: 0 }}>
              Individual Research · Biology
            </div>
            <div className="person-name">Mohit Chandramohan</div>
          </div>
        </div>
        <div className="subj-question">
          Which plant species are most suitable for rooftop greening, and how do plants
          cool surfaces?
        </div>
        <div className="finding-grid">
          <div className="finding-card">
            <div className="fh">Species Selection</div>
            <div className="fb">
              Native, drought-tolerant, shallow-rooted species are favoured for low
              maintenance, resilience and successful establishment on thin media.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Transpiration Cooling</div>
            <div className="fb">
              Plants release water vapour through stomata; this evapotranspiration absorbs
              latent heat and lowers the temperature of surrounding surfaces.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Shading Effect</div>
            <div className="fb">
              Leaf canopy intercepts solar radiation before it reaches the concrete,
              reducing direct heat absorption by the surface below.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Monitoring Indicators</div>
            <div className="fb">
              Seed germination, vegetation cover, growth rate and overall plant health are
              tracked as measures of successful, cooling-capable establishment.
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 12 — CHEMISTRY INDIVIDUAL
  {
    section: 'Individual Research',
    tone: 'sky',
    content: (
      <>
        <div className="person-head">
          <div className="person-avatar">SH</div>
          <div>
            <div className="eyebrow" style={{ margin: 0 }}>
              Individual Research · Chemistry
            </div>
            <div className="person-name">Sharany Ajit Nikam</div>
          </div>
        </div>
        <div className="subj-question">
          Which biodegradable materials and growing media have the most suitable chemical
          properties for the prototype?
        </div>
        <div className="finding-grid">
          <div className="finding-card">
            <div className="fh">Coconut Coir (Cocopeat)</div>
            <div className="fb">
              A porous lignocellulosic structure gives high water-holding capacity while
              maintaining aeration for roots.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Jute Fibre</div>
            <div className="fb">
              Cellulose, hemicellulose and lignin make it renewable and biodegradable,
              providing structure while decomposing naturally over time.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Soil pH</div>
            <div className="fb">
              A slightly acidic to neutral pH (≈ 6.0–7.5) optimises nutrient availability
              for healthy plant growth.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Compost Amendment</div>
            <div className="fb">
              Supplies organic matter, improves soil structure and gradually releases
              nutrients needed for vegetation establishment.
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 13 — COMPUTER SCIENCE INDIVIDUAL
  {
    section: 'Individual Research',
    tone: 'sky',
    content: (
      <>
        <div className="person-head">
          <div className="person-avatar">MA</div>
          <div>
            <div className="eyebrow" style={{ margin: 0 }}>
              Individual Research · Computer Science
            </div>
            <div className="person-name">Manna J</div>
          </div>
        </div>
        <div className="subj-question">
          Which sensors and microcontrollers are most appropriate for an automated
          irrigation system?
        </div>
        <div className="finding-grid">
          <div className="finding-card">
            <div className="fh">Moisture-Based Control</div>
            <div className="fb">
              Watering only when needed reduces water use and keeps growing conditions
              stable — ideal for consistent experimental results.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Capacitive Sensor</div>
            <div className="fb">
              Low-cost capacitive soil-moisture sensors, once calibrated, show strong
              agreement with commercial sensors and resist corrosion.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">System Architecture</div>
            <div className="fb">
              Sensor → microcontroller → relay → pump enables automated scheduling and
              logging of environmental data.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Reliability</div>
            <div className="fb">
              Automation removes human error in watering and produces continuous records
              for cross-subject analysis with Physics.
            </div>
          </div>
        </div>
      </>
    ),
  },

  // 14 — PHYSICS INDIVIDUAL (written)
  {
    section: 'Individual Research',
    tone: 'sky',
    content: (
      <>
        <div className="person-head">
          <div className="person-avatar">MA</div>
          <div>
            <div className="eyebrow" style={{ margin: 0 }}>
              Individual Research · Physics
            </div>
            <div className="person-name">Manna J</div>
          </div>
        </div>
        <div className="subj-question">
          How does vegetation influence heat transfer and surface temperature on
          concrete?
        </div>
        <div className="finding-grid">
          <div className="finding-card">
            <div className="fh">Radiation &amp; Albedo</div>
            <div className="fb">
              Dark concrete has low albedo, absorbing most incident solar radiation.
              Vegetation reflects and intercepts radiation, lowering the energy reaching
              the surface.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Evaporative (Latent) Cooling</div>
            <div className="fb">
              Evapotranspiration converts absorbed energy into latent heat of
              vaporisation rather than a temperature rise, cooling the tile and the air
              around it.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Conduction &amp; Thermal Mass</div>
            <div className="fb">
              Moist soil and coir insulate the concrete, slowing conductive heat flow and
              reducing the peak surface temperature and night-time re-radiation.
            </div>
          </div>
          <div className="finding-card">
            <div className="fh">Measurement Method</div>
            <div className="fb">
              An infrared thermometer compares the tile surface with an uncovered concrete
              control under identical conditions; the temperature difference quantifies
              cooling.
            </div>
          </div>
        </div>
        <p
          className="body-text"
          style={{ marginTop: '1.1rem', fontSize: '0.9rem', opacity: 0.85 }}
        >
          Physics also integrates its temperature data into the Computer Science
          monitoring system to evaluate and improve environmental control during the
          experiment.
        </p>
      </>
    ),
  },

  // 15 — METHODOLOGY (Action)
  {
    section: 'Methodology',
    tone: 'sky',
    content: (
      <>
        <div className="stage-chip">Stage 02 · Action</div>
        <div className="eyebrow">Experimental Overview</div>
        <h2 className="display">How we test it</h2>
        <div className="flow">
          {[
            'Construct tile',
            'Grow plants',
            'Monitor moisture',
            'Automated watering',
            'Measure temperatures',
            'Compare with control',
            'Analyse results',
          ].map((step, i, arr) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="flow-box">
                <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </span>
              {i < arr.length - 1 && <span className="flow-arrow">→</span>}
            </span>
          ))}
        </div>
        <p className="body-text" style={{ marginTop: '1.6rem' }}>
          The green-roof tile and an uncovered concrete control are measured with an
          infrared thermometer under the same conditions; the temperature difference
          answers the research question.
        </p>
      </>
    ),
  },

  // 16 — EXPECTED OUTCOMES (Action)
  {
    section: 'Expected Outcomes',
    tone: 'leaf',
    content: (
      <>
        <div className="eyebrow">Expected Outcomes</div>
        <h2 className="display">What we anticipate finding</h2>
        <div className="outcome-grid">
          {[
            'Lower concrete surface temperatures',
            'Better moisture retention',
            'Healthy vegetation growth',
            'Sustainable, passive cooling',
            'Less water wastage',
            'Modular urban greening at scale',
          ].map((t, i) => (
            <div className="outcome-card" key={i}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div>
              <div className="t">{t}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },

  // 17 — SAFETY, ETHICAL & ENVIRONMENTAL CONSIDERATIONS (NEW)
  {
    section: 'Considerations',
    tone: 'soil',
    content: (
      <>
        <div className="eyebrow">Safety, Ethical &amp; Environmental Considerations</div>
        <h2 className="display">Working responsibly</h2>
        <div className="reflect-grid">
          <div className="reflect-block">
            <div className="rb-h">Safety</div>
            <ul className="bullets dense">
              <li>Careful handling of the water pump, wiring and low-voltage electronics</li>
              <li>Rooftop/edge safety and stable placement of tiles when wet and heavier</li>
              <li>Hygiene when handling soil, compost and standing water</li>
            </ul>
          </div>
          <div className="reflect-block">
            <div className="rb-h">Ethical</div>
            <ul className="bullets dense">
              <li>Only native, non-invasive species used to avoid ecological harm</li>
              <li>No harm to insects or organisms that colonise the tile</li>
              <li>Honest recording and reporting of all temperature data</li>
            </ul>
          </div>
          <div className="reflect-block">
            <div className="rb-h">Environmental</div>
            <ul className="bullets dense">
              <li>Biodegradable, compostable materials (jute, coir) minimise waste</li>
              <li>Sensor-driven irrigation reduces unnecessary water consumption</li>
              <li>Small footprint prototype; materials reused or composted after testing</li>
            </ul>
          </div>
          <div className="reflect-block">
            <div className="rb-h">Sustainability</div>
            <ul className="bullets dense">
              <li>Low-cost, locally sourced materials support scalability</li>
              <li>Passive cooling lowers building energy demand over time</li>
              <li>Design aligns with a circular, low-impact life cycle</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  // 18 — LIMITATIONS & COMMUNITY IMPACT (Evaluation)
  {
    section: 'Evaluation',
    tone: 'soil',
    content: (
      <div className="content-row">
        <div className="col">
          <div className="stage-chip">Stage 03 · Evaluation</div>
          <div className="eyebrow">Limitations</div>
          <ul className="bullets dense">
            <li>Small-scale prototype may not represent whole rooftops</li>
            <li>Weather dependence causes variable cooling results</li>
            <li>Short testing duration misses long-term and seasonal effects</li>
            <li>Plant survival risk if moisture/soil depth are not maintained</li>
            <li>Biodegradable materials may degrade faster than conventional ones</li>
            <li>Still needs watering, monitoring and upkeep</li>
            <li>Added weight when wet requires structural assessment</li>
          </ul>
        </div>
        <div className="col">
          <div className="eyebrow">Community Impact</div>
          <ul className="bullets dense">
            <li>Reduces local heat stress on concrete for nearby people</li>
            <li>Improves liveability in dense areas with little open space</li>
            <li>Shows unused concrete can be greened with simple solutions</li>
            <li>Native plants enhance urban biodiversity</li>
            <li>Promotes sustainable urban design aligned with SDG 11</li>
            <li>Provides interdisciplinary educational value for schools</li>
          </ul>
        </div>
      </div>
    ),
  },

  // 19 — REFLECTION & PERSONAL SKILLS (NEW)
  {
    section: 'Reflection',
    tone: 'growth',
    content: (
      <>
        <div className="eyebrow">Personal Skills &amp; Reflection</div>
        <h2 className="display">What collaboration taught us</h2>
        <div className="reflect-grid">
          <div className="reflect-block">
            <div className="rb-h">Collaboration</div>
            <ul className="bullets dense">
              <li>Each subject&apos;s findings fed directly into the next (Chemistry → CS → Physics)</li>
              <li>Shared one research question so results stayed comparable</li>
              <li>Regular check-ins kept the interdisciplinary design consistent</li>
            </ul>
          </div>
          <div className="reflect-block">
            <div className="rb-h">Perseverance</div>
            <ul className="bullets dense">
              <li>Redesigned from a seed carpet to a durable modular tile after a flaw</li>
              <li>Calibrated sensors and re-ran measurements for reliability</li>
              <li>Adapted to weather variability in outdoor testing</li>
            </ul>
          </div>
          <div className="reflect-block">
            <div className="rb-h">ATL Skills Used</div>
            <ul className="bullets dense">
              <li>Thinking — evaluating trade-offs between designs</li>
              <li>Communication — sharing data across five subjects</li>
              <li>Research &amp; self-management — sourcing and scheduling work</li>
            </ul>
          </div>
          <div className="reflect-block">
            <div className="rb-h">What We Would Improve</div>
            <ul className="bullets dense">
              <li>Longer testing window to capture seasonal change</li>
              <li>Multiple tiles for repeatable, averaged data</li>
              <li>Data-logging dashboard to visualise trends live</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  // 20 — SDG 11
  {
    section: 'SDG 11',
    tone: 'leaf',
    content: (
      <div className="content-row">
        <div className="col">
          <div className="eyebrow">Connection to SDG 11</div>
          <h2 className="display">Sustainable Cities and Communities</h2>
          <div className="sdg-check-list">
            <div className="sdg-check">
              <span className="mark">✓</span>
              <span>Sustainable cities — practical, low-cost urban greening</span>
            </div>
            <div className="sdg-check">
              <span className="mark">✓</span>
              <span>Climate resilience — reduced heat stress on infrastructure</span>
            </div>
            <div className="sdg-check">
              <span className="mark">✓</span>
              <span>Urban biodiversity — habitat within dense built environments</span>
            </div>
            <div className="sdg-check">
              <span className="mark">✓</span>
              <span>Greener infrastructure — modular, scalable, and biodegradable</span>
            </div>
          </div>
        </div>
        <div className="visual-panel">
          <span className="sdg-icon" style={{ width: 110, height: 110 }}>
            <SdgMark size={56} />
          </span>
          <div className="mono-label" style={{ margin: 0 }}>
            SDG 11
          </div>
        </div>
      </div>
    ),
  },

  // 21 — CONCLUSION
  {
    section: 'Conclusion',
    tone: 'forest',
    content: (
      <>
        <div className="eyebrow">Conclusion</div>
        <h2 className="display">Bringing it together</h2>
        <div className="conclusion-points">
          <div className="cpt">
            Urban heat is a growing environmental problem, driven by the loss of green
            space to concrete.
          </div>
          <div className="cpt">
            Our biodegradable modular green roof tile provides a practical, lightweight,
            and scalable solution.
          </div>
          <div className="cpt">
            Combining Biology, Chemistry, Physics, Computer Science, and ESS creates a
            more effective and sustainable approach.
          </div>
        </div>
        <div className="closing-line">
          &ldquo;Small-scale innovations can collectively contribute to creating cooler,
          greener and more sustainable cities.&rdquo;
        </div>
      </>
    ),
  },

  // 22 — REFERENCES (NEW)
  {
    section: 'References',
    tone: 'concrete',
    content: (
      <>
        <div className="eyebrow">References</div>
        <h2 className="display">Sources consulted</h2>
        <div className="ref-list">
          <div className="ref-item">
            <div>
              Using Green Roofs to Reduce Heat Islands.
              <span className="src">United States Environmental Protection Agency (US EPA)</span>
            </div>
          </div>
          <div className="ref-item">
            <div>
              The evapotranspiration process in green roofs: A review.
              <span className="src">ScienceDirect</span>
            </div>
          </div>
          <div className="ref-item">
            <div>
              About Green Roofs.
              <span className="src">Green roof technology overview</span>
            </div>
          </div>
          <div className="ref-item">
            <div>
              M-Tray® Green Roof Installation Guide — Modular Green Roof System.
              <span className="src">Conventional modular roof tile installation reference</span>
            </div>
          </div>
          <div className="ref-item">
            <div>
              Urban green spaces and health.
              <span className="src">World Health Organization (WHO)</span>
            </div>
          </div>
          <div className="ref-item">
            <div>
              Calibration of low-cost capacitive soil moisture sensors for automated
              irrigation.
              <span className="src">Field study literature (Computer Science research)</span>
            </div>
          </div>
        </div>
      </>
    ),
  },
]
