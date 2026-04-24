// screens/dashboard.jsx — Dashboard variations

function DashboardCommand({ onNav, user }) {
  return (
    <div className="screen">
      <SceneBG particleCount={24} streaks={false} />
      <TopNav onNav={onNav} active="dashboard" />

      <div style={{ padding: '28px 40px 40px', display:'grid',
                    gridTemplateColumns: '340px 1fr 280px', gap: 22, height:'calc(100% - 64px)', overflow:'auto' }} className="scroll">
        {/* LEFT — Player card */}
        <div className="glass" style={{ padding: 22, display:'flex', flexDirection:'column', gap: 18 }}>
          <Eyebrow>◆ OPERATOR</Eyebrow>
          <div style={{ display:'grid', placeItems:'center', padding:'10px 0 4px' }}>
            <div className="pix-frame" style={{ padding: 4 }}>
              <div className="pix-inner" style={{ padding: 6 }}>
                <PixelAvatar size={160} {...user.avatar} />
              </div>
            </div>
          </div>
          <div style={{ textAlign:'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing:'-.02em' }}>{user.name}</div>
            <div style={{ fontFamily:'var(--font-pixel-mini)', fontSize: 9, color:'var(--text-mute)', letterSpacing:'.2em', marginTop: 4 }}>
              {user.handle} · {user.title}
            </div>
          </div>

          <div className="row gap-8" style={{ justifyContent:'center' }}>
            <NeonChip color="gold">LV. {user.level}</NeonChip>
            <NeonChip color="magenta"><Icon name="flame" size={10}/> {user.streak}d STREAK</NeonChip>
          </div>

          <div>
            <div className="row" style={{ justifyContent:'space-between', marginBottom: 6,
                 fontFamily:'var(--font-pixel-mini)', fontSize: 9, letterSpacing:'.15em', color:'var(--text-dim)' }}>
              <span>XP · {user.xp} / {user.xpMax}</span>
              <span style={{ color:'var(--neon-cyan)' }}>{user.xpMax - user.xp} to LV.{user.level+1}</span>
            </div>
            <XPBar pct={user.xp/user.xpMax} height={16} />
          </div>

          <button className="btn btn-ghost" onClick={() => onNav('avatar')} style={{ justifyContent:'center' }}>
            <Icon name="wand" size={16}/> Customize Avatar
          </button>
        </div>

        {/* MIDDLE — Quick play + recent + subjects */}
        <div className="col gap-20" style={{ minWidth: 0 }}>
          <div className="row gap-16" style={{ alignItems:'flex-end' }}>
            <div>
              <Eyebrow style={{ marginBottom: 8 }}>◆ WELCOME BACK</Eyebrow>
              <h1 className="display" style={{ fontSize: 44 }}>Ready to brawl, {user.name.split(' ')[0]}?</h1>
              <div style={{ color:'var(--text-dim)', marginTop: 6, fontSize: 15 }}>
                <span style={{ fontFamily:'var(--font-hand)', fontSize: 20, color:'var(--neon-gold)' }}>"No pain, no gain."</span> Your brain is warmed up.
              </div>
            </div>
          </div>

          {/* Quick-play tiles */}
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr 1fr', gap: 14 }}>
            <QuickPlayTile
              title="Quick Match" subtitle="Jump into a live 1v1" eta="~2 min"
              icon="sword" color="cyan"
              onClick={() => onNav('quiz')}
              primary
            />
            <QuickPlayTile
              title="Solo Play" subtitle="AI-generated from your notes" eta="+5–15 XP"
              icon="spark" color="magenta"
              onClick={() => onNav('solo')}
            />
            <QuickPlayTile
              title="Logbook" subtitle="Open your study notebook" eta="12 entries"
              icon="book" color="gold"
              onClick={() => onNav('logbook')}
            />
          </div>

          {/* Stats */}
          <div>
            <div className="row" style={{ justifyContent:'space-between', marginBottom: 10 }}>
              <Eyebrow>◆ THIS SEASON</Eyebrow>
              <span style={{ fontFamily:'var(--font-pixel-mini)', fontSize: 8, color:'var(--text-mute)', letterSpacing:'.2em' }}>UPDATED JUST NOW</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 12 }}>
              <StatBlock label="Wins" value="47" accent="cyan" sub="↑ 6 this week" />
              <StatBlock label="Accuracy" value="82%" accent="lime" sub="on 312 questions" />
              <StatBlock label="Rank" value="#214" accent="gold" sub="Top 3% · Diamond" />
              <StatBlock label="Win rate" value="68%" accent="magenta" sub="vs 54% avg" />
            </div>
          </div>

          {/* Recent matches */}
          <div className="glass" style={{ padding: 18 }}>
            <div className="row" style={{ justifyContent:'space-between', marginBottom: 14 }}>
              <Eyebrow>◆ RECENT BATTLES</Eyebrow>
              <button style={{ background:'none', border:'none', color:'var(--neon-cyan)',
                               fontFamily:'var(--font-display)', fontSize: 12, cursor:'pointer' }}>
                View all →
              </button>
            </div>
            <div className="col gap-8">
              <MatchRow result="W" opp="pixel_wraith" subject="Algebra II" score="8–5" xp="+34" />
              <MatchRow result="W" opp="quizzard_99" subject="AP Biology" score="7–6" xp="+28" />
              <MatchRow result="L" opp="neon_nova" subject="World History" score="4–8" xp="+6" />
              <MatchRow result="W" opp="zenith_owl" subject="Chemistry" score="9–3" xp="+42" />
            </div>
          </div>
        </div>

        {/* RIGHT — Daily + challenges */}
        <div className="col gap-16">
          <div className="glass" style={{ padding: 16 }}>
            <Eyebrow style={{ marginBottom: 10 }}>◆ DAILY QUEST</Eyebrow>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Win 3 Algebra matches</div>
            <div style={{ fontSize: 12, color:'var(--text-dim)', marginBottom: 10 }}>Reward · 120 XP + Rare Badge</div>
            <XPBar pct={0.66} height={10} />
            <div className="row" style={{ justifyContent:'space-between', marginTop: 6,
                 fontFamily:'var(--font-pixel-mini)', fontSize: 9, letterSpacing:'.15em' }}>
              <span style={{ color:'var(--text-dim)' }}>2 / 3</span>
              <span style={{ color:'var(--neon-gold)' }}>18:42:10</span>
            </div>
          </div>

          <div className="glass" style={{ padding: 16 }}>
            <Eyebrow style={{ marginBottom: 10 }}>◆ WEAKEST SUBJECT</Eyebrow>
            <div className="row gap-10">
              <div style={{ width: 46, height: 46, borderRadius: 10,
                            background:'linear-gradient(135deg, rgba(255,79,216,.2), rgba(255,79,216,.05))',
                            border:'1px solid rgba(255,79,216,.4)',
                            display:'grid', placeItems:'center', color:'var(--neon-magenta)' }}>
                <Icon name="flame" size={22}/>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>World History</div>
                <div style={{ fontSize: 11, color:'var(--text-dim)' }}>54% accuracy · drill up</div>
              </div>
            </div>
            <button className="btn btn-magenta" onClick={() => onNav('solo')}
                    style={{ marginTop: 12, width:'100%', justifyContent:'center', fontSize: 13, padding:'10px 14px' }}>
              <Icon name="target" size={14}/> Train this now
            </button>
          </div>

          <div className="glass" style={{ padding: 16 }}>
            <Eyebrow style={{ marginBottom: 10 }}>◆ FRIENDS ONLINE</Eyebrow>
            <div className="col gap-8">
              <FriendRow name="pixel_wraith" status="In match · AP Bio" avatar={{hair:'bob', hairColor:'#ff4fd8', outfit:'tee', outfitColor:'#5ef6ff'}} />
              <FriendRow name="zenith_owl" status="Idle" avatar={{hair:'long', hairColor:'#9f7bff', outfit:'robe', outfitColor:'#ffd166', accessory:'glasses'}} />
              <FriendRow name="neon_nova" status="Solo play" avatar={{hair:'mohawk', hairColor:'#5ef6ff', outfit:'jacket', outfitColor:'#ff4fd8'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickPlayTile({ title, subtitle, eta, icon, color, onClick, primary }) {
  const colorMap = {
    cyan: { border:'rgba(94,246,255,.4)', glow:'0 0 24px rgba(94,246,255,.25)', text:'var(--neon-cyan)' },
    magenta: { border:'rgba(255,79,216,.4)', glow:'0 0 24px rgba(255,79,216,.25)', text:'var(--neon-magenta)' },
    gold: { border:'rgba(255,209,102,.4)', glow:'0 0 24px rgba(255,209,102,.25)', text:'var(--neon-gold)' },
  };
  const c = colorMap[color];
  return (
    <button className="glass" onClick={onClick} style={{
      padding: 18, textAlign:'left', cursor:'pointer',
      borderColor: c.border,
      boxShadow: primary ? c.glow : 'none',
      color:'inherit', fontFamily:'inherit',
      position: 'relative', overflow: 'hidden',
      transition: 'transform .15s, box-shadow .2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = c.glow; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = primary ? c.glow : ''; }}>
      <div className="row" style={{ justifyContent:'space-between', alignItems:'flex-start' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10,
                      background:'rgba(255,255,255,.05)', border:`1px solid ${c.border}`,
                      display:'grid', placeItems:'center', color: c.text }}>
          <Icon name={icon} size={20} />
        </div>
        <Icon name="arrow" size={16} color="var(--text-mute)"/>
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, marginTop: 16, letterSpacing:'-.01em' }}>{title}</div>
      <div style={{ fontSize: 12, color:'var(--text-dim)', marginTop: 4 }}>{subtitle}</div>
      <div style={{ fontFamily:'var(--font-pixel-mini)', fontSize: 8, letterSpacing:'.2em',
                    color: c.text, marginTop: 14 }}>{eta}</div>
    </button>
  );
}

function MatchRow({ result, opp, subject, score, xp }) {
  const win = result === 'W';
  return (
    <div className="row gap-12" style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ width: 30, height: 30, borderRadius: 6,
                    background: win ? 'rgba(90,255,155,.12)' : 'rgba(255,85,119,.12)',
                    border: `1px solid ${win ? 'var(--win)' : 'var(--danger)'}`,
                    display:'grid', placeItems:'center', color: win ? 'var(--win)' : 'var(--danger)',
                    fontFamily:'var(--font-pixel-mini)', fontSize: 10, fontWeight: 700 }}>
        {result}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="row gap-8">
          <div style={{ fontWeight: 600, fontSize: 14 }}>{opp}</div>
          <NeonChip color="muted" style={{ padding:'3px 7px', fontSize: 8 }}>{subject}</NeonChip>
        </div>
      </div>
      <div style={{ fontFamily:'var(--font-pixel)', fontSize: 16, color:'var(--text)', minWidth: 48, textAlign:'right' }}>{score}</div>
      <div style={{ fontFamily:'var(--font-pixel-mini)', fontSize: 9, color: win ? 'var(--win)' : 'var(--neon-gold)', minWidth: 40, textAlign:'right' }}>{xp}</div>
    </div>
  );
}

function FriendRow({ name, status, avatar }) {
  return (
    <div className="row gap-10">
      <div style={{ position:'relative' }}>
        <div style={{ borderRadius: 8, overflow:'hidden', background:'var(--bg-2)',
                      border:'1px solid var(--border)', padding: 3 }}>
          <PixelAvatar size={36} {...avatar} />
        </div>
        <div style={{ position:'absolute', bottom:-2, right:-2, width:10, height:10,
                      borderRadius:'50%', background:'var(--win)',
                      border:'2px solid var(--bg-1)',
                      boxShadow:'0 0 6px var(--win)' }} />
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 11, color:'var(--text-dim)' }}>{status}</div>
      </div>
      <button style={{ background:'none', border:'1px solid var(--border)', color:'var(--text-dim)',
                       borderRadius: 6, padding: '4px 8px', fontSize: 10, cursor:'pointer',
                       fontFamily:'var(--font-pixel-mini)', letterSpacing:'.15em' }}>CHALLENGE</button>
    </div>
  );
}

