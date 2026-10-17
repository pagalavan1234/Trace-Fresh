/* SAMPLE DATA ONLY. Nothing here describes real farms, suppliers, prices or deliveries. */
window.TF = {
  produce: [
    { name: "Spinach", category: "Leafy greens" },
    { name: "Lettuce", category: "Leafy greens" },
    { name: "Coriander", category: "Herbs" },
    { name: "Mint", category: "Herbs" },
    { name: "Carrot", category: "Root vegetables" },
    { name: "Beetroot", category: "Root vegetables" },
    { name: "Onion", category: "Root vegetables" },
    { name: "Tomato", category: "Fruiting vegetables" },
    { name: "Cucumber", category: "Fruiting vegetables" },
    { name: "Brinjal (aubergine)", category: "Fruiting vegetables" }
  ],
  batches: {
    "TF-DEMO-001": {
      produce: "Spinach",
      events: [
        { stage: "Harvested", date: "2026-01-10", note: "Sample Farm A (fictional)" },
        { stage: "Packed", date: "2026-01-10", note: "Sample packing point (fictional)" },
        { stage: "In transit", date: "2026-01-11", note: "Sample transport entry" },
        { stage: "Received", date: "2026-01-11", note: "Sample Shop X (fictional)" }
      ]
    },
    "TF-DEMO-002": {
      produce: "Carrot",
      events: [
        { stage: "Harvested", date: "2026-01-12", note: "Sample Farm B (fictional)" },
        { stage: "Packed", date: "2026-01-13", note: "Sample packing point (fictional)" },
        { stage: "In transit", date: "2026-01-13", note: "Sample transport entry" },
        { stage: "Received", date: "2026-01-14", note: "Sample Shop X (fictional)" }
      ]
    },
    "TF-DEMO-003": {
      produce: "Tomato",
      events: [
        { stage: "Harvested", date: "2026-01-15", note: "Sample Farm C (fictional)" },
        { stage: "Packed", date: "2026-01-15", note: "Sample packing point (fictional). This sample record has no later steps yet." }
      ]
    }
  }
};
