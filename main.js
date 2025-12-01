// Data definitions for the Florida Gators men’s basketball fan hub.
// This file does not depend on any external libraries, enabling
// deployment on GitHub Pages without CDN access.

// Roster information derived from official sources【607721405128622†L346-L365】. Each
// entry represents a player on the 2025–26 roster.
const roster = [
  { number: 23, name: 'AJ Brown', position: 'G', height: "6'4\"", weight: '210 lbs', class: 'JR', hometown: 'Orlando, FL' },
  { number: 20, name: 'Isaiah Brown', position: 'G', height: "6'4\"", weight: '210 lbs', class: 'SO', hometown: 'Orlando, FL' },
  { number: 9, name: 'Rueben Chinyelu', position: 'C', height: "6'10\"", weight: '265 lbs', class: 'JR', hometown: 'Enugu, Nigeria' },
  { number: 21, name: 'Alex Condon', position: 'F', height: "6'11\"", weight: '230 lbs', class: 'JR', hometown: 'Perth, Australia' },
  { number: 0, name: 'Boogie Fland', position: 'G', height: "6'3\"", weight: '185 lbs', class: 'SO', hometown: 'Bronx, NY' },
  { number: 3, name: 'Micah Handlogten', position: 'C', height: "7'1\"", weight: '260 lbs', class: 'SR', hometown: 'Lake Norman, NC' },
  { number: 10, name: 'Thomas Haugh', position: 'F', height: "6'9\"", weight: '215 lbs', class: 'JR', hometown: 'New Oxford, PA' },
  { number: 11, name: 'CJ Ingram', position: 'G', height: "6'6\"", weight: '205 lbs', class: 'FR', hometown: 'Hawthorne, FL' },
  { number: 33, name: 'Cooper Josefsberg', position: 'G', height: "6'4\"", weight: '195 lbs', class: 'JR', hometown: 'Miami, FL' },
  { number: 7, name: 'Urban Klavzar', position: 'G', height: "6'1\"", weight: '195 lbs', class: 'JR', hometown: 'Domzale, Slovenia' },
  { number: 8, name: 'Alex Kovatchev', position: 'G', height: "6'5\"", weight: '190 lbs', class: 'SO', hometown: 'Perth, Australia' },
  { number: 1, name: 'Xaivian Lee', position: 'G', height: "6'4\"", weight: '180 lbs', class: 'SR', hometown: 'Toronto, Canada' },
  { number: 4, name: 'Alex Lloyd', position: 'G', height: "6'3\"", weight: '180 lbs', class: 'FR', hometown: 'Miami, FL' },
  { number: 12, name: 'Viktor Mikic', position: 'C', height: "6'11\"", weight: '260 lbs', class: 'SO', hometown: 'Belgrade, Serbia' },
  { number: 32, name: 'Olivier Rioux', position: 'C', height: "7'9\"", weight: '305 lbs', class: 'FR', hometown: 'Terrebonne, Canada' },
];

// Schedule and results from the first part of the season【52426056897191†L443-L522】.
const schedule = [
  { date: '2025-11-03', opponent: 'Arizona', location: 'Neutral', site: 'Las Vegas, NV (Hall of Fame Series)', result: 'L', score: '87–93' },
  { date: '2025-11-06', opponent: 'North Florida', location: 'Home', site: 'Gainesville, FL', result: 'W', score: '104–64' },
  { date: '2025-11-11', opponent: 'Florida State', location: 'Home', site: 'Gainesville, FL', result: 'W', score: '78–76' },
  { date: '2025-11-16', opponent: 'Miami', location: 'Neutral', site: 'Jacksonville, FL (Jax Hoops Showdown)', result: 'W', score: '82–68' },
  { date: '2025-11-21', opponent: 'Merrimack', location: 'Home', site: 'Gainesville, FL', result: 'W', score: '80–45' },
  { date: '2025-11-27', opponent: 'TCU', location: 'Neutral', site: 'San Diego, CA (Rady Children’s Invitational)', result: 'L', score: '80–84' },
  { date: '2025-11-28', opponent: 'Providence', location: 'Neutral', site: 'San Diego, CA (Rady Children’s Invitational)', result: 'W', score: '90–78' },
  { date: '2025-12-02', opponent: 'Duke', location: 'Away', site: 'Durham, NC (SEC–ACC Challenge)', result: null, score: null },
  { date: '2025-12-09', opponent: 'UConn', location: 'Neutral', site: 'New York, NY (Jimmy V Classic)', result: null, score: null },
];

