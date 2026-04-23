// mockData.ts — Mock data for development

export const mockUser = {
  name: "Alex Chen",
  handle: "alex_brawler",
  title: "Quiz Master",
  level: 12,
  xp: 2450,
  xpMax: 3000,
  streak: 7,
  avatar: {
    hair: 'spike',
    hairColor: '#5ef6ff',
    skin: '#f2c7a5',
    outfit: 'hoodie',
    outfitColor: '#ff4fd8',
    accessory: 'glasses',
    effect: 'sparkle',
  },
};

export const mockStats = {
  wins: 47,
  accuracy: 82,
  rank: 214,
  winRate: 68,
};

export const mockRecentMatches = [
  { result: "W", opp: "pixel_wraith", subject: "Algebra II", score: "8–5", xp: "+34" },
  { result: "W", opp: "quizzard_99", subject: "AP Biology", score: "7–6", xp: "+28" },
  { result: "L", opp: "neon_nova", subject: "World History", score: "4–8", xp: "+6" },
  { result: "W", opp: "zenith_owl", subject: "Chemistry", score: "9–3", xp: "+42" },
];

export const mockFriendsOnline = [
  { name: "pixel_wraith", status: "In match · AP Bio", avatar: { hair: 'bob', hairColor: '#ff4fd8', outfit: 'tee', outfitColor: '#5ef6ff' } },
  { name: "zenith_owl", status: "Idle", avatar: { hair: 'long', hairColor: '#9f7bff', outfit: 'robe', outfitColor: '#ffd166', accessory: 'glasses' } },
  { name: "neon_nova", status: "Solo play", avatar: { hair: 'mohawk', hairColor: '#5ef6ff', outfit: 'jacket', outfitColor: '#ff4fd8' } },
];

export const mockTrophies = [
  { name: 'First Win', icon: 'sword', color: 'cyan', got: true },
  { name: '5-Streak', icon: 'flame', color: 'magenta', got: true },
  { name: 'Algebra Ace', icon: 'target', color: 'gold', got: true },
  { name: 'Speed Demon', icon: 'bolt', color: 'lime', got: true },
  { name: 'Centurion', icon: 'shield', color: 'violet', got: true },
  { name: 'Sharpshooter', icon: 'target', color: 'cyan', got: true },
  { name: 'Comeback', icon: 'up', color: 'gold', got: true },
  { name: 'Night Owl', icon: 'moon', color: 'violet', got: true },
  { name: 'Perfect Round', icon: 'spark', color: 'magenta', got: false },
  { name: 'Diamond', icon: 'crown', color: 'cyan', got: false },
  { name: 'Marathon', icon: 'clock', color: 'gold', got: false },
  { name: 'Bookworm', icon: 'book', color: 'lime', got: false },
  { name: 'Duelist', icon: 'sword', color: 'violet', got: false },
  { name: 'MVP', icon: 'medal', color: 'magenta', got: false },
  { name: 'Legend', icon: 'trophy', color: 'gold', got: false },
  { name: '???', icon: 'plus', color: 'muted', got: false },
];

export const mockGoals = [
  { title: "Reach Diamond tier", sub: "3 wins to go", pct: 0.82 },
  { title: "Master 5 subjects", sub: "2 / 5", pct: 0.4 },
  { title: "30-day streak", sub: "Day 7", pct: 0.23 },
  { title: "Top 100 global", sub: "Currently #214", pct: 0.57 },
];

export const loadingTips = [
  { idiom: 'No pain, no gain.', sub: 'Every hard question sharpens you a little more.' },
  { idiom: 'Smooth seas never made a skilled sailor.', sub: 'Struggle is the tuition you pay for mastery.' },
  { idiom: 'A diamond is just coal that stuck with it.', sub: 'Consistency beats intensity.' },
  { idiom: 'Rome wasn\'t built in a day.', sub: 'One question at a time. Keep going.' },
  { idiom: 'The harder the battle, the sweeter the victory.', sub: 'This one\'s going to feel good.' },
  { idiom: 'Bite off a little more than you can chew.', sub: 'Then chew it. Growth lives just past comfort.' },
  { idiom: 'Where there\'s a will, there\'s an A.', sub: 'You\'ve got this. Stay hungry.' },
];