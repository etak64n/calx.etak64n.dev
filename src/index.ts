import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.html(page());
});

function page(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>calx — Native macOS Calendar CLI</title>
<meta name="description" content="Browse, search, create, and manage Apple Calendar events from your terminal. Built on EventKit." />
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0a0a0a;--fg:#e4e4e7;--muted:#71717a;--accent:#a78bfa;--accent2:#c4b5fd;--surface:#18181b;--border:#27272a;--code-bg:#1c1c1f;--radius:8px}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--fg);line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:var(--accent);text-decoration:none}
a:hover{color:var(--accent2)}

.container{max-width:720px;margin:0 auto;padding:0 24px}

/* Hero */
header{padding:80px 0 60px;text-align:center}
header h1{font-size:3rem;font-weight:700;letter-spacing:-.03em;margin-bottom:8px}
header h1 span{color:var(--accent)}
header p.tagline{font-size:1.15rem;color:var(--muted);max-width:480px;margin:0 auto 32px}
.install-box{display:inline-block;background:var(--code-bg);border:1px solid var(--border);border-radius:var(--radius);padding:12px 24px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.95rem;color:var(--accent2);user-select:all}
.cta-row{margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.cta-row a{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:var(--radius);font-size:.9rem;font-weight:500;transition:opacity .15s}
.cta-primary{background:var(--accent);color:#0a0a0a}
.cta-primary:hover{color:#0a0a0a;opacity:.85}
.cta-secondary{border:1px solid var(--border);color:var(--fg)}
.cta-secondary:hover{border-color:var(--muted)}

/* Sections */
section{padding:48px 0}
section h2{font-size:1.5rem;font-weight:600;margin-bottom:24px;letter-spacing:-.02em}
.divider{border:none;border-top:1px solid var(--border);margin:0}

/* Features */
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
.feature{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px}
.feature h3{font-size:.95rem;font-weight:600;margin-bottom:6px}
.feature p{font-size:.85rem;color:var(--muted);line-height:1.5}

/* Code blocks */
pre{background:var(--code-bg);border:1px solid var(--border);border-radius:var(--radius);padding:16px 20px;overflow-x:auto;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:.85rem;line-height:1.7;color:var(--fg)}
pre .comment{color:#525264}
pre .cmd{color:var(--accent2)}

/* Footer */
footer{padding:48px 0;text-align:center;color:var(--muted);font-size:.8rem;border-top:1px solid var(--border)}
footer a{color:var(--muted)}
footer a:hover{color:var(--fg)}

@media(max-width:480px){
  header h1{font-size:2.2rem}
  header{padding:48px 0 40px}
  section{padding:32px 0}
}
</style>
</head>
<body>

<header>
  <div class="container">
    <h1><span>calx</span></h1>
    <p class="tagline">Native macOS Calendar CLI built on EventKit.<br/>Browse, search, create, and manage events from your terminal.</p>
    <div class="install-box">brew install etak64n/tap/calx</div>
    <div class="cta-row">
      <a href="https://github.com/etak64n/calx" class="cta-primary">GitHub</a>
      <a href="#get-started" class="cta-secondary">Get Started</a>
    </div>
  </div>
</header>

<hr class="divider" />

<section>
  <div class="container">
    <h2>Highlights</h2>
    <div class="features">
      <div class="feature">
        <h3>Native EventKit</h3>
        <p>Direct integration with Apple Calendar. No API keys, no sync — just your local calendars.</p>
      </div>
      <div class="feature">
        <h3>Natural Language Dates</h3>
        <p><code>tomorrow 3pm</code>, <code>next friday</code> — type dates the way you think.</p>
      </div>
      <div class="feature">
        <h3>Structured Output</h3>
        <p>Export as JSON, YAML, CSV, TSV, or table. Pipe into your scripts.</p>
      </div>
      <div class="feature">
        <h3>Single Binary</h3>
        <p>No runtime dependencies. Install via Homebrew or build from source with Cargo.</p>
      </div>
      <div class="feature">
        <h3>Full CRUD</h3>
        <p>Create, read, update, delete, duplicate events. Save reusable templates.</p>
      </div>
      <div class="feature">
        <h3>Smart Scheduling</h3>
        <p>Conflict checks and free-slot discovery for scheduling workflows.</p>
      </div>
    </div>
  </div>
</section>

<hr class="divider" />

<section id="get-started">
  <div class="container">
    <h2>Get Started</h2>
<pre><span class="comment"># Install</span>
<span class="cmd">brew install etak64n/tap/calx</span>

<span class="comment"># Show today's schedule</span>
<span class="cmd">calx today</span>

<span class="comment"># List upcoming events</span>
<span class="cmd">calx upcoming</span>

<span class="comment"># Search events</span>
<span class="cmd">calx search "meeting"</span>

<span class="comment"># Create an event with natural language</span>
<span class="cmd">calx add --title "Lunch" --start "tomorrow 12pm" --end "tomorrow 1pm"</span>

<span class="comment"># Output as JSON</span>
<span class="cmd">calx today -o json</span></pre>
  </div>
</section>

<hr class="divider" />

<section>
  <div class="container">
    <h2>More Examples</h2>
<pre><span class="comment"># Check conflicts before scheduling</span>
<span class="cmd">calx conflicts --start "tomorrow 2pm" --end "tomorrow 3pm"</span>

<span class="comment"># Find free slots</span>
<span class="cmd">calx free --from tomorrow --to "in 3 days"</span>

<span class="comment"># Filter by time range</span>
<span class="cmd">calx today --after 09:00 --before 17:00</span>

<span class="comment"># Save a template and reuse it</span>
<span class="cmd">calx template save standup --query "Standup" --exact</span>
<span class="cmd">calx template add standup --start "next monday 9:30am"</span>

<span class="comment"># Undo the last change</span>
<span class="cmd">calx undo</span></pre>
  </div>
</section>

<footer>
  <div class="container">
    <p>MIT License &middot; <a href="https://github.com/etak64n/calx">etak64n/calx</a></p>
  </div>
</footer>

</body>
</html>`;
}

export default app;
