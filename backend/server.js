import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ JDoodle API endpoint
app.post("/run", async (req, res) => {
  const { script } = req.body;

  const payload = {
    script,
    language: "java",
    versionIndex: "3",
    clientId: "2ba0b41759a9ed82ed7db83506de4b66", // apna JDoodle clientId
    clientSecret: "ebca2aa906b2b5c742f2affafbe9fd0b2f1a1366aebaf895501757557675d96b", // apna JDoodle secret
  };

  try {
    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // Agar JDoodle se error aaya toh usme line info hoti hai
    res.json({
      output: data.output,
      statusCode: data.statusCode,
      memory: data.memory,
      cpuTime: data.cpuTime,
    });
  } catch (err) {
    res.json({ output: "⚠️ Error connecting to JDoodle API!" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
