const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Node.js CI/CD Pipeline</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', sans-serif;
          background: #0d1117;
          color: #e6edf3;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .badge { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; justify-content: center; }
        .tag {
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }
        .green  { background: #238636; color: #fff; }
        .blue   { background: #2496ED; color: #fff; }
        .purple { background: #46E3B7; color: #000; }
        .orange { background: #2088FF; color: #fff; }
        h1 { font-size: 2.4rem; margin-bottom: 10px; }
        h1 span { color: #46E3B7; }
        .subtitle { color: #8b949e; font-size: 1rem; margin-bottom: 40px; }
        .pipeline {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 12px;
          padding: 24px 32px;
          margin-bottom: 32px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .step .icon {
          background: #21262d;
          border: 1px solid #30363d;
          border-radius: 10px;
          padding: 12px 18px;
          font-size: 1.4rem;
        }
        .step .label { font-size: 12px; color: #8b949e; }
        .arrow { font-size: 1.4rem; color: #46E3B7; margin-top: -18px; }
        .status-box {
          background: #161b22;
          border: 1px solid #238636;
          border-radius: 12px;
          padding: 20px 40px;
          text-align: center;
          margin-bottom: 32px;
        }
        .status-box .dot {
          display: inline-block;
          width: 10px; height: 10px;
          background: #3fb950;
          border-radius: 50%;
          margin-right: 8px;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; } 50% { opacity:0.4; }
        }
        .status-box p { color: #3fb950; font-weight: 600; font-size: 1rem; }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 600px;
          width: 100%;
          margin-bottom: 32px;
        }
        .info-card {
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 10px;
          padding: 16px;
          text-align: center;
        }
        .info-card .val { font-size: 1.4rem; font-weight: 700; color: #46E3B7; }
        .info-card .key { font-size: 11px; color: #8b949e; margin-top: 4px; }
        .footer { color: #8b949e; font-size: 13px; }
        .footer a { color: #46E3B7; text-decoration: none; }
      </style>
    </head>
    <body>

      <div class="badge">
        <span class="tag green">✅ CI Passing</span>
        <span class="tag blue">🐳 Docker</span>
        <span class="tag purple">🚀 Render Live</span>
        <span class="tag orange">⚙️ GitHub Actions</span>
      </div>

      <h1>⚙️ Node.js <span>CI/CD</span> Pipeline</h1>
      <p class="subtitle">Automated build → test → deploy on every git push</p>

      <div class="pipeline">
        <div class="step">
          <div class="icon">👨‍💻</div>
          <div class="label">git push</div>
        </div>
        <div class="arrow">→</div>
        <div class="step">
          <div class="icon">🧪</div>
          <div class="label">Build & Test</div>
        </div>
        <div class="arrow">→</div>
        <div class="step">
          <div class="icon">🐳</div>
          <div class="label">Docker Push</div>
        </div>
        <div class="arrow">→</div>
        <div class="step">
          <div class="icon">🚀</div>
          <div class="label">Deploy</div>
        </div>
        <div class="arrow">→</div>
        <div class="step">
          <div class="icon">🌐</div>
          <div class="label">Live</div>
        </div>
      </div>

      <div class="status-box">
        <p><span class="dot"></span>Application is running successfully</p>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <div class="val">Node.js</div>
          <div class="key">Runtime</div>
        </div>
        <div class="info-card">
          <div class="val">Docker</div>
          <div class="key">Container</div>
        </div>
        <div class="info-card">
          <div class="val">Render</div>
          <div class="key">Platform</div>
        </div>
      </div>

      <div class="footer">
        Built by <a href="https://github.com/TrisHa0510">Trisha Patil</a> &nbsp;|&nbsp;
        <a href="/health">Health Check</a> &nbsp;|&nbsp;
        <a href="/api">API Response</a>
      </div>

    </body>
    </html>
  `);
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from CI/CD!', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

module.exports = app;