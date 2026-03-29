# 6BUIS018C - Information Driven Entrepreneurship and Enterprise

## CW 2 - Enterprise Portfolio Part 2

### BSc (Hons) in Computer Science

Module Leader: Mrs. Shonali Aponso

---

Full Name: Suseenthiran Arulraj Rumeasiyan
IIT Student No: 20221035
UoW Student No: W1954104

March 2026

---

# Table of Contents

Chapter 1: Introduction

Chapter 2: Task 1(b) - User Manual
2.1 Accessing the Application
2.1.1 Landing Page
2.1.2 Sign-Up
2.1.3 Sign-In
2.2 Dashboard and Daily Overview
2.2.1 Main Dashboard
2.2.2 Today View
2.3 Quests and Progression
2.3.1 Quest Board
2.3.2 Daily Quests
2.3.3 Weekly Quests
2.4 Bio-Sync and Verification
2.4.1 Bio-Sync Overview
2.4.2 Bio-Sync History
2.5 Story and Community Features
2.5.1 Story Progression
2.5.2 Community Hub
2.5.3 Guilds
2.5.4 Leaderboard
2.6 Analytics and Reports
2.6.1 Analytics Dashboard
2.6.2 Reports
2.7 Profile, Onboarding, Pricing, and Settings
2.7.1 Profile
2.7.2 Avatar
2.7.3 Goals
2.7.4 Onboarding
2.7.5 Pricing
2.7.6 Settings
2.8 Prototype Limitations and Future Implementation

Chapter 3: Task 2 - Reflection on Strategic Analysis and Systems Design
3.1 Verified Progress as a Competitive Advantage
3.2 Holistic Wellbeing Model in the Prototype
3.3 Narrative-Driven Retention Through Quests and Story
3.4 Community and Guild Engagement as a Strategic Feature
3.5 Translation of Systems Design into the Prototype
3.6 Changes Made from Coursework 1 and Their Rationale

Chapter 4: Task 3 - Cloud Computing Evaluation
4.1 Proposed Cloud Solution
4.2 Cloud Service Model and Deployment Model
4.3 Integration with VitalQuest Business Processes
4.4 Cost Implications
4.5 Security and Privacy Implications
4.6 Critical Evaluation Against Traditional Infrastructure

References

Appendices
Appendix A: Screenshot Catalogue
Appendix B: Prototype Limitations Summary
Appendix C: AI Use Declaration

# Chapter 1: Introduction

VitalQuest is a digital wellness platform designed to improve long-term engagement in health-related applications. Many existing services provide exercise, nutrition, or mindfulness tracking, but they often fail to retain users because the experience becomes repetitive and purely functional. VitalQuest addresses this problem through role-playing game mechanics, story progression, and social participation.

The platform is built around balanced wellbeing rather than fitness alone. Physical activity, recovery, sleep, and mindfulness are treated as connected parts of one progression system. A key feature is Bio-Sync, which links wearable-supported data such as steps and sleep to user progress. This allows activity to influence quests, avatar development, and rewards, positioning VitalQuest as a more engaging service than conventional habit-tracking applications.

# Chapter 2: Task 1(b) - User Manual

## 2.1 Accessing the Application

VitalQuest uses a three-stage access flow. New users begin on the public landing page, then move to sign-up to create an account. Returning users use sign-in to re-enter the system.

### 2.1.1 Landing Page

The landing page introduces the business, highlights the main features, and provides clear `Sign in` and `Sign up` controls. If the user is already authenticated, the system redirects directly to the dashboard.

![Figure 2.1](./image/01-landing.png)

### 2.1.2 Sign-Up

The sign-up page is used by first-time users to create an account. It combines a branded information panel with the registration form and includes links back to the landing page and to sign-in.

![Figure 2.2](./image/02-signup.png)

### 2.1.3 Sign-In

The sign-in page is intended for returning users. It uses the same branded layout as sign-up and provides a secure route into the protected application. It also includes links to return home or move to sign-up if required.

![Figure 2.3](./image/03-signin.png)

## 2.2 Dashboard and Daily Overview

The dashboard is the main control area of VitalQuest. It summarises progress, Bio-Sync status, active quests, and short-term trends, while also linking to the other main platform areas.

### 2.2.1 Main Dashboard

The main dashboard presents the overall command view of the account, including progression, quest status, guild context, and the latest verified sync information.

![Figure 2.4](./image/04-dashboard.png)

### 2.2.2 Today View

The Today View is a simplified daily planning page. It breaks the day into morning, afternoon, and evening blocks and gives the user a clearer summary of what should be completed.

![Figure 2.5](./image/05-dashbaord-today.png)

## 2.3 Quests and Progression

The quests section translates health-related actions into structured goals. Quests include narrative context, completion criteria, progress indicators, and reward values. The main quests page groups missions into daily, weekly, and seasonal categories and shows progress and verification details.

### 2.3.1 Quest Board

The quest board is the central overview page for all missions.

![Figure 2.6](./image/06-quests.png)

### 2.3.2 Daily Quests

The daily quests page focuses on repeatable tasks that support habit formation.

![Figure 2.7](./image/07-quests-daily.png)