// Team record as of Nov 30 2025【880828013666770†L35-L41】.
const teamRecord = {
  overall: { wins: 5, losses: 2 },
  conference: { wins: 0, losses: 0 },
};

// Team average stats per game【91079070363421†L59-L99】.
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

// Stat leaders【91079070363421†L59-L62】.
const leaders = [
  { stat: 'Points', player: 'Thomas Haugh', value: 17.9 },
  { stat: 'Rebounds', player: 'Rueben Chinyelu', value: 10.9 },
  { stat: 'Assists', player: 'Xaivian Lee', value: 4.0 },
  { stat: 'Steals', player: 'Boogie Fland', value: 1.7 },
  { stat: 'Blocks', player: 'Alex Condon', value: 1.2 },
];

// Recent news headlines summarised from official game recaps【814815743773030†L357-L401】【445942061119865†L309-L337】【333712395387725†L357-L373】.
// Each item includes a title, a short description drawn from the article and a link to the full story.
const newsItems = [
  {
    title: 'Lee breaks out in win over Providence',
    description:
      'Guard Xaivian Lee scored a season‑high 20 points and hit four 3‑pointers as Florida defeated Providence 90–78. The Gators got double‑doubles from Thomas Haugh and Rueben Chinyelu, while Boogie Fland and Urban Klavzar combined for 55 points.',
    link:
      'https://floridagators.com/news/2025/11/28/mens-basketball-lee-breaks-out-in-win-over-providence-nov-28-2025',
  },
  {
    title: 'Florida edges Florida State 78–76',
    description:
      'Boogie Fland and Alex Condon knocked down clutch free throws to secure a 78–76 rivalry win over Florida State. Thomas Haugh recorded 20 points and 13 rebounds, and Rueben Chinyelu added 10 points and a career‑best 16 boards for the Gators.',
    link:
      'https://floridagators.com/news/2025/11/11/mens-basketball-buzzer-florida-vs-florida-state-nov-11-2025',
  },
  {
    title: 'Chinyelu crashes glass as UF smashes Merrimack',
    description:
      'Junior center Rueben Chinyelu grabbed 21 rebounds – the most by a Gator since 1994 – and scored 14 points as Florida routed Merrimack 80–45. Alex Condon finished with 20 points and 11 boards, and Thomas Haugh added 13 points.',
    link:
      'https://floridagators.com/news/2025/11/21/mens-basketball-chineylu-crashes-glass-uf-smashes-merrimack-nov-21-2025',
  },
];

