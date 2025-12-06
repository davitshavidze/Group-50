import { set } from "lodash";
import React, { useState, useMemo } from "react";
function App() {
  const [inpValue, setInpValue] = useState("");

  const products = [
    "Smartphone X200",
    "Wireless Earbuds Pro",
    "Noise-Cancelling Headphones",
    "4K Smart TV 55",
    "LED Desk Lamp",
    "Bluetooth Speaker Mini",
    "Portable Power Bank 20000mAh",
    "USB-C Fast Charger",
    "Gaming Laptop 16GB",
    "Mechanical Keyboard",
    "Wireless Mouse",
    "Gaming Headset",
    "Smartwatch Series 6",
    "Fitness Tracker Band",
    "Action Camera 4K",
    "Mirrorless Camera Body",
    "Tripod Stand",
    "DSLR Lens 50mm",
    "External SSD 1TB",
    "Wireless Router AX3000",
    "Smart Home Hub",
    "Wi-Fi Smart Plug",
    "Smart Bulb RGB",
    "Robot Vacuum Cleaner",
    "Air Purifier HEPA",
    "Dehumidifier 20L",
    "Portable Air Conditioner",
    "Steam Iron",
    "Automatic Coffee Maker",
    "Espresso Machine",
    "Electric Kettle",
    "Toaster Oven",
    "Blender Pro",
    "Food Processor",
    "Stand Mixer",
    "Slow Cooker",
    "Pressure Cooker",
    "Rice Cooker",
    "Induction Cooktop",
    "Cast Iron Skillet",
    "Nonstick Frying Pan",
    "Chef's Knife 8",
    "Cutting Board Bamboo",
    "Glass Food Storage Set",
    "Reusable Silicone Bags",
    "Water Bottle Stainless",
    "Insulated Travel Mug",
    "Thermos Flask 1L",
    "Yogurt Maker",
    "Electric Grill",
    "BBQ Smoker",
    "Patio Heater",
    "Garden Hose 30m",
    "Pruning Shears",
    "Lawn Mower Electric",
    "Leaf Blower",
    "Portable Generator 3kW",
    "Toolbox Set 100pc",
    "Cordless Drill",
    "Circular Saw",
    "Soldering Station",
    "Measuring Tape 8m",
    "Level Laser",
    "Safety Glasses",
    "Work Gloves Leather",
    "Smart Door Lock",
    "Video Doorbell",
    "Indoor Security Camera",
    "Baby Monitor HD",
    "Stroller Urban Pro",
    "Convertible Car Seat",
    "Diaper Bag Backpack",
    "Baby Bottle Sterilizer",
    "Breast Pump Electric",
    "Playmat Foam",
    "Educational Wooden Blocks",
    "Remote Control Car",
    "Building Kit 1000pc",
    "Puzzle 2000pc",
    "Board Game Strategy",
    "Classic Chess Set",
    "Acoustic Guitar",
    "Digital Piano 61-key",
    "Studio Microphone",
    "DJ Controller",
    "Portable PA System",
    "Yoga Mat Eco",
    "Dumbbell Set 20kg",
    "Adjustable Kettlebell",
    "Treadmill Foldable",
    "Exercise Bike",
    "Running Shoes",
    "Hiking Backpack 40L",
    "Sleeping Bag -5°C",
    "Tent 3-Person",
    "Camping Stove",
    "Fishing Rod Spinning",
    "Kayak Inflatable",
    "Helmet Bike",
    "Cycling Gloves",
    "Sunglasses Polarized",
    "Leather Wallet",
    "Crossbody Bag",
    "Men's Bomber Jacket",
    "Women's Trench Coat",
    "Eco Cotton T-Shirt",
    "Denim Jeans",
    "Luxury Watch",
    "Gold Hoop Earrings",
    "Perfume Eau de Parfum",
    "Skincare Moisturizer 50ml",
    "Sunscreen SPF50",
    "Vitamins Multivitamin",
    "First Aid Kit",
    "Prescription Pill Organizer",
    "Pet Food Chicken 5kg",
    "Cat Scratching Post",
    "Dog Leash Retractable",
  ];

  const filteredProd = useMemo(() => {
    return products.filter((item) =>
      item.toLowerCase().includes(inpValue.toLowerCase())
    );
  }, [inpValue]);

  return (
    <>
      <input
        type="text"
        placeholder="Search product..."
        value={inpValue}
        onChange={(e) => {
          setInpValue(e.target.value);
          console.log(inpValue);
        }}
      />

      <ul>
        {
         filteredProd.map((prod, index) => (
          <li key={index}>{prod}</li>
         ))
        }
      </ul>
    </>
  );
}

export default App;
