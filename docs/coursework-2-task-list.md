# VitalQuest CW2 Implementation Checklist

This checklist is intentionally aligned with:

- [coursework-2.md](/Users/rumeasiyan/external/VitalQuest/docs/coursework-2.md)
- [6BUIS018C.2_Group_02_Coursework1.md](/Users/rumeasiyan/external/VitalQuest/docs/6BUIS018C.2_Group_02_Coursework1.md)

Use this file as your working tracker while building the prototype and later while writing the report.

## 1. CW2 Scope Rules

- [ ] Keep the prototype focused on `pages`, layout, navigation, and mock interactions
- [ ] Do not spend time building real backend logic unless personally needed
- [ ] Use sample data for wearable sync, analytics, quests, rewards, guilds, and premium features
- [ ] Clearly label simulated features with text such as `Demo only`, `Prototype`, `Simulated sync`, or `Future coded feature`
- [ ] Ensure the final website has at least `10 meaningful pages`
- [ ] Make the pages reflect the `same business idea` from CW1 rather than changing the concept

## 2. Core CW1 Ideas That Must Be Visible in the Prototype

These are the ideas your prototype should repeatedly reinforce because they are central to CW1.

- [ ] VitalQuest is a `gamified digital wellness platform`
- [ ] It combines `physical health`, `mental wellbeing`, and `nutrition`
- [ ] It uses `Bio-Sync` to verify activity from wearables rather than relying only on manual entry
- [ ] It motivates users through `RPG progression`, `quests`, and `storytelling`
- [ ] It supports `guilds`, `community accountability`, and `leaderboards`
- [ ] It uses a `freemium model` with premium quests, story expansions, and avatar customisation
- [ ] It can later support both `B2C users` and `B2B corporate wellness` opportunities
- [ ] It should feel more immersive and differentiated than a normal fitness tracker

## 3. Recommended Final Page Structure

These routes are strong because they map directly to your CW1 requirements and use cases.

- [ ] `/` Home / Landing Page
- [ ] `/onboarding` Profile Setup
- [ ] `/bio-sync` Wearable Connections
- [ ] `/dashboard` Progress Dashboard
- [ ] `/quests` Quest Hub
- [ ] `/quests/[slug]` Quest Detail
- [ ] `/story` Narrative Progression
- [ ] `/avatar` Avatar Stats and Rewards
- [ ] `/guilds` Community Guilds
- [ ] `/leaderboard` Leaderboards and Events
- [ ] `/premium` Premium Plans and Store
- [ ] `/support` Support, Feedback, and AI Tips

Optional but useful:

- [ ] `/corporate-wellness` B2B / employer wellness showcase

## 4. Global Site Tasks

Finish these before or while building individual pages.

- [ ] Replace the current starter homepage with VitalQuest branding
- [ ] Create a shared layout for the prototype
- [ ] Add a navigation bar that reflects the final site structure
- [ ] Keep the visual theme consistent across all pages
- [ ] Make the design feel like a wellness RPG product, not a generic admin dashboard
- [ ] Add internal links between major pages so navigation is easy to demonstrate
- [ ] Make sure each page has enough content to be screenshot-ready for the report

## 5. Page Checklist

## 5.1 Home / Landing Page

Purpose:
This page should introduce VitalQuest as a unique online business and immediately communicate the problem it solves: users lose motivation with traditional health and fitness platforms because those platforms feel repetitive, disconnected, and boring.

CW1 alignment:
- problem statement
- idea
- mission statement
- competitive advantage
- Blue Ocean differentiation

Checklist:

- [ ] Write a strong hero section that explains VitalQuest in one clear sentence
- [ ] Show that VitalQuest combines `fitness`, `mental wellbeing`, and `nutrition`
- [ ] Mention `Bio-Sync` as the verified progress system
- [ ] Mention `quests`, `story progression`, and `avatar growth`
- [ ] Include sections that show how the platform is different from normal tracking apps
- [ ] Add cards or previews linking to Dashboard, Quests, Story, Guilds, and Premium
- [ ] Include a short section that reflects the mission of sustainable healthy habits
- [ ] Use CTA buttons such as `Start Your Quest`, `Connect Wearable`, or `View Progress`

