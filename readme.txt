You are Claude, an expert full-stack web developer with 10+ years of experience building production-grade, SEO-optimized websites using the Astro framework.

Your task:  
Build a complete, well-structured Astro project for the brand **SignalForge** (signalforge.ro), following the specs below.

────────────────────────────────
1. BRAND & POSITIONING
────────────────────────────────

Brand name: **SignalForge**  
Domain: **signalforge.ro**

Core positioning:  
SignalForge is a technical brand that builds and implements AI systems, automation, and security-oriented infrastructure for businesses.

High-level message:  
“We transform raw signals (data, events, conversations) into intelligent systems that automate work and secure operations.”

Taglines (you can pick one as the main):  
- "Intelligence. Engineered."  
- "Where data becomes intelligence."  
- "Smart automations. Real impact."  
You may use one as the main hero tagline and another as a supporting line.

Primary services (for homepage + /services page):

1. **AI Chatbots & Automations**
   - Website AI chatbots
   - WhatsApp assistants
   - AI-driven lead capture and customer support
   - Custom logic bots for FAQ, support, and sales flows

2. **Business Workflow Automation**
   - Integrations with CRM, email, calendars
   - Scripted automations for repetitive tasks
   - Data pipelines and smart routing
   - Custom tools for operations efficiency

3. **Security & Infrastructure Consulting**
   - Hardening for servers, networks, and applications
   - Wazuh / Suricata / monitoring setups
   - SOC / security automation
   - Audits and best-practice recommendations


────────────────────────────────
2. VISUAL IDENTITY & DESIGN
────────────────────────────────

Use a **dark-mode first** aesthetic, with an optional light mode if you want, but DARK is primary.

Color palette (define as CSS variables in a global stylesheet and reuse consistently):

- `--color-bg-main: #0A0A0C;`        (Black Iron – main background)
- `--color-bg-elevated: #1E1F22;`    (Forge Gray – cards, sections)
- `--color-text-main: #FFFFFF;`      (Pure White – main text)
- `--color-text-muted: #C3C6CF;`     (Data Silver – muted text)
- `--color-accent-primary: #00E5FF;` (Signal Cyan – primary accent, buttons, links)
- `--color-accent-secondary: #FF6B35;` (Forge Orange – secondary accent)

Use subtle borders, card shadows or glows VERY sparingly, in a tasteful, modern way.

Typography:

Use Google Fonts (or equivalent) with this hierarchy:

- **Headings / Hero:** `Space Grotesk` (preferred) or `Montserrat`  
- **Subheadings:** `Montserrat`  
- **Body text:** `Inter`

Load them in the most Astro-idiomatic way (e.g. via `<link>` in `<head>` or an Astro layout).

Style guidelines:

- Clean, spacious layout with good whitespace.
- Responsive from mobile to large desktop.
- Avoid overly flashy gradients; focus on sharp, techy look.
- Use accent colors for CTAs and key highlights only.


────────────────────────────────
3. ARCHITECTURE & FILE STRUCTURE
────────────────────────────────

Create a **modular Astro project** with clear separation of concerns.

Use something roughly like this structure (you can refine as needed to be idiomatic Astro):

- `src/`
  - `layouts/`
    - `BaseLayout.astro`      (global layout: <html>, <head>, header, footer wrapper)
  - `components/`
    - `Header.astro`
    - `Footer.astro`
    - `HeroSection.astro`
    - `ServicesSection.astro`
    - `ProcessSection.astro`
    - `AboutIntro.astro`
    - `ContactSection.astro`
    - `CTASection.astro`
    - `FeatureCards.astro`       (generic cards grid)
    - `TestimonialSection.astro` (with placeholder content)
    - `PageIntro.astro`          (reusable page header / title + subtitle)
  - `pages/`
    - `index.astro`         (Homepage)
    - `services.astro`      (Services overview, more detailed)
    - `about.astro`         (About / Philosophy / Why SignalForge)
    - `contact.astro`       (Contact page with form)
  - `styles/`
    - `globals.css`         (color variables, typography, base styles, layout helpers)
  - `data/`
    - `siteConfig.json`     (see next section)
    - `services.json`       (services definitions, slugs, blurbs)
    - `navigation.json`     (if useful; or include in siteConfig)

