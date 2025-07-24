const pigs = [
  {
    id: 1,
    name: "Malboro",
    gender: "male",
    color: "white",
    price: 55,
    img: "https://placeguinea.com/150x150",
  },
  {
    id: 2,
    name: "Nuclear",
    gender: "Male",
    color: "brown",
    price: 23,
    img: "https://placeguinea.com/150x150",
  },
  {
    id: 3,
    name: "Broton",
    gender: "female",
    color: "black",
    price: 45,
    img: "https://placeguinea.com/150x150",
  },
];

const container = document.getElementById("guineaPigContainer");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function render(pigsToRender) {
  container.innerHTML = pigsToRender
    .map(
      (pig) => `
    <div class="card">
      <img src="${pig.img}" alt="${pig.name}" />
      <h3>${pig.name}</h3>
      <p>Gender: ${pig.gender}</p>
      <p>Color: ${pig.color}</p>
      <p>Price: ${pig.price} ₾</p>
    </div>`
    )
    .join("");
}

function filterPigs() {
  const selectedGender = [
    ...document.querySelectorAll("input[name='gender']:checked"),
  ].map((i) => i.value);
  const selectedColor = [
    ...document.querySelectorAll("input[name='color']:checked"),
  ].map((i) => i.value);
  const maxPrice = +priceRange.value;

  const filtered = pigs.filter((p) => {
    return (
      (selectedGender.length === 0 || selectedGender.includes(p.gender)) &&
      (selectedColor.length === 0 || selectedColor.includes(p.color)) &&
      p.price <= maxPrice
    );
  });

  render(filtered);
}

checkboxes.forEach((cb) => cb.addEventListener("change", filterPigs));
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  filterPigs();
});

render(pigs);
