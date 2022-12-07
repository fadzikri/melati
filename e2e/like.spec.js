Feature("Like Restaurant");

Scenario("Data restoran kosong", ({ I }) => {
  I.amOnPage("/#/favourite");

  I.seeElement("restaurant-card");
  I.see("Memuat...", ".no-image");
});

Scenario("Pilih satu restoran", ({ I }) => {
  I.amOnPage("/");

  I.wait(3);

  I.seeElement("restaurant-card");
  I.seeElement("#rqdv5juczeskfw1e867");
  I.see("Nama : Melting Pot", ".name-restaurant");
  I.click("#rqdv5juczeskfw1e867");
});

Scenario("Sukai restoran dan lihat hasil restoran disukai", ({ I }) => {
  I.amOnPage("/#/detail/rqdv5juczeskfw1e867");

  I.wait(3);

  I.seeElement("restaurant-detail");
  I.see("Rating : 4.2 / 5.0", ".rating-restaurant");

  I.seeElement("svg", { class: "feather-heart-o" });
  I.click("restaurant-like");
  I.seeElement("svg", { class: "feather-heart-x" });

  I.seeElement("#favorite-li");
  I.click("#favorite-li");

  I.seeElement("#rqdv5juczeskfw1e867");
  I.see("Nama : Melting Pot", ".name-restaurant");
});