You are allowed to adjust exact file names and locations IF you keep things clear, modular, and idiomatic Astro.


────────────────────────────────
4. CONFIG VIA JSON (CONTENT & SEO)
────────────────────────────────

I want you to create a small JSON-based configuration system so that I can later change texts / navigation / SEO without digging into every template.

Create **at least**:

1. `src/data/siteConfig.json` containing:
   - `siteTitle`: "SignalForge"
   - `siteTagline`: "Intelligence. Engineered."
   - `siteDescription`: a short SEO description about SignalForge as an AI, automation, and security systems company.
   - `domain`: "signalforge.ro"
   - `primaryEmail`: "contact@signalforge.ro"
   - `location`: "Bacău, Romania"
   - `navLinks`: array of objects like:
     ```json
     [
       { "label": "Home", "href": "/" },
       { "label": "Services", "href": "/services" },
       { "label": "About", "href": "/about" },
       { "label": "Contact", "href": "/contact" }
     ]
     ```

2. `src/data/services.json` containing structured data for the 3 main services:
   - A `slug` (e.g. `ai-chatbots`, `workflow-automation`, `security-consulting`)
   - `title`
   - `shortDescription`
   - `longDescription`
   - `bullets` (list of features)
   - `category` (e.g. "AI", "Automation", "Security")

3. Optionally a `src/data/process.json` for the 5-step process:
   - 1: Discovery
   - 2: Architecture
   - 3: Forge (Build)
   - 4: Deploy
   - 5: Support

Use these JSON files inside components/pages so I can easily tweak them later.

IMPORTANT:  
- For SEO, use `siteConfig` to populate `<title>`, `<meta name="description">`, OpenGraph tags, etc.
- Implement meta tags per page (Home, Services, About, Contact) in an Astro-idiomatic way (head section in layout or per page).


────────────────────────────────
5. PAGE-BY-PAGE REQUIREMENTS
────────────────────────────────

A. **Homepage `/`**

Use a strong, cinematic hero and clear sections.

Sections (in this order or similar):

1. **HeroSection**
   - Big heading: e.g. "Intelligence. Engineered."
   - Supporting text: 2–3 lines about transforming signals/data into intelligent systems (AI chatbots, automation, security).
   - Primary CTA button: "Request a consultation"
   - Secondary CTA (optional): "See what we build"
   - Include a subtle background (e.g. gradient, grid, or abstract “signal” pattern) using the color palette.

   In the code, add a COMMENT where the logo will go in the header (see “logo instructions” below).

2. **ServicesSection**
   - A 3-card grid with the main services.
   - For each service, read from `services.json`.
   - Cards show title, shortDescription, and a few bullets.
   - Each card links to `/services` (or eventually to specific service detail anchors).

3. **ProcessSection**
   - Introduce the 5-step working process:
     - Discovery
     - Architecture
     - Forge
     - Deploy
     - Support
   - Represent it as a horizontal stepper or vertical timeline.

4. **Why SignalForge / AboutIntro**
   - Explain in 2–3 paragraphs why this brand exists:
     - Technical background
     - Combination of AI, automation, and security
     - Focus on practical, working systems rather than buzzwords
   - Maybe include 3 bullet “pillars”: Intelligence, Reliability, Security.

5. **CTASection**
   - A final call to action close to the footer:
     - Headline: “Ready to forge your next system?”
     - Button: “Contact us” → link to `/contact`.

B. **Services `/services`**

- Use `PageIntro` at the top with title: "Services" and a short description.
- Show the same 3 main services but with longDescription + detailed bullets from `services.json`.
- Structure them as stacked sections or cards with anchors (e.g. `#ai-chatbots`, `#workflow-automation`, `#security-consulting`).

C. **About `/about`**

- Use `PageIntro` with title: "About SignalForge".
- Sections idea:
  1. Our mission (why we exist).
  2. Our approach (technical, pragmatic, security-aware).
  3. What kind of businesses we help (SMBs, tech companies, internal IT, etc.).
- You can write reasonable placeholder content written in a professional but not corporate tone.

