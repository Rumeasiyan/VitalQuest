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