What this page should prove:
- [ ] VitalQuest is not just another tracker
- [ ] The business idea from CW1 is immediately understandable

## 5.2 Onboarding / Profile Setup

Purpose:
This page represents the first-time user flow and should directly reflect `FR1 User Registration and Profile Setup`.

CW1 alignment:
- FR1
- target market inclusivity
- personalized user journey

Checklist:

- [ ] Add a mock sign-up section with options like email, Google, and Facebook
- [ ] Add a profile setup form with age, weight, goal, fitness level, and wellness focus
- [ ] Add selectable goals such as `Lose weight`, `Build consistency`, `Reduce stress`, `Improve sleep`
- [ ] Add avatar or class selection to show the RPG aspect
- [ ] Show a short preview of how user choices affect quests or progression
- [ ] Mention that this setup personalises the user journey
- [ ] Keep the flow simple and beginner-friendly to reflect accessibility

Prototype-only notes:

- [ ] Label account creation as simulated
- [ ] Label biometric or social login as simulated

What this page should prove:
- [ ] VitalQuest personalises the experience from the beginning
- [ ] The product is designed for different user types, not only athletes

## 5.3 Bio-Sync / Wearable Connections

Purpose:
This page is one of the most important pages in the whole coursework because it represents the `Bio-Sync` advantage and `UC1 Sync Wearable Data`.

CW1 alignment:
- FR2 Bio-Sync Integration
- UC1 Sync Wearable Data
- verified progress
- anti-cheat differentiation
- secure and trustworthy data use

Checklist:

- [ ] Add cards for Apple Health, Google Fit, Fitbit, or similar platforms
- [ ] Show a mock permissions flow or connection status panel
- [ ] Display sample imported data such as steps, heart rate, sleep, and active minutes
- [ ] Show how verified data is converted into XP, rewards, or avatar stats
- [ ] Add a recent sync history section
- [ ] Add a retry or sync-failed state to show realistic behaviour
- [ ] Include a note that Bio-Sync reduces fake progress compared to manual-entry apps
- [ ] Include a privacy/security note because CW1 emphasised trust and data sensitivity

Prototype-only notes:

- [ ] Label all integrations as simulated
- [ ] Label data validation and anomaly detection as future coded functionality

What this page should prove:
- [ ] VitalQuest has a clear competitive advantage
- [ ] The system uses verified progress rather than pure self-reporting

## 5.4 Dashboard / Progress Analytics

Purpose:
This page should represent `FR6 Progress Tracking and Analytics` and `UC4 View Progress and Analytics`.

CW1 alignment:
- FR6
- UC4
- holistic wellbeing tracking
- predictive insight value
- serious user benefit beyond simple gamification

Checklist:

- [ ] Add a top summary for level, XP, streak, and current chapter
- [ ] Add cards for fitness, nutrition, and mindfulness progress
- [ ] Add sample charts or visual summaries for recent progress
- [ ] Add a predictive insight card such as `2 more quests to reach Level 10`
- [ ] Add a section that shows how recent Bio-Sync data affects the dashboard
- [ ] Add filters by timeframe or category
- [ ] Add an export button for PDF/CSV style reporting
- [ ] Make the content easy to understand at a glance

Prototype-only notes:

- [ ] Label analytics as demo data
- [ ] Label exports as simulated

What this page should prove:
- [ ] VitalQuest delivers practical value, not just entertainment
- [ ] The platform integrates physical, mental, and nutritional progress in one place

## 5.5 Quest Hub

Purpose:
This page should represent `FR3 Quest and Challenge System`.

CW1 alignment:
- FR3
- AI-adaptive quests
- behavioural motivation
- narrative-driven retention

Checklist:

- [ ] Add daily quests
- [ ] Add weekly quests
- [ ] Categorise quests as physical, nutrition, and mindfulness
- [ ] Add difficulty indicators or quest types
- [ ] Show rewards such as XP, loot, stat boosts, or story unlocks
- [ ] Make quest descriptions immersive and story-based rather than generic
- [ ] Add a recommended quest section to reflect personalisation
- [ ] Show one or two locked quests to imply progression

