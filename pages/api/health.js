export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'SOLVORA E-commerce',
    });
  } catch (error) {
    res.status(500).json({ error: 'Health check failed' });
  }
}
