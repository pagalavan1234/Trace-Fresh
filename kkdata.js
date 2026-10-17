/* ===== SETTINGS: change these ===== */
const CONTACT_EMAIL = "hello@example.com"; // replace with your real email

/* ===== SAMPLE DATA (demonstration only) =====
   Replace these with real records once a backend is connected. */
const PRODUCTS = [
  {name:"Tomatoes", cat:"Vegetables", variety:"Desi",     price:"₹40",  unit:"per kg",     farmer:"FARM-0001", color:"#D8432F", emoji:"🍅"},
  {name:"Potatoes", cat:"Vegetables", variety:"Local",    price:"₹30",  unit:"per kg",     farmer:"FARM-0002", color:"#C9A46A", emoji:"🥔"},
  {name:"Onions",   cat:"Vegetables", variety:"Red",      price:"₹35",  unit:"per kg",     farmer:"FARM-0002", color:"#8C3B8F", emoji:"🧅"},
  {name:"Spinach",  cat:"Vegetables", variety:"Leafy",    price:"₹25",  unit:"per bunch",  farmer:"FARM-0003", color:"#4E9A3A", emoji:"🥬"},
  {name:"Mangoes",  cat:"Fruits",     variety:"Alphonso", price:"₹250", unit:"per kg",     farmer:"FARM-0004", color:"#F2B531", emoji:"🥭"},
  {name:"Bananas",  cat:"Fruits",     variety:"Robusta",  price:"₹45",  unit:"per dozen",  farmer:"FARM-0004", color:"#E8C832", emoji:"🍌"},
  {name:"Milk",     cat:"Dairy",      variety:"Cow",      price:"₹56",  unit:"per litre",  farmer:"FARM-0005", color:"#9CC3E6", emoji:"🥛"},
  {name:"Paneer",   cat:"Dairy",      variety:"Fresh",    price:"₹320", unit:"per kg",     farmer:"FARM-0005", color:"#F5EFD9", emoji:"🧀"}
];

const BATCHES = {
  "BATCH-2026-0001": {
    product:"Tomatoes", farmer:"FARM-0001", origin:"Demonstration farm", qty:"40 kg",
    events:[
      {t:"Batch registered",       when:"10 Oct 2026", src:"Farmer entered"},
      {t:"Harvest recorded",       when:"11 Oct 2026", src:"Farmer entered"},
      {t:"Collected for dispatch", when:"12 Oct 2026", src:"Manually entered"},
      {t:"Transport GPS points",   when:null,          src:"Not recorded"},
      {t:"Delivered to school",    when:null,          src:"Not recorded"}
    ]
  },
  "BATCH-2026-0002": {
    product:"Milk", farmer:"FARM-0005", origin:"Demonstration dairy", qty:"100 litres",
    events:[
      {t:"Batch registered", when:"13 Oct 2026", src:"Farmer entered"},
      {t:"Dispatched",       when:"14 Oct 2026", src:"Manually entered"},
      {t:"Delivered",        when:"14 Oct 2026", src:"Manually entered"}
    ]
  }
};