What this page should prove:
- [ ] Habit-building is turned into a game loop
- [ ] The platform encourages retention through varied quests

## 5.6 Quest Detail Page

Purpose:
This page should show what one quest actually looks like when opened by the user.

CW1 alignment:
- FR3
- UC2 Participate in Quests
- Bio-Sync verification dependency
- reward and progression loop

Checklist:

- [ ] Add a quest title with strong narrative context
- [ ] Clearly describe the user objective
- [ ] Show verification criteria such as steps, time, or completion conditions
- [ ] Add a progress tracker or completion bar
- [ ] Show expected rewards
- [ ] Show which avatar stats will improve after completion
- [ ] Add a completion outcome preview
- [ ] Add a partial completion or failed state example if possible

Prototype-only notes:

- [ ] Label live progress as simulated
- [ ] Label reward distribution as simulated

What this page should prove:
- [ ] Real-world healthy actions feed directly into game progression
- [ ] Quest completion is more structured than a normal to-do list

## 5.7 Story / Narrative Progression

Purpose:
This page should represent `FR4 Narrative Progression`, one of the strongest differentiators in your business idea.

CW1 alignment:
- FR4
- narrative-driven retention
- branching progression
- intrinsic motivation

Checklist:

- [ ] Create a chapter map, world map, or story path
- [ ] Show unlocked and locked story arcs
- [ ] Show how user actions influence story progression
- [ ] Connect habits to outcomes such as unlocking a path, scene, or chapter
- [ ] Add lore, mission briefings, or chapter summaries to make it immersive
- [ ] Make it visually distinct from the dashboard so it feels like part of the RPG layer

What this page should prove:
- [ ] VitalQuest motivates users emotionally, not just statistically
- [ ] The story system supports long-term engagement and lowers dropout risk

## 5.8 Avatar Stats and Rewards

Purpose:
This page should represent the holistic character-balancing concept from CW1.

CW1 alignment:
- holistic character balancing
- verified rewards
- retention through progression
- monetization through customisation

Checklist:

- [ ] Add an avatar preview or profile panel
- [ ] Show stats such as strength, mana, resilience, focus, stamina, or similar
- [ ] Explain which real-world habits affect which stats
- [ ] Show recent rewards, loot, badges, or earned items
- [ ] Add cosmetic customisation or skin previews
- [ ] Add a progression bar for the next level
- [ ] Keep the page clearly connected to health behaviour rather than random game mechanics

What this page should prove:
- [ ] VitalQuest turns healthy routines into meaningful RPG progression
- [ ] Physical and mental wellbeing are balanced together, not isolated

## 5.9 Guilds / Community

Purpose:
This page should represent `FR5 Social and Community Features` and `UC3 Engage in Social Features`.

CW1 alignment:
- FR5
- UC3
- guild accountability
- community retention
- network effects

Checklist:

- [ ] Show a list of guilds with themes or purposes
- [ ] Add a featured guild or suggested guild section
- [ ] Add group challenge previews
- [ ] Add a mock community activity feed
- [ ] Add reactions/comments preview
- [ ] Add a report or moderation action to show trust and safety awareness
- [ ] Add a note about privacy or what stats are publicly shared

Prototype-only notes:

- [ ] Label posting and messaging as simulated
- [ ] Label moderation workflow as future implementation

What this page should prove:
- [ ] Social features help retain users
- [ ] Community accountability is part of the strategic design

## 5.10 Leaderboard / Events

Purpose:
This page should extend the community model and show competition, seasonal engagement, and achievement recognition.

CW1 alignment:
- FR5
- behavioural motivation
- engagement and retention
- switching-cost strategy through community and progress

Checklist:

- [ ] Show weekly or seasonal rankings
- [ ] Add a challenge banner for a live event or season
- [ ] Show the current user position
- [ ] Add badges, achievements, or titles
- [ ] Separate solo and guild-based competition if possible
- [ ] Add a privacy note because not all users may want full public sharing