// Format a date string like "2025-11-03" to human friendly form.
function formatDate(isoDate) {
  const dt = new Date(isoDate + 'T00:00:00');
  return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

// Determine next upcoming game (first with null result).
function getNextGame() {
  return schedule.find((g) => !g.result) || null;
}

// Render functions for each page. They return HTML strings.
function renderHome() {
  const next = getNextGame();
  let html = '';
  // Hero with season info and next game
  html += `<section class="hero">`;
  html += `<h1>2025–26 Florida Gators Men’s Basketball</h1>`;
  html += `<p class="record">Overall: ${teamRecord.overall.wins}–${teamRecord.overall.losses} | SEC: ${teamRecord.conference.wins}–${teamRecord.conference.losses}</p>`;
  if (next) {
    html += `<div class="next-game">`;
    const prefix = next.location === 'Home' ? 'vs' : next.location === 'Away' ? 'at' : '';
    html += `<h2>Next Game</h2>`;
    html += `<p class="opponent">${prefix} ${next.opponent}</p>`;
    html += `<p>${formatDate(next.date)} · ${next.site.split(' (')[0]}</p>`;
    html += `<div class="hero-buttons">`;
    html += `<a class="btn" href="#schedule">Schedule</a>`;
    html += `<a class="btn" href="#stats">Stats</a>`;
    html += `</div>`;
    html += `</div>`;
  }
  html += `</section>`;
  // Upcoming games (first two upcoming)
  const upcoming = schedule.filter((g) => !g.result).slice(0, 2);
  if (upcoming.length > 0) {
    html += `<section class="home-section">`;
    html += `<h2>Upcoming Games</h2>`;
    html += `<div class="card-grid">`;
    upcoming.forEach((game) => {
      const prefix = game.location === 'Home' ? 'vs' : game.location === 'Away' ? 'at' : '';
      html += `<div class="card">`;
      html += `<h3>${prefix} ${game.opponent}</h3>`;
      html += `<p>${formatDate(game.date)}</p>`;
      html += `<p>${game.site.split(' (')[0]}</p>`;
      html += `</div>`;
    });
    html += `</div>`;
    html += `</section>`;
  }
  // Recent results (last two completed games)
  const results = schedule.filter((g) => g.result).slice(-2);
  if (results.length > 0) {
    html += `<section class="home-section">`;
    html += `<h2>Recent Results</h2>`;
    html += `<div class="card-grid">`;
    results.forEach((game) => {
      const outcome = game.result === 'W' ? 'Win' : 'Loss';
      html += `<div class="card">`;
      html += `<h3>${outcome} vs ${game.opponent}</h3>`;
      html += `<p>${formatDate(game.date)}</p>`;
      html += `<p>${game.score}</p>`;
      html += `</div>`;
    });
    html += `</div>`;
    html += `</section>`;
  }
  // News items
  if (newsItems.length > 0) {
    html += `<section class="home-section">`;
    html += `<h2>Latest News</h2>`;
    html += `<div class="news-grid">`;
    newsItems.forEach((n) => {
      html += `<div class="news-card">`;
      html += `<h3>${n.title}</h3>`;
      html += `<p>${n.description}</p>`;
      html += `<a href="${n.link}" target="_blank" rel="noopener">Read more</a>`;
      html += `</div>`;
    });
    html += `</div>`;
    html += `</section>`;
  }
  // Quick links remain at the bottom
  html += `<section class="quick-links">`;
  html += `<h2>Quick Links</h2>`;
  html += `<div class="link-grid">`;
  html += `<a class="link-card" href="#schedule">Full Schedule</a>`;
  html += `<a class="link-card" href="#roster">Roster</a>`;
  html += `<a class="link-card" href="#stats">Stats</a>`;
  html += `<a class="link-card" href="#fanzone">Fan Zone</a>`;
  html += `</div>`;
  html += `</section>`;
  return html;
}

function renderSchedule() {
  let rows = '';
  schedule.forEach((game) => {
    const rowClass = game.result ? (game.result === 'W' ? 'win' : 'loss') : 'upcoming';
    rows += `<tr class="${rowClass}">`;
    rows += `<td>${formatDate(game.date)}</td>`;
    rows += `<td>${game.opponent}</td>`;
    rows += `<td>${game.location}</td>`;
    rows += `<td>${game.site}</td>`;
    rows += `<td>${game.result || '—'}</td>`;
    rows += `<td>${game.score || 'TBD'}</td>`;
    rows += `</tr>`;
  });
  return `
    <h1>Schedule & Results</h1>
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Date</th><th>Opponent</th><th>Location</th><th>Site</th><th>Result</th><th>Score</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderRoster() {
  let cards = '';
  roster.forEach((p) => {
    cards += `<div class="player-card">`;
    cards += `<div class="player-number">#${p.number}</div>`;
    cards += `<div class="player-info">`;
    cards += `<h3>${p.name}</h3>`;
    cards += `<p>${p.position} • ${p.height} • ${p.weight}</p>`;
    cards += `<p>${p.class}</p>`;
    cards += `<p>${p.hometown}</p>`;
    cards += `</div>`;
    cards += `</div>`;
  });
  return `<h1>Roster</h1><div class="roster-grid">${cards}</div>`;
}

function renderStats() {
  let avgList = '';
  Object.keys(teamAverages).forEach((key) => {
    const labelMap = {
      points: 'Points',
      rebounds: 'Rebounds',
      assists: 'Assists',
      steals: 'Steals',
      blocks: 'Blocks',
      turnovers: 'Turnovers',
      fgPct: 'FG%','ftPct': 'FT%','threePct': '3P%'
    };
    const label = labelMap[key] || key;
    avgList += `<li><strong>${label}:</strong> ${teamAverages[key].toFixed(1)}${key.includes('Pct') ? '%' : ''}</li>`;
  });
  let leaderRows = '';
  leaders.forEach((l) => {
    leaderRows += `<tr><td>${l.stat}</td><td>${l.player}</td><td>${l.value}</td></tr>`;
  });
  return `
    <h1>Team Statistics</h1>
    <section class="team-averages">
      <h2>Averages (per game)</h2>
      <ul>${avgList}</ul>
    </section>
    <section class="leaders">
      <h2>Stat Leaders</h2>
      <table class="leaders-table">
        <thead><tr><th>Category</th><th>Player</th><th>Value</th></tr></thead>
        <tbody>${leaderRows}</tbody>
      </table>
    </section>
  `;
}

