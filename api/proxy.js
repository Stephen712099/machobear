export default async function handler(req, res) {
  const webhookUrl = "https://stephen712099.app.n8n.cloud/webhook/821db390-cbf5-4093-8827-5caee51b48f4";

  try {
    const n8nRes = await fetch(webhookUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await n8nRes.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching from n8n", details: error.message });
  }
}
