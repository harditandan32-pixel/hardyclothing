const products = [
  {
    name: "Your T-Shirt",
    category: "T-Shirts",
    price: "₹999",
    size: "M / L / XL",
    image: "",
    link: "#"
  },
  {
    name: "Your Shirt",
    category: "Shirts",
    price: "₹1,499",
    size: "M / L / XL",
    image: "",
    link: "#"
  },
  {
    name: "Your Hoodie",
    category: "Hoodies",
    price: "₹1,999",
    size: "M / L / XL",
    image: "",
    link: "#"
  },
  {
    name: "Your Pants",
    category: "Pants",
    price: "₹1,299",
    size: "28 / 30 / 32",
    image: "",
    link: "#"
  }
];

const grid = document.getElementById("products");
const search = document.getElementById("search");
const category = document.getElementById("category");

function render() {
  const query = search.value.toLowerCase().trim();
  const selectedCategory = category.value;

  const filtered = products.filter(product => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty">No products found.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <article class="product">

      <div class="product-img">
        ${
          product.image
            ? `<img src="${product.image}"
                 alt="${product.name}"
                 style="width:100%;height:100%;object-fit:cover">`
            : `ADD<br>PHOTO`
        }
      </div>

      <div class="product-info">

        <h3>${product.name}</h3>

        <div class="meta">
          ${product.category} · ${product.size} · ${product.price}
        </div>

        <a
          class="buy"
          href="${product.link}"
          target="_blank"
          rel="noopener"
        >
          BUY NOW ↗
        </a>

      </div>

    </article>
  `).join("");
}

search.addEventListener("input", render);
category.addEventListener("change", render);

render();