function renderHistory() {
  return `
    <h1>History & Legends</h1>
    <p>
      The Florida Gators men’s basketball program has enjoyed incredible highs,
      including back‑to‑back national championships in 2006 and 2007 under
      Coach Billy Donovan. This section will grow to include an interactive
      timeline, profiles of legendary teams and players, and all‑time records.
    </p>
  `;
}

function renderMedia() {
  return `
    <h1>Media Hub</h1>
    <p>Coming soon: game photos, highlight videos, press conference footage and downloadable wallpapers.</p>
  `;
}

function renderFanZone() {
  // Build a simple poll for the Fan Zone. Users can select an MVP
  // candidate and submit their vote. Results are stored in
  // localStorage so they persist between sessions. See handlePoll()
  // for the logic.
  return `
    <h1>Fan Zone</h1>
    <p>Interactive polls, trivia and friendly prop challenges will live here.</p>
    <section class="poll">
      <h2>Fan Poll: Who is your early-season MVP?</h2>
      <form id="mvp-form">
        <label><input type="radio" name="mvp" value="Thomas Haugh" required> Thomas Haugh</label><br>
        <label><input type="radio" name="mvp" value="Rueben Chinyelu"> Rueben Chinyelu</label><br>
        <label><input type="radio" name="mvp" value="Boogie Fland"> Boogie Fland</label><br>
        <label><input type="radio" name="mvp" value="Someone else"> Someone else</label><br>
        <button type="submit" class="btn" style="margin-top:0.5rem;">Vote</button>
      </form>
      <div id="poll-results" style="margin-top:1rem;"></div>
    </section>
    <section class="trivia" style="margin-top:2rem;">
      <h2>Trivia Quiz: Test Your Gators Knowledge</h2>
      <form id="trivia-form">
        <!-- Questions will be injected here by setupTrivia() -->
        <div id="trivia-questions"></div>
        <button type="submit" class="btn" style="margin-top:0.5rem;">Submit Quiz</button>
      </form>
      <div id="trivia-results" style="margin-top:1rem;"></div>
    </section>
  `;
}

// After the fan zone content has been rendered to the DOM, attach
// handlers for the MVP poll. This function reads existing vote
// counts from localStorage (if any), registers a submit handler on
// the form, and renders the current results. It is safe to call
// multiple times because event handlers are removed before adding.
function setupFanZonePoll() {
  const form = document.getElementById('mvp-form');
  const resultsDiv = document.getElementById('poll-results');
  if (!form || !resultsDiv) return;
  // Helper to get or initialize vote data
  function getVotes() {
    const stored = localStorage.getItem('mvpVotes');
    let votes;
    if (stored) {
      try {
        votes = JSON.parse(stored);
      } catch (e) {
        votes = {};
      }
    } else {
      votes = {};
    }
    // Ensure keys for all options exist
    ['Thomas Haugh', 'Rueben Chinyelu', 'Boogie Fland', 'Someone else'].forEach((opt) => {
      if (!(opt in votes)) votes[opt] = 0;
    });
    return votes;
  }
  // Render the vote results into the resultsDiv
  function renderResults() {
    const votes = getVotes();
    const total = Object.values(votes).reduce((a, b) => a + b, 0);
    let html = '<h3>Current Results</h3><ul>';
    Object.entries(votes).forEach(([player, count]) => {
      const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
      html += `<li>${player}: ${count} vote${count === 1 ? '' : 's'} (${percentage}%)</li>`;
    });
    html += '</ul>';
    resultsDiv.innerHTML = html;
  }
  // Remove any previously attached submit handler
  const newForm = form.cloneNode(true);
  form.parentNode.replaceChild(newForm, form);
  // Attach submit handler
  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newForm);
    const choice = data.get('mvp');
    if (!choice) return;
    const votes = getVotes();
    votes[choice] = (votes[choice] || 0) + 1;
    localStorage.setItem('mvpVotes', JSON.stringify(votes));
    renderResults();
  });
  // Display current results on load
  renderResults();
}