What this page should prove:
- [ ] VitalQuest uses competition in a structured and motivating way
- [ ] The community layer is more than just a simple social feed

## 5.11 Premium / Store

Purpose:
This page should represent `FR7 Monetization Integration` and the freemium revenue model discussed in CW1.

CW1 alignment:
- FR7
- freemium model
- premium quests
- story expansions
- avatar customisation
- possible coaching or advanced modules

Checklist:

- [ ] Add a Free vs Premium comparison section
- [ ] Show premium benefits such as advanced quests, analytics, story chapters, and coaching modules
- [ ] Add an item shop for avatar skins, accessories, or challenge packs
- [ ] Show premium story expansions or quest bundles
- [ ] Mention that monetization supports recurring revenue while keeping free access available
- [ ] Optionally mention future corporate or partner packages

Prototype-only notes:

- [ ] Label payment and checkout as simulated
- [ ] Label subscriptions as simulated

What this page should prove:
- [ ] The business model from CW1 is visible in the prototype
- [ ] Monetization is integrated into the product experience, not added randomly

## 5.12 Support / Feedback / AI Tips

Purpose:
This page should represent `FR8 Feedback and Support`.

CW1 alignment:
- FR8
- user support
- AI-driven tips
- continuous improvement

Checklist:

- [ ] Add support categories or help topics
- [ ] Add a mock chat interface
- [ ] Add AI-generated wellbeing tips or guidance cards
- [ ] Add a feedback or issue-reporting form
- [ ] Add a quest suggestion form or idea submission box
- [ ] Add an FAQ section
- [ ] Make it clear this page supports improvement and user trust

Prototype-only notes:

- [ ] Label chat as simulated
- [ ] Label AI assistance as simulated

What this page should prove:
- [ ] The platform has a support and improvement loop
- [ ] Users are not left alone after onboarding

## 5.13 Optional Corporate Wellness Page

Purpose:
This page is optional, but it helps reinforce the B2B component mentioned in CW1.

CW1 alignment:
- B2B component
- corporate wellness packages
- partnership opportunities
- revenue diversification

Checklist:

- [ ] Explain the employer or organisation use case
- [ ] Show benefits such as healthier employees, engagement, and team challenges
- [ ] Show a demo dashboard, team challenge, or reporting concept
- [ ] Mention premium business packages or partnerships

What this page should prove:
- [ ] VitalQuest has room to scale beyond individual users
- [ ] The business model is broader than a consumer-only app

## 6. Mapping to CW1 Functional Requirements

Use this section to verify nothing important is missing.

- [ ] `FR1 User Registration and Profile Setup` is represented by `/onboarding`
- [ ] `FR2 Bio-Sync Integration` is represented by `/bio-sync`
- [ ] `FR3 Quest and Challenge System` is represented by `/quests` and `/quests/[slug]`
- [ ] `FR4 Narrative Progression` is represented by `/story`
- [ ] `FR5 Social and Community Features` is represented by `/guilds` and `/leaderboard`
- [ ] `FR6 Progress Tracking and Analytics` is represented by `/dashboard` and `/avatar`
- [ ] `FR7 Monetization Integration` is represented by `/premium`
- [ ] `FR8 Feedback and Support` is represented by `/support`

## 7. Mapping to CW1 Use Cases

- [ ] `UC1 Sync Wearable Data` is clearly shown on `/bio-sync`
- [ ] `UC2 Participate in Quests` is clearly shown on `/quests` and `/quests/[slug]`
- [ ] `UC3 Engage in Social Features` is clearly shown on `/guilds` and `/leaderboard`
- [ ] `UC4 View Progress and Analytics` is clearly shown on `/dashboard`

## 8. Mapping to CW1 Strategic Analysis

Use these as anchors for Task 2 of the report later.

### Verified progress and differentiation

- [ ] Show Bio-Sync as a unique selling point
- [ ] Show that verified progress reduces cheating compared to manual-entry apps
- [ ] Make this visible on the Home page and Bio-Sync page

### Holistic integrated wellbeing

- [ ] Show physical, nutritional, and psychological progress together
- [ ] Make this visible on the Home page, Dashboard, and Avatar page