D. **Contact `/contact`**

- Use `PageIntro` with title: "Contact".
- Show:
  - Short text inviting people to request a consultation.
  - Email address from `siteConfig`.
  - Location from `siteConfig`.
- Include a contact form (HTML only is fine, no backend processing needed now) with:
  - Name
  - Email
  - Company (optional)
  - Message
- Add a clear comment `// TODO: Connect this form to a backend or form service` in the code.


────────────────────────────────
6. HEADER, FOOTER & LOGO PLACEMENT
────────────────────────────────

**Header:**

- Use `Header.astro` and include:
  - Placeholder for logo on the left.
  - Navigation links from `siteConfig.navLinks`.
  - Optional “Contact” button accent on the right.

IMPORTANT:  
In `Header.astro`, add clear comments indicating where I'll need to:

- import the logo file (e.g. `import logo from "../assets/logo.svg";`)
- render the logo image.

Example of the comment style I want:

```astro
---
// TODO: Import your logo asset here, e.g.
// import logo from "../assets/signalforge-logo.svg";
---
<header>
  <!-- TODO: Replace this text with your logo image component -->
  <!-- Example: <img src={logo} alt="SignalForge logo" /> -->
</header>

Footer:
	•	Include:
	•	Brand name
	•	Year (dynamic if possible)
	•	Email from siteConfig
	•	Short line like: “SignalForge — Intelligence. Engineered.”
	•	Links to main pages.

────────────────────────────────
7. CODE STYLE & COMMENTS
────────────────────────────────
	•	Use clean, idiomatic Astro.
	•	Prefer composition: small, focused components.
	•	Use consistent naming for props and components.
	•	Add comments in key places where:
	•	I might want to change content later
	•	I should plug in a logo
	•	I might extend with more services
	•	Make sure the CSS is organized in globals.css with:
	•	CSS variables for colors
	•	Base styles for body, headings, links, buttons
	•	Utility classes or simple layout helpers (like .container, .section, etc.)

────────────────────────────────
8. SEO, ACCESSIBILITY & RESPONSIVENESS
────────────────────────────────

SEO:
	•	Use <title> and <meta name="description"> per page.
	•	Use siteConfig for base title and description.
	•	For the homepage, prepend or append brand name to the title, e.g. “Intelligence. Engineered. | SignalForge”.
	•	Add basic OpenGraph tags in the main layout (og:title, og:description, og:url).

Accessibility:
	•	Make sure headings are hierarchical (h1 once per page, then h2, h3, etc.).
	•	Use accessible color contrast (ensure text vs background contrast is sufficient).
	•	Buttons and links should have clear focus styles.

Responsiveness:
	•	Design mobile-first and then scale up.
	•	Ensure header navigation is usable on mobile (e.g. simple hamburger or stacked menu for small screens).
	•	Cards and grids should stack nicely on small screens.

────────────────────────────────
9. OUTPUT FORMAT
────────────────────────────────

In your answer, please:
	1.	Assume this is a fresh Astro project (e.g. created via npm create astro@latest).
	2.	Provide the key source files as separate code blocks, each preceded by a clear path comment, for example:
File: src/layouts/BaseLayout.astro
<!-- code here -->

3.	Include, at minimum:
	•	src/layouts/BaseLayout.astro
	•	src/components/Header.astro
	•	src/components/Footer.astro
	•	src/components/HeroSection.astro
	•	src/components/ServicesSection.astro
	•	src/components/ProcessSection.astro
	•	src/components/AboutIntro.astro
	•	src/components/ContactSection.astro
	•	src/components/CTASection.astro
	•	src/pages/index.astro
	•	src/pages/services.astro
	•	src/pages/about.astro
	•	src/pages/contact.astro
	•	src/styles/globals.css
	•	src/data/siteConfig.json
	•	src/data/services.json
	•	(optional) src/data/process.json
	4.	Do NOT just describe the structure — actually write the code content for all these files with reasonable, production-ready placeholder text.
	5.	Keep your own inline explanations to a minimum; focus on delivering clean, well-commented code that I can drop into an Astro project and run.

────────────────────────────────

Now, please generate the Astro project files according to all the instructions above.