### 2.3.3 Weekly Quests

The weekly quests page highlights longer progression arcs and larger rewards.

![Figure 2.8](./image/08-quests-weekly.png)

## 2.4 Bio-Sync and Verification

Bio-Sync is the verification layer of VitalQuest. It allows the user to view connected providers, check imported values, and run a sync action.

### 2.4.1 Bio-Sync Overview

The overview page is used to manage connections and review current imported health signals.

![Figure 2.9](./image/09-bio-sync.png)

### 2.4.2 Bio-Sync History

The history page presents an audit trail of provider activity, including connection status, last sync time, steps, and sleep values.

![Figure 2.10](./image/10-bio-sync-history.png)

## 2.5 Story and Community Features

The story and community areas provide motivation beyond raw tracking. Story chapters turn progress into unlockable narrative steps, while community pages support guild membership, short updates, and leaderboard comparison.

### 2.5.1 Story Progression

The story page shows chapter status, unlock conditions, and rewards linked to user progress.

![Figure 2.11](./image/11-story.png)

### 2.5.2 Community Hub

The community hub combines guild updates, posting, and a summary of current social activity.

![Figure 2.12](./image/12-community.png)

### 2.5.3 Guilds

The guilds page allows the user to review available groups and join a suitable community.

![Figure 2.13](./image/13-community-guilds.png)

### 2.5.4 Leaderboard

The leaderboard page ranks users by verified and balanced progress.

![Figure 2.14](./image/14-community-leaderboard.png)

## 2.6 Analytics and Reports

The analytics area converts tracked and synced data into readable summaries. It includes progress charts, recent records, milestone guidance, and export functions for coursework or accountability use.

### 2.6.1 Analytics Dashboard

The analytics dashboard presents progress signals such as XP, sleep, mood, and recent snapshots.

![Figure 2.15](./image/15-analytics.png)

### 2.6.2 Reports

The reports page provides downloadable summaries in formats such as CSV and PDF.

![Figure 2.16](./image/19-analytics-report.png)

## 2.7 Profile, Onboarding, Pricing, and Settings

These pages support account setup, personalisation, plan selection, and operational controls.

### 2.7.1 Profile

The profile page captures baseline user information, while the avatar and goals pages show character identity and editable targets.

![Figure 2.17](./image/20-profile.png)
![Figure 2.18](./image/21-profile-avatar.png)
![Figure 2.19](./image/22-profile-goals.png)

### 2.7.2 Onboarding

The onboarding pages guide the user through setup, profile completion, and Bio-Sync readiness.

![Figure 2.20](./image/23-onboarding.png)
![Figure 2.21](./image/24-onboarding-profile-setup.png)
![Figure 2.22](./image/25-onboarding-bio-sync-setup.png)

### 2.7.3 Pricing

The pricing page presents the freemium model and allows movement between Free and Pro plans.

![Figure 2.23](./image/26-pricing.png)

### 2.7.4 Settings

The settings pages cover general controls, privacy posture, and notification preferences.

![Figure 2.24](./image/27-settings.png)
![Figure 2.25](./image/28-settings-privacy.png)
![Figure 2.26](./image/29-settings-notifications.png)

## 2.8 Prototype Limitations and Future Implementation

The prototype demonstrates the main navigation structure and user flows, but several features would require deeper final implementation. These include full wearable API integration, stronger notification delivery, richer social moderation, full billing workflows, and more advanced reporting logic. These limitations are positive in the context of the prototype because they indicate how the business could be extended into a production-ready service.

# Chapter 3: Task 2 - Reflection on Strategic Analysis and Systems Design

## 3.1 Verified Progress as a Competitive Advantage

One of the strongest ideas in the earlier analysis was verified progress through Bio-Sync. This was identified as a competitive advantage because many gamified platforms rely on manual input and can be manipulated. In the prototype, this strategy is reflected in the Bio-Sync pages, the dashboard, and the quest system. The user can see provider status, sync history, imported values, and quest-related progress that is tied to trusted health signals. This directly implements the strategic idea that credibility should come from wearable-linked data rather than self-reporting.

## 3.2 Holistic Wellbeing Model in the Prototype

The SWOT and competitive advantage discussion emphasised holistic wellbeing instead of fitness-only tracking. This has been reflected in the prototype through the way the dashboard and avatar system combine strength, mana, resilience, sleep, streaks, and wellbeing score. The design shows that physical effort, recovery, and mindfulness belong to one progression model. This supports the original business idea that VitalQuest should differentiate itself by linking multiple dimensions of wellbeing into one system rather than treating them as separate tools.

## 3.3 Narrative-Driven Retention Through Quests and Story

The earlier strategic work argued that retention should come from narrative motivation, not only graphs or reminders. That decision is visible in the quest and story pages. Quests include narrative context, rewards, and progression logic, while the story page shows chapters, unlock conditions, and rewards tied to behaviour. This is a direct implementation of the design goal that user actions should unlock meaning and progression. Compared with a normal tracking website, this makes the prototype more distinctive and closer to the proposed RPG-style business model.

## 3.4 Community and Guild Engagement as a Strategic Feature

