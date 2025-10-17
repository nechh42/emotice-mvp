<<<<<<< HEAD
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
})

const SYSTEM_PROMPT = `You are a compassionate mental health companion for Emotice, an AI mood tracker app. 

Your role:
- Provide emotional support and validation
- Ask thoughtful follow-up questions
- Never diagnose or replace professional help
- Keep responses concise (2-3 sentences)
- Be warm, empathetic, and non-judgmental

Remember: You're a supportive friend, not a therapist.`

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { messages } = req.body

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 150
    })

    res.status(200).json({
      content: response.choices[0].message.content
    })
  } catch (error) {
    console.error('OpenAI Error:', error)
    res.status(500).json({ error: 'Failed to get AI response' })
  }
}
=======
// api/chat.js (Next.js API route gibi)
// (1) Basit rate limit (production için Redis önerilir)
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const LIMIT = 15; // messages / minute
const WINDOW_MS = 60_000;
const ipMap = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

  const now = Date.now();
  const entry = ipMap.get(ip) || { timestamps: [], blockedUntil: 0 };
  entry.timestamps = entry.timestamps.filter(t => t > now - WINDOW_MS);
  if (entry.blockedUntil && entry.blockedUntil > now) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  if (entry.timestamps.length >= LIMIT) {
    entry.blockedUntil = now + WINDOW_MS;
    ipMap.set(ip, entry);
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  // server-side crisis detection (import from lib/crisisDetection)
  // if crisis -> return helpful response without calling OpenAI

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: '...' }, ...messages],
      max_tokens: 300
    });
    entry.timestamps.push(now);
    ipMap.set(ip, entry);
    return res.status(200).json({ content: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    return res.status(502).json({ error: 'OpenAI service error' });
  }
}
>>>>>>> 835e4aa1 (Initial commit: EMOTICE MVP with Auth and KVKK)
