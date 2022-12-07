Feature("Dislike Restaurant");

Scenario("Menyukai restoran dan membatalkannya", ({ I }) => {
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
  I.click("#rqdv5juczeskfw1e867");

  I.seeElement("svg", { class: "feather-heart-x" });
  I.click("restaurant-like");
  I.seeElement("svg", { class: "feather-heart-o" });

  I.seeElement("#favorite-li");
  I.click("#favorite-li");

  I.seeElement("restaurant-card");
  I.see("Memuat...", ".no-image");
});
