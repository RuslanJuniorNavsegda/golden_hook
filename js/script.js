// Открытие модального окна с информацией о компании
function openModal() {
  document.getElementById("aboutModal").classList.remove("hidden");
}

// Закрытие модального окна
function closeModal() {
  document.getElementById("aboutModal").classList.add("hidden");
}

// Закрытие модального окна при нажатии за его пределами
window.onclick = function(event) {
  const modal = document.getElementById("aboutModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Закрытие модального окна при нажатии на клавишу ESC
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Модальное окно для информации о товаре
function openProductModal(productName, productPrice, productDescription) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button" onclick="closeProductModal()">&times;</span>
      <h2>${productName}</h2>
      <p>Цена: ${productPrice}</p>
      <p>${productDescription}</p>
    </div>
  `;
  document.body.appendChild(modal);

  // Закрытие окна при нажатии за пределами окна
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeProductModal();
    }
  });
}

// Закрытие окна с товаром
function closeProductModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.remove();
  }
}

// Пример инициализации товаров (можно позже связать с базой данных)
document.addEventListener("DOMContentLoaded", function() {
  const products = [
    {
      name: "Товар 1",
      price: "500 руб",
      description: "Описание товара 1"
    },
    {
      name: "Товар 2",
      price: "700 руб",
      description: "Описание товара 2"
    }
  ];

  // Назначение кнопкам функции открытия окна товара
  const viewButtons = document.querySelectorAll(".view-button");
  viewButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = products[index];
      openProductModal(product.name, product.price, product.description);
    });
  });
});
