import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ PostgreSQL connection
const pool = new Pool({
  user: "postgres",              // your PostgreSQL username
  host: "localhost",
  database: "emotion_tracker",   // name of your DB
  password: "your_password",     // ⚠️ replace with actual password
  port: 5432,
});

app.use(cors());
app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ Log live emotions
app.post("/log-emotion", (req, res) => {
  const payload = req.body;
  console.log("LOG-EMOTION:", JSON.stringify(payload).slice(0, 1000));
  res.json({ status: "ok" });
});

// ✅ Save entire session summary
app.post("/save-session", async (req, res) => {
  try {
    const { userName, sessionStart, sessionEnd, emotionData, timeSeries, meta } = req.body;

    const result = await pool.query(
      `INSERT INTO sessions (user_name, session_start, session_end, emotion_data, time_series, meta)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [userName, sessionStart, sessionEnd, emotionData, timeSeries, meta || {}]
    );

    res.json({ success: true, sessionId: result.rows[0].id });
  } catch (err) {
    console.error("❌ Error saving session:", err);
    res.status(500).json({ error: "Failed to save session" });
  }
});

// ✅ Retrieve all saved sessions (for dashboard)
app.get("/sessions", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sessions ORDER BY created_at DESC LIMIT 10");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Error fetching sessions:", err);
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
