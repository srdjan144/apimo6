export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.apimo.pro/agencies/2188/properties', {
      headers: {
        Authorization: `Bearer ${process.env.APIMO_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`Apimo API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur API Apimo :", error.message);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
}
