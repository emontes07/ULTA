const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7072;

app.use(cors());
app.use(express.json());

app.get("/api/products/recommendations", (req, res) => {
  const { age, gender, skinType, concerns, preference } = req.query;

  const baseProducts = [
    {
      productName: "Fenty Beauty Pro Filt'r Soft Matte Longwear Foundation",
      category: "Foundation",
      price: 35.0,
      imageUrl: "https://media.ulta.com/i/ulta/2610673"
    },
    {
      productName: "Too Faced Better Than Sex Mascara",
      category: "Mascara",
      price: 26.0,
      imageUrl: "https://media.ulta.com/i/ulta/2263467"
    },
    {
      productName: "Olaplex No.3 Hair Perfector",
      category: "Hair Treatment",
      price: 28.0,
      imageUrl: "https://media.ulta.com/i/ulta/2603465"
    },
    {
      productName: "Peter Thomas Roth Water Drench Hyaluronic Cloud Cream",
      category: "Moisturizer",
      price: 49.0,
      imageUrl: "https://media.ulta.com/i/ulta/2564751"
    },
    {
      productName: "Kiehl's Facial Fuel Energizing Moisture Treatment for Men",
      category: "Moisturizer",
      price: 29.0,
      imageUrl: "https://media.ulta.com/i/ulta/2536676"
    },
    {
      productName: "Urban Decay All Nighter Setting Spray",
      category: "Setting Spray",
      price: 33.0,
      imageUrl: "https://media.ulta.com/i/ulta/2567751"
    },
    {
      productName: "Anastasia Beverly Hills Modern Renaissance Eyeshadow Palette",
      category: "Eyeshadow Palette",
      price: 45.0,
      imageUrl: "https://media.ulta.com/i/ulta/2615288"
    },
    {
      productName: "BECCA Shimmering Skin Perfector Pressed Highlighter",
      category: "Highlighter",
      price: 38.0,
      imageUrl: "https://media.ulta.com/i/ulta/2587487"
    },
    {
      productName: "Morphe Continuous Setting Mist",
      category: "Setting Spray",
      price: 20.0,
      imageUrl: "https://media.ulta.com/i/ulta/2610861"
    },
    {
      productName: "Baxter of California Daily Face Scrub",
      category: "Face Scrub",
      price: 18.0,
      imageUrl: "https://media.ulta.com/i/ulta/2631588"
    }
  ];

  const results = baseProducts.map((p) => ({
    ...p,
    description: `This ${p.category.toLowerCase()} is great for daily use and loved by customers.`,
    productUrl: `https://ulta.com/product/${encodeURIComponent(p.productName.toLowerCase().replace(/ /g, '-'))}`,
    rating: Math.floor(Math.random() * 5) + 1
  }));

  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`✅ Ulta API server running at http://localhost:${PORT}/api/products/recommendations`);
});