// Trivia questions for the fan zone quiz. Each object
// contains the question text, multiple choices, and the correct answer.
const triviaQuestions = [
  {
    question: 'In what year did the Florida Gators win their first NCAA men\'s basketball championship?',
    options: ['1994', '2000', '2006', '2010'],
    answer: '2006',
  },
  {
    question: 'Who coached the Gators to back‑to‑back national titles in 2006 and 2007?',
    options: ['Billy Donovan', 'Mike White', 'Lon Kruger', 'Norm Sloan'],
    answer: 'Billy Donovan',
  },
  {
    question: 'Which Gator was named Most Outstanding Player of the 2007 Final Four?',
    options: ['Joakim Noah', 'Corey Brewer', 'Al Horford', 'Taurean Green'],
    answer: 'Corey Brewer',
  },
];

// Set up the trivia quiz: populate the questions and handle submissions.
function setupTrivia() {
  const container = document.getElementById('trivia-questions');
  const resultsDiv = document.getElementById('trivia-results');
  const form = document.getElementById('trivia-form');
  if (!container || !form) return;
  // Populate questions into the container
  let qHtml = '';
  triviaQuestions.forEach((q, idx) => {
    qHtml += `<div class="trivia-question"><p>${idx + 1}. ${q.question}</p>`;
    q.options.forEach((opt) => {
      const id = `q${idx}-opt-${opt.replace(/\s+/g, '')}`;
      qHtml += `<label><input type="radio" name="q${idx}" value="${opt}" required> ${opt}</label><br>`;
    });
    qHtml += '</div><br>';
  });
  container.innerHTML = qHtml;
  // Remove existing submit event handler, if any
  const newForm = form.cloneNode(true);
  form.parentNode.replaceChild(newForm, form);
  // On submit, compute score
  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let correct = 0;
    triviaQuestions.forEach((q, idx) => {
      const selected = newForm.querySelector(`input[name="q${idx}"]:checked`);
      if (selected && selected.value === q.answer) {
        correct += 1;
      }
    });
    resultsDiv.textContent = `You scored ${correct} out of ${triviaQuestions.length}!`;
  });
}

function renderNews() {
  return `
    <h1>News & Links</h1>
    <ul class="news-list">
      <li><a href="https://floridagators.com/sports/mens-basketball" target="_blank" rel="noopener">Official Team Site</a></li>
      <li><a href="https://www.espn.com/mens-college-basketball/team/_/id/57/florida-gators" target="_blank" rel="noopener">ESPN Gators Page</a></li>
      <li><a href="https://www.secsports.com/" target="_blank" rel="noopener">SEC Sports</a></li>
    </ul>
  `;
}

// Populate all sections with their content.
function populatePages() {
  document.getElementById('home').innerHTML = renderHome();
  document.getElementById('schedule').innerHTML = renderSchedule();
  document.getElementById('roster').innerHTML = renderRoster();
  document.getElementById('stats').innerHTML = renderStats();
  document.getElementById('history').innerHTML = renderHistory();
  document.getElementById('media').innerHTML = renderMedia();
  document.getElementById('fanzone').innerHTML = renderFanZone();
  document.getElementById('news').innerHTML = renderNews();
}

// Show the requested section and hide others.
function setActivePage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((p) => {
    p.classList.remove('active');
    if (p.id === pageId) {
      p.classList.add('active');
    }
  });
}

// Handle navigation via hash (#home, #schedule, etc.).
function handleHashChange() {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'schedule', 'roster', 'stats', 'history', 'media', 'fanzone', 'news'];
  if (validPages.includes(hash)) {
    setActivePage(hash);
  } else {
    setActivePage('home');
  }
}

// Toggle mobile menu.
function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close menu on link click (especially on mobile)
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
    }
  });
}

// Initialise the app once DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  populatePages();
  // Initialise poll event handlers after pages are populated
  setupFanZonePoll();
  // Initialize trivia quiz
  setupTrivia();
  initMenu();
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
});