
export default async function handler(req, res) {
  const token = process.env.APIMO_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Missing APIMO_TOKEN env variable" });
  }

  try {
    const response = await fetch("https://api.apimo.pro/agencies/2188/properties", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch properties" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