Porter’s Five Forces and the competitive analysis highlighted community as a retention mechanism and a source of network effects. That strategic decision appears clearly in the community hub, guild directory, and leaderboard pages. Users can join guilds, post updates, and compare performance in a social environment. In prototype form, these functions show how VitalQuest can build accountability and belonging without becoming a generic social feed. This reflects the planned differentiation from competitors by making community part of the wellbeing loop rather than a separate add-on.

## 3.5 Translation of Systems Design into the Prototype

The functional requirements and use cases were also reflected in the prototype. Bio-Sync integration appears through the connection and history pages. Quest management appears through the quest board and completion actions. Community participation appears through guild and leaderboard pages. Progress monitoring appears in the dashboard and analytics pages, including report export options. Profile and onboarding pages reflect the need for user setup, baseline goal capture, and guided entry into the system. Together, these pages show that the prototype is not just visually aligned with the business concept but also structurally aligned with the earlier systems design.

## 3.6 Changes Made from Coursework 1 and Their Rationale

Some changes were necessary when moving from concept to prototype. First, AI-driven personalisation, moderation workflows, and in-app support were not implemented in full, because the prototype needed to prioritise the clearest user-facing features within limited time. Second, the social features were implemented as focused guild, feed, and leaderboard pages rather than a larger open community ecosystem. This was more suitable for demonstrating the idea clearly. Third, the prototype placed strong emphasis on dashboard, Bio-Sync, quests, and reports because these pages best show the uniqueness of VitalQuest. These adjustments do not weaken the original concept. Instead, they make the prototype more coherent and allow the most important strategic and systems decisions to be demonstrated in a practical form.

# Chapter 4: Task 3 - Cloud Computing Evaluation

## 4.1 Proposed Cloud Solution

The proposed solution is an AWS-based deployment for the VitalQuest platform. The Next.js application would run on AWS App Runner, which is suitable for web applications that need managed deployment and scaling without full server administration. User and platform data would be stored in Amazon RDS for PostgreSQL. Exported PDF and CSV reports, image assets, and backup files could be stored in Amazon S3. Monitoring, logging, and alerting would be handled through Amazon CloudWatch.

## 4.2 Cloud Service Model and Deployment Model

This solution is mainly a Platform as a Service (PaaS) approach within a public cloud model. App Runner and RDS reduce the need to manually configure and maintain operating systems, patch servers, or manage database software at a low level. S3 is an Infrastructure as a Service style storage component, but from the business perspective the overall solution still behaves as a managed public-cloud platform. This is suitable for VitalQuest because the business requires speed, flexibility, and lower operational overhead during growth.

## 4.3 Integration with VitalQuest Business Processes

The AWS solution supports both technical implementation and business processes. The web application would deliver the dashboard, quests, Bio-Sync pages, analytics, and community areas. RDS would store user profiles, quests, wearable connection records, story progress, guild activity, and export history. S3 would support generated reports and other downloadable files. CloudWatch would allow the business to monitor failed syncs, unusual traffic spikes, or errors in report generation. This is especially relevant to VitalQuest because the service depends on trust, continuity, and reliable handling of user progress data.

## 4.4 Cost Implications

AWS offers a pay-as-you-go model, which is beneficial for a startup-style digital business. VitalQuest would not need to purchase physical servers, networking hardware, backup devices, or a dedicated data centre contract in advance. This reduces initial capital expenditure and allows costs to rise more gradually with real demand. However, cloud services can become expensive if usage is not monitored carefully. For VitalQuest, cost pressure could come from database growth, high traffic periods, report storage, and background processing for sync-heavy activity. Therefore, cost control policies, storage lifecycle rules, and monitoring would be necessary.

## 4.5 Security and Privacy Implications

Security is a major issue for VitalQuest because the business manages account data and health-related signals such as activity, sleep, and recovery metrics. AWS provides strong security capabilities, including encryption at rest, encrypted network traffic, access control through IAM policies, backup management, and monitoring through CloudWatch. These features would help VitalQuest protect sensitive records and maintain user trust. Even so, cloud adoption does not remove responsibility from the business. VitalQuest would still need careful access design, secure API connections, proper handling of exported reports, and privacy-aware data sharing rules for leaderboards and guild features.

## 4.6 Critical Evaluation Against Traditional Infrastructure

Compared with traditional on-premises infrastructure, the AWS solution offers clear advantages. It is faster to deploy, easier to scale, and more appropriate for a business with uncertain growth. VitalQuest would avoid the cost and complexity of purchasing servers, maintaining hardware, managing physical security, and planning for peak capacity long before it is needed. Public cloud also supports resilience through managed backups and service availability features.

However, the cloud approach also has disadvantages. The business becomes dependent on an external provider and must manage ongoing operational cost rather than one-time hardware purchases. There is also less direct physical control over infrastructure. Despite these disadvantages, AWS is more suitable for VitalQuest than a traditional infrastructure model because the platform is digital-first, growth-oriented, data-driven, and likely to experience changing levels of demand over time. For this reason, a public-cloud PaaS-oriented deployment is the most practical and strategically relevant option for the business.