// ────────── Variation B: Trophy shelf ──────────
function DashboardShelf({ onNav, user }) {
  return (
    <div className="screen">
      <SceneBG particleCount={20} />
      <TopNav onNav={onNav} active="dashboard" />

      <div style={{ padding: '32px 40px', height:'calc(100% - 64px)', overflow:'auto' }} className="scroll">
        {/* Banner */}
        <div className="glass" style={{
          padding: '28px 32px', marginBottom: 22,
          background: 'linear-gradient(120deg, rgba(94,246,255,.08), rgba(255,79,216,.08))',
          borderColor: 'rgba(94,246,255,.3)',
          display:'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems:'center',
        }}>
          <div>
            <Eyebrow>◆ HELLO, BRAWLER</Eyebrow>
            <h1 className="display" style={{ fontSize: 42, marginTop: 6 }}>
              You're <span style={{ color:'var(--neon-cyan)' }}>3 wins</span> from Diamond tier.
            </h1>
            <div style={{ color:'var(--text-dim)', marginTop: 8, fontSize: 14 }}>
              <span style={{ fontFamily:'var(--font-hand)', fontSize: 20, color:'var(--neon-gold)' }}>"The harder the battle, the sweeter the victory."</span>
            </div>
            <div className="row gap-10" style={{ marginTop: 16 }}>
              <button className="btn btn-primary" onClick={() => onNav('quiz')}><Icon name="sword"/> Start Match</button>
              <button className="btn btn-ghost" onClick={() => onNav('solo')}><Icon name="spark"/> Solo Practice</button>
            </div>
          </div>
          <div style={{ position:'relative' }}>
            <BrawlerBunny size={160} expression="cheer" />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap: 14, marginBottom: 22 }}>
          <StatBlock label="Level" value={user.level} accent="gold" sub={`XP ${user.xp}/${user.xpMax}`}/>
          <StatBlock label="Wins" value="47" accent="cyan" sub="this season"/>
          <StatBlock label="Accuracy" value="82%" accent="lime" sub="312 answered"/>
          <StatBlock label="Rank" value="#214" accent="magenta" sub="Diamond III"/>
          <StatBlock label="Streak" value="7d" accent="violet" sub="Personal best"/>
        </div>

        {/* Trophy shelf */}
        <div className="glass" style={{ padding: 24, marginBottom: 22 }}>
          <div className="row" style={{ justifyContent:'space-between', marginBottom: 16 }}>
            <Eyebrow>◆ TROPHY SHELF · 14 / 48</Eyebrow>
            <span style={{ fontSize: 11, color:'var(--text-mute)' }}>Hover to inspect</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(8, 1fr)', gap: 12 }}>
            {[
              { name:'First Win', icon:'sword', color:'cyan', got:true },
              { name:'5-Streak', icon:'flame', color:'magenta', got:true },
              { name:'Algebra Ace', icon:'target', color:'gold', got:true },
              { name:'Speed Demon', icon:'bolt', color:'lime', got:true },
              { name:'Centurion', icon:'shield', color:'violet', got:true },
              { name:'Sharpshooter', icon:'target', color:'cyan', got:true },
              { name:'Comeback', icon:'up', color:'gold', got:true },
              { name:'Night Owl', icon:'moon', color:'violet', got:true },
              { name:'Perfect Round', icon:'spark', color:'magenta', got:false },
              { name:'Diamond', icon:'crown', color:'cyan', got:false },
              { name:'Marathon', icon:'clock', color:'gold', got:false },
              { name:'Bookworm', icon:'book', color:'lime', got:false },
              { name:'Duelist', icon:'sword', color:'violet', got:false },
              { name:'MVP', icon:'medal', color:'magenta', got:false },
              { name:'Legend', icon:'trophy', color:'gold', got:false },
              { name:'???', icon:'plus', color:'muted', got:false },
            ].map((t, i) => <Trophy key={i} {...t} />)}
          </div>
        </div>

        {/* Recent + goals */}
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 22 }}>
          <div className="glass" style={{ padding: 20 }}>
            <Eyebrow style={{ marginBottom: 12 }}>◆ RECENT BATTLES</Eyebrow>
            <div className="col gap-8">
              <MatchRow result="W" opp="pixel_wraith" subject="Algebra II" score="8–5" xp="+34" />
              <MatchRow result="W" opp="quizzard_99" subject="AP Biology" score="7–6" xp="+28" />
              <MatchRow result="L" opp="neon_nova" subject="World History" score="4–8" xp="+6" />
              <MatchRow result="W" opp="zenith_owl" subject="Chemistry" score="9–3" xp="+42" />
            </div>
          </div>
          <div className="glass" style={{ padding: 20 }}>
            <Eyebrow style={{ marginBottom: 12 }}>◆ SEASON GOALS</Eyebrow>
            <Goal title="Reach Diamond tier" sub="3 wins to go" pct={0.82}/>
            <Goal title="Master 5 subjects" sub="2 / 5" pct={0.4}/>
            <Goal title="30-day streak" sub="Day 7" pct={0.23}/>
            <Goal title="Top 100 global" sub="Currently #214" pct={0.57}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trophy({ name, icon, color, got }) {
  const map = {
    cyan:'var(--neon-cyan)', magenta:'var(--neon-magenta)', gold:'var(--neon-gold)',
    lime:'var(--neon-lime)', violet:'var(--neon-violet)', muted:'var(--text-mute)',
  };
  const c = map[color];
  return (
    <div style={{ textAlign:'center' }}>
      <div style={{
        width:'100%', aspectRatio:'1', borderRadius: 12,
        background: got ? `linear-gradient(135deg, ${c}33, ${c}0c)` : 'rgba(255,255,255,.02)',
        border: `1px solid ${got ? c + '66' : 'var(--border)'}`,
        display:'grid', placeItems:'center', color: got ? c : 'var(--text-mute)',
        boxShadow: got ? `0 0 18px ${c}33` : 'none',
        filter: got ? 'none' : 'grayscale(.5)',
      }}>
        <Icon name={icon} size={22} />
      </div>
      <div style={{ fontFamily:'var(--font-pixel-mini)', fontSize: 7, letterSpacing:'.1em',
                    marginTop: 6, color: got ? 'var(--text-dim)' : 'var(--text-mute)' }}>
        {name}
      </div>
    </div>
  );
}

function Goal({ title, sub, pct }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div className="row" style={{ justifyContent:'space-between', marginBottom: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 11, color:'var(--text-dim)' }}>{sub}</div>
      </div>
      <XPBar pct={pct} height={8}/>
    </div>
  );
}

Object.assign(window, { DashboardCommand, DashboardShelf });
