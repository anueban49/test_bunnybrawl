# Bunny Brawl — Design Notes

## Concept
A competitive learning arena for high schoolers. Mascot: **Brawler Bunny** — a cute bunny in a scholar robe with a red headband. Name: **Bunny Brawl**.

## Two themes (tweakable)
- **Night** (default) — near-black indigo bg (#0a0a1a), electric cyan #5ef6ff + magenta #ff4fd8 + gold #ffd166 neon accents, glassmorphism cards, heavy particles
- **Day (pastel)** — soft cream bg (#fdf6ec), mint + lavender + peach pastels, softer glows, still-playful

Shared: pixel avatars, retro pixel accents, bold display type, constant subtle motion.

## Type system
- Display/UI: **Space Grotesk** (bold, geometric, modern)
- Accent/pixel: **VT323** or **Press Start 2P** sparingly for scores/HUD
- Handwritten (logbook only): **Caveat**
- Never Inter, never Roboto.

## Visual vocabulary
- Neon "glow" via multiple layered box-shadows
- Pixel avatar = 64x64 hand-drawn SVG with shading, rendered pixelated
- Progress bars: chunky with scanline overlay and glow
- Cards: glass (night) or paper (day) with subtle noise
- Particles: energy motes drifting, CSS `@keyframes`
- Corners: mix of sharp rectangles (retro) and soft 16–20px radius (modern)

## Pages
1. Landing — hero with bunny, "Compete. Learn. Win.", Start / Join CTAs, particle bg
2. Dashboard — avatar card, XP bar, stats, quick-play buttons, recent matches
3. Avatar Customization — live preview, tabs (hair/outfit/accessory/effect), swatches
4. Quiz Battle — center question, 4 answers, timer ring, opponent HUD left, you HUD right, live score bars
5. Solo Play — AI-source picker (paste link/notes), generating state, then quiz w/ "solo" chrome
6. Leaderboard — top 3 podium, list of ranks, current-user highlight
7. Result — Win/Lose banner, score comparison, XP gained, rewards, play again
8. Logbook — notebook metaphor, pages of study notes, "Quiz me on this" button
9. Loading — bunny running/waiting/rushing + affirmations

## Affirmations / copy tone (idioms about reward from struggle)
- "No pain, no gain."
- "Smooth seas never made a skilled sailor."
- "A diamond is just coal that stuck with it."
- "The harder the battle, the sweeter the victory."
- "Rome wasn't built in a day."
- "Where there's a will, there's an A."
- "Bite off a little more than you can chew — then chew it."

## Variations
- Landing: 3 versions (Hero-center / Split-diagonal / Arcade cabinet)
- Dashboard: 2 versions (Command-deck / Trophy-shelf)
- Other screens: one polished version each

## Deliverable
A single `index.html` design canvas with each screen as an artboard AND each screen clickable / navigable. Night/Day toggle in top bar.
