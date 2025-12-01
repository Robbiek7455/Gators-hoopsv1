(() => {
  const { useState, useEffect } = React;
  const {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
  } = ReactRouterDOM;

  /**
   * Simple data model for the roster. Each object contains the core
   * information about a player on the 2025–26 Florida Gators men’s
   * basketball team. Numbers, positions and biographical details are
   * derived from official sources【880828013666770†L37-L41】. Feel free
   * to expand this array with additional fields such as stats or
   * headshot URLs.
   */
  const roster = [
    {
      number: 23,
      name: "AJ Brown",
      position: "G",
      height: "6'4\"",
      weight: "210 lbs",
      class: "JR",
      hometown: "Orlando, FL",
    },
    {
      number: 20,
      name: "Isaiah Brown",
      position: "G",
      height: "6'4\"",
      weight: "210 lbs",
      class: "SO",
      hometown: "Orlando, FL",
    },
    {
      number: 9,
      name: "Rueben Chinyelu",
      position: "C",
      height: "6'10\"",
      weight: "265 lbs",
      class: "JR",
      hometown: "Enugu, Nigeria",
    },
    {
      number: 21,
      name: "Alex Condon",
      position: "F",
      height: "6'11\"",
      weight: "230 lbs",
      class: "JR",
      hometown: "Perth, Australia",
    },
    {
      number: 0,
      name: "Boogie Fland",
      position: "G",
      height: "6'3\"",
      weight: "185 lbs",
      class: "SO",
      hometown: "Bronx, NY",
    },
    {
      number: 3,
      name: "Micah Handlogten",
      position: "C",
      height: "7'1\"",
      weight: "260 lbs",
      class: "SR",
      hometown: "Lake Norman, NC",
    },
    {
      number: 10,
      name: "Thomas Haugh",
      position: "F",
      height: "6'9\"",
      weight: "215 lbs",
      class: "JR",
      hometown: "New Oxford, PA",
    },
    {
      number: 11,
      name: "CJ Ingram",
      position: "G",
      height: "6'6\"",
      weight: "205 lbs",
      class: "FR",
      hometown: "Hawthorne, FL",
    },
    {
      number: 33,
      name: "Cooper Josefsberg",
      position: "G",
      height: "6'4\"",
      weight: "195 lbs",
      class: "JR",
      hometown: "Miami, FL",
    },
    {
      number: 7,
      name: "Urban Klavzar",
      position: "G",
      height: "6'1\"",
      weight: "195 lbs",
      class: "JR",
      hometown: "Domzale, Slovenia",
    },
    {
      number: 8,
      name: "Alex Kovatchev",
      position: "G",
      height: "6'5\"",
      weight: "190 lbs",
      class: "SO",
      hometown: "Perth, Australia",
    },
    {
      number: 1,
      name: "Xaivian Lee",
      position: "G",
      height: "6'4\"",
      weight: "180 lbs",
      class: "SR",
      hometown: "Toronto, Canada",
    },
    {
      number: 4,
      name: "Alex Lloyd",
      position: "G",
      height: "6'3\"",
      weight: "180 lbs",
      class: "FR",
      hometown: "Miami, FL",
    },
    {
      number: 12,
      name: "Viktor Mikic",
      position: "C",
      height: "6'11\"",
      weight: "260 lbs",
      class: "SO",
      hometown: "Belgrade, Serbia",
    },
    {
      number: 32,
      name: "Olivier Rioux",
      position: "C",
      height: "7'9\"",
      weight: "305 lbs",
      class: "FR",
      hometown: "Terrebonne, Canada",
    },
  ];

  /**
   * Season schedule. Each entry contains a date (YYYY-MM-DD), opponent,
   * location (Home/Away/Neutral), site description, result (W/L or null
   * if upcoming) and score. The first seven results reflect games
   * completed as of November 30 2025, gleaned from the official
   * Florida Gators athletics site【52426056897191†L443-L522】. Future
   * contests are marked as upcoming. When new results are known you
   * can update this array to keep the site current.
   */
  const schedule = [
    {
      date: "2025-11-03",
      opponent: "Arizona",
      location: "Neutral",
      site: "Las Vegas, NV (Hall of Fame Series)",
      result: "L",
      score: "87–93",
    },
    {
      date: "2025-11-06",
      opponent: "North Florida",
      location: "Home",
      site: "Gainesville, FL",
      result: "W",
      score: "104–64",
    },
    {
      date: "2025-11-11",
      opponent: "Florida State",
      location: "Home",
      site: "Gainesville, FL",
      result: "W",
      score: "78–76",
    },
    {
      date: "2025-11-16",
      opponent: "Miami",
      location: "Neutral",
      site: "Jacksonville, FL (Jax Hoops Showdown)",
      result: "W",
      score: "82–68",
    },
    {
      date: "2025-11-21",
      opponent: "Merrimack",
      location: "Home",
      site: "Gainesville, FL",
      result: "W",
      score: "80–45",
    },
    {
      date: "2025-11-27",
      opponent: "TCU",
      location: "Neutral",
      site: "San Diego, CA (Rady Children’s Invitational)",
      result: "L",
      score: "80–84",
    },
    {
      date: "2025-11-28",
      opponent: "Providence",
      location: "Neutral",
      site: "San Diego, CA (Rady Children’s Invitational)",
      result: "W",
      score: "90–78",
    },
    {
      date: "2025-12-02",
      opponent: "Duke",
      location: "Away",
      site: "Durham, NC (SEC–ACC Challenge)",
      result: null,
      score: null,
    },
    {
      date: "2025-12-09",
      opponent: "UConn",
      location: "Neutral",
      site: "New York, NY (Jimmy V Classic)",
      result: null,
      score: null,
    },
  ];

  /**
   * Return a formatted date string, e.g. "Nov 3, 2025". This helper
   * uses Intl.DateTimeFormat to honour the user's locale. Dates in
   * the schedule array should be provided in ISO format (YYYY-MM-DD).
   */
  function formatDate(isoDate) {
    const dt = new Date(isoDate + 'T00:00:00');
    return dt.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  /** Determine the next upcoming game (first schedule entry with a
   * null result). If all games have results, returns null.
   */
  function getNextGame() {
    return schedule.find((game) => !game.result) || null;
  }

  // Team record; update this when more games are played. Derived from
  // ESPN’s standings information: the Gators were 5–2 overall and
  // unbeaten in the SEC as of Nov 30 2025【880828013666770†L35-L41】.
  const teamRecord = {
    overall: { wins: 5, losses: 2 },
    conference: { wins: 0, losses: 0 },
  };

  // Simple NavBar component. Utilises React Router's Link to avoid page
  // reloads. On small screens, it could be enhanced with a hamburger
  // menu.
  function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <nav className="navbar">
        <div className="logo">Gators Fan Hub</div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/schedule" onClick={() => setMenuOpen(false)}>Schedule & Results</Link></li>
          <li><Link to="/roster" onClick={() => setMenuOpen(false)}>Roster</Link></li>
          <li><Link to="/stats" onClick={() => setMenuOpen(false)}>Stats</Link></li>
          <li><Link to="/history" onClick={() => setMenuOpen(false)}>History</Link></li>
          <li><Link to="/media" onClick={() => setMenuOpen(false)}>Media</Link></li>
          <li><Link to="/fanzone" onClick={() => setMenuOpen(false)}>Fan Zone</Link></li>
          <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
        </ul>
      </nav>
    );
  }

  // Home page component. Displays a hero panel with the current
  // season label, record and details for the next game. Below the
  // hero, links to key pages are provided.
  function Home() {
    const nextGame = getNextGame();
    return (
      <div className="page home">
        <section className="hero">
          <h1>2025–26 Florida Gators Men’s Basketball</h1>
          <p className="record">
            Overall: {teamRecord.overall.wins}–{teamRecord.overall.losses} | SEC: {teamRecord.conference.wins}–{teamRecord.conference.losses}
          </p>
          {nextGame ? (
            <div className="next-game">
              <h2>Next Game</h2>
              <p className="opponent">{nextGame.location === 'Home' ? 'vs' : nextGame.location === 'Away' ? 'at' : ''} {nextGame.opponent}</p>
              <p>{formatDate(nextGame.date)} · {nextGame.site.split(' (')[0]}</p>
              <p className="time">{nextGame.site.includes('Challenge') || nextGame.site.includes('Classic') ? '' : ''}{/* time intentionally omitted in this simple display */}</p>
              <div className="hero-buttons">
                <Link className="btn" to="/schedule">View Schedule</Link>
                <a className="btn" href="#" onClick={(e) => e.preventDefault()}>Listen</a>
              </div>
            </div>
          ) : (
            <p>No upcoming games scheduled.</p>
          )}
        </section>
        <section className="quick-links">
          <h2>Quick Links</h2>
          <div className="link-grid">
            <Link to="/schedule" className="link-card">Full Schedule</Link>
            <Link to="/roster" className="link-card">Roster</Link>
            <Link to="/stats" className="link-card">Stats</Link>
            <Link to="/fanzone" className="link-card">Fan Zone</Link>
          </div>
        </section>
      </div>
    );
  }

  // Schedule page component. Renders a table of all games in the
  // schedule. Completed games show their result and score; future
  // games indicate that they are upcoming.
  function SchedulePage() {
    return (
      <div className="page schedule">
        <h1>Schedule & Results</h1>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Location</th>
              <th>Site</th>
              <th>Result</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((game) => (
              <tr key={game.date + game.opponent} className={game.result ? (game.result === 'W' ? 'win' : 'loss') : 'upcoming'}>
                <td>{formatDate(game.date)}</td>
                <td>{game.opponent}</td>
                <td>{game.location}</td>
                <td>{game.site}</td>
                <td>{game.result || '—'}</td>
                <td>{game.score || 'TBD'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Roster page component. Displays players in a responsive grid.
  function RosterPage() {
    return (
      <div className="page roster">
        <h1>Roster</h1>
        <div className="roster-grid">
          {roster.map((player) => (
            <div key={player.number} className="player-card">
              <div className="player-number">#{player.number}</div>
              <div className="player-info">
                <h3>{player.name}</h3>
                <p>{player.position} • {player.height} • {player.weight}</p>
                <p>{player.class}</p>
                <p>{player.hometown}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Stats page component. Provides high‑level team metrics and top
  // performers. Data is pulled from ESPN stats as of Nov 30 2025【91079070363421†L59-L99】.
  function StatsPage() {
    // Team averages per game (points, rebounds, assists, steals, blocks, turnovers, FG%, FT%, 3P%).
    const teamAverages = {
      points: 85.9,
      rebounds: 48.1,
      assists: 16.4,
      steals: 5.7,
      blocks: 4.9,
      turnovers: 14.6,
      fgPct: 44.0,
      ftPct: 71.9,
      threePct: 27.7,
    };
    // Leaders as per ESPN team leaders section【91079070363421†L59-L62】.
    const leaders = [
      { stat: 'Points', player: 'Thomas Haugh', value: 17.9 },
      { stat: 'Rebounds', player: 'Rueben Chinyelu', value: 10.9 },
      { stat: 'Assists', player: 'Xaivian Lee', value: 4.0 },
      { stat: 'Steals', player: 'Boogie Fland', value: 1.7 },
      { stat: 'Blocks', player: 'Alex Condon', value: 1.2 },
    ];
    return (
      <div className="page stats">
        <h1>Team Statistics</h1>
        <section className="team-averages">
          <h2>Averages (per game)</h2>
          <ul>
            <li><strong>Points:</strong> {teamAverages.points.toFixed(1)}</li>
            <li><strong>Rebounds:</strong> {teamAverages.rebounds.toFixed(1)}</li>
            <li><strong>Assists:</strong> {teamAverages.assists.toFixed(1)}</li>
            <li><strong>Steals:</strong> {teamAverages.steals.toFixed(1)}</li>
            <li><strong>Blocks:</strong> {teamAverages.blocks.toFixed(1)}</li>
            <li><strong>Turnovers:</strong> {teamAverages.turnovers.toFixed(1)}</li>
            <li><strong>FG%:</strong> {teamAverages.fgPct.toFixed(1)}%</li>
            <li><strong>FT%:</strong> {teamAverages.ftPct.toFixed(1)}%</li>
            <li><strong>3P%:</strong> {teamAverages.threePct.toFixed(1)}%</li>
          </ul>
        </section>
        <section className="leaders">
          <h2>Stat Leaders</h2>
          <table className="leaders-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Player</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader) => (
                <tr key={leader.stat}>
                  <td>{leader.stat}</td>
                  <td>{leader.player}</td>
                  <td>{leader.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }

  // History page component. Presents an outline of key eras and a list of
  // legendary teams. This page could be expanded with interactive
  // timelines and deeper biographies.
  function HistoryPage() {
    return (
      <div className="page history">
        <h1>History & Legends</h1>
        <p>
          The Florida Gators men’s basketball program has enjoyed
          incredible highs, including back‑to‑back national
          championships in 2006 and 2007. Under coach Billy Donovan,
          the Gators became a perennial power, reaching multiple Final
          Fours and producing NBA talent. This section will house an
          interactive timeline, profiles of the greatest teams and
          players, and records that celebrate the program’s rich
          heritage.
        </p>
      </div>
    );
  }

  // Media page component. Placeholder for photo galleries, video embeds
  // and wallpapers. Currently illustrates how the page could be
  // organized.
  function MediaPage() {
    return (
      <div className="page media">
        <h1>Media Hub</h1>
        <p>
          Coming soon: game photos, highlight videos, press conference
          footage and downloadable Gators wallpapers.
        </p>
      </div>
    );
  }

  // Fan Zone page. This is where polls, trivia and fun prop bets
  // (without real wagers) will live. For now, it invites fans to
  // check back later.
  function FanZonePage() {
    return (
      <div className="page fan-zone">
        <h1>Fan Zone</h1>
        <p>
          Interactive polls, trivia and friendly over/under props will be
          available here. Stay tuned and show off your Gators knowledge!
        </p>
      </div>
    );
  }

  // News page component. In a future iteration this could pull
  // headlines from the official site and trusted sports outlets. For
  // now, it lists a few external links manually.
  function NewsPage() {
    return (
      <div className="page news">
        <h1>News & Links</h1>
        <ul className="news-list">
          <li><a href="https://floridagators.com/sports/mens-basketball" target="_blank" rel="noopener">Official Team Site</a></li>
          <li><a href="https://www.espn.com/mens-college-basketball/team/_/id/57/florida-gators" target="_blank" rel="noopener">ESPN Gators Page</a></li>
          <li><a href="https://www.secsports.com/" target="_blank" rel="noopener">SEC Sports</a></li>
        </ul>
      </div>
    );
  }

  // Application root with routes. Additional routes should be added
  // here as new pages are developed.
  function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/roster" element={<RosterPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/fanzone" element={<FanZonePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }

  // Mount the application.
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
})();