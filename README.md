# 💄 Ulta Beauty Genie – Copilot Plugin

Ulta Beauty Genie is a declarative Copilot extension that delivers **personalized beauty product recommendations** based on user profile data like age, gender, skin type, and preferences.

It uses an OpenAPI-based plugin, a mock API for local testing, and Adaptive Cards to display rich product visuals in Teams Copilot.

---

## 🧠 Features

- Personalized skincare/makeup suggestions
- Dynamic adaptive cards with:
  - Product image
  - Price, category
  - ⭐ 1–5 star rating
  - Link to product
- Compatible with Microsoft Teams Copilot
- Local development with `devtunnel` support

---

## 🛠️ Project Structure

```
├── appPackage/
│   ├── ulta-declarative-agent.json   # Declarative Copilot definition
│   ├── ulta-plugin.json              # Plugin metadata + Adaptive Card UI
│   └── ulta-definition.json          # OpenAPI spec powering the Copilot plugin
├── mock-api/
│   └── ULTA_api_server.js            # Node.js mock API with product data
├── .env.local                        # Local override with devtunnel URL
├── README.md                         # You're here!
```

---

## 🧪 Running Locally

### 1. Install Mock API Server

```bash
cd mock-api
npm install express cors
node ULTA_api_server.js
```

It will run on `http://localhost:7072`.

---

### 2. Create Dev Tunnel (once)

```bash
devtunnel create ulta-api-tunnel -a
devtunnel port create -p 7072 --protocol http
```

To start hosting:
```bash
devtunnel host ulta-api-tunnel
```

---

### 3. Update `.env.local`

Replace:
```env
OPENAPI_SERVER_URL=https://<your-devtunnel-id>-7072.usw2.devtunnels.ms
```

---

## 💡 Example Queries

- “I’m 45 and have dry skin. What do you recommend?”
- “Show me best foundations for oily skin.”
- “Suggest anti-aging creams for combination skin.”

---

## 🧼 Reset & Redeploy

If things break, try:
```bash
rm -rf .localConfigs
rm -rf appPackage/build
npx teamsfx provision
```

---

## 📎 Resources

- [Adaptive Card Designer](https://adaptivecards.io/designer/)
- [Copilot Plugin Schema](https://aka.ms/json-schemas/copilot-extensions/vNext)

---

## 🧴 Made for Ulta Beauty (Demo Use Only)
This is a non-production example for demonstrating generative UI in Microsoft 365 Copilot.
