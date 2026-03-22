import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vrworld';

app.use(cors());
app.use(express.json());

// Schemas
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: String,
  joinedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

const WaitlistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  signedUpAt: { type: Date, default: Date.now },
});

const Waitlist = mongoose.model('Waitlist', WaitlistSchema);

// Basic Routes
app.get('/', (req, res) => {
  res.send('VRWorld Backend API is running!');
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'online', 
    db: mongoose.connection.readyState === 1 ? 'connected' : 'connecting/failed' 
  });
});

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/waitlist', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: 'Already on the list', exists: true });
    }
    const signup = new Waitlist({ email });
    await signup.save();
    res.status(201).json({ message: 'Added to waitlist!', exists: false });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// START SERVER
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`📡 VRWorld Nexus Backend signaling on Port ${PORT}...`);
  
  // Connect to MongoDB After the server starts to avoid 502 Boot Timeouts
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ CONNECTED TO MONGODB'))
    .catch((err) => console.error('❌ MONGODB ERROR:', err));
});