### Narrative-driven retention

- [ ] Show quests connected to story progression
- [ ] Make this visible on Quests, Quest Detail, and Story pages

### Community accountability and network effects

- [ ] Show guilds, events, and leaderboards
- [ ] Make this visible on Guilds and Leaderboard pages

### Freemium revenue model

- [ ] Show free and premium offerings clearly
- [ ] Make this visible on the Premium page

### B2B growth opportunity

- [ ] If possible, include a corporate wellness angle
- [ ] Make this visible on Premium or Corporate Wellness page

## 9. Build Order Tracker

Use this as your implementation sequence.

### Phase 1: Foundation

- [ ] Replace the starter landing page
- [ ] Create shared navigation
- [ ] Create a reusable page shell or section style
- [ ] Decide the final route structure

### Phase 2: Highest-value pages

- [ ] Build Home
- [ ] Build Bio-Sync
- [ ] Build Dashboard
- [ ] Build Quest Hub
- [ ] Build Quest Detail
- [ ] Build Story

### Phase 3: Strong supporting pages

- [ ] Build Avatar
- [ ] Build Guilds
- [ ] Build Leaderboard
- [ ] Build Premium
- [ ] Build Support
- [ ] Build Onboarding

### Phase 4: Optional extension

- [ ] Build Corporate Wellness page if time allows

### Phase 5: Coursework polish

- [ ] Ensure all pages look complete
- [ ] Remove obvious empty placeholders
- [ ] Add prototype labels where needed
- [ ] Check navigation across all pages
- [ ] Check consistency of wording and branding
- [ ] Make sure the pages still reflect CW1 language and features

## 10. Prototype Limitations to Mention in the User Manual

These are useful limitations, not weaknesses, because CW2 allows simulation.

- [ ] Wearable sync is represented using sample data
- [ ] Bio-Sync verification logic is not fully coded
- [ ] Quest completion is shown through mock progress rather than real device tracking
- [ ] Story branching is visual and conceptual, not driven by live backend logic
- [ ] Guild activity, comments, and moderation are simulated
- [ ] Payments and subscription flows are interface-only
- [ ] AI tips and support chat are mocked
- [ ] Analytics predictions and exports are demo outputs

## 11. Screenshot Checklist for the Report

- [ ] Capture Home page
- [ ] Capture Onboarding page
- [ ] Capture Bio-Sync page
- [ ] Capture Dashboard page
- [ ] Capture Quest Hub page
- [ ] Capture Quest Detail page
- [ ] Capture Story page
- [ ] Capture Avatar page
- [ ] Capture Guilds page
- [ ] Capture Leaderboard page
- [ ] Capture Premium page
- [ ] Capture Support page

Optional:

- [ ] Capture Corporate Wellness page
- [ ] Capture one full-site navigation view
- [ ] Capture one mobile or narrow-width responsive view
- [ ] Capture one screenshot that clearly shows a simulated feature label

## 12. Final Submission Readiness Checklist

- [ ] The website includes at least 10 meaningful pages
- [ ] The pages are focused on advanced and distinctive business features
- [ ] The prototype clearly reflects the same VitalQuest idea from CW1
- [ ] The prototype covers FR1 to FR8
- [ ] The prototype covers the main CW1 use cases
- [ ] The prototype visibly reflects strategic ideas from CW1
- [ ] Every page is ready to be explained in the user manual
- [ ] Screenshots have been captured for each page
- [ ] Prototype limitations are clearly understood and can be described positively in the report

## 13. Priority Version If Time Becomes Tight

If you run short on time, complete these first:

- [ ] Home
- [ ] Bio-Sync
- [ ] Dashboard
- [ ] Quests
- [ ] Quest Detail
- [ ] Story
- [ ] Guilds
- [ ] Premium
- [ ] Avatar
- [ ] Support

Then add:

- [ ] Leaderboard
- [ ] Onboarding

## 14. Short Reminder

- [ ] Do not drift into building technical features that are not needed for marks
- [ ] Focus on demonstrating the business idea clearly
- [ ] Make every page support the story of VitalQuest as described in CW1
