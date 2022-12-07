Feature("Review Restaurant");

Scenario("Mencari restoran", ({ I }) => {
  I.amOnPage("/");

  I.wait(3);

  I.seeElement("restaurant-card");
  I.seeElement("#rqdv5juczeskfw1e867");
  I.see("Nama : Melting Pot", ".name-restaurant");
  I.click("#rqdv5juczeskfw1e867");
});

Scenario("Memberikan review", async ({ I }) => {
  I.amOnPage("/#/detail/rqdv5juczeskfw1e867");

  I.wait(3);

  I.seeElement("restaurant-detail");
  I.see("Rating : 4.2 / 5.0", ".rating-restaurant");

  I.seeElement(".input-review");

  I.seeElement(".input-name");
  I.fillField("#input-name", "E2E");

  I.seeElement("#input-text");
  I.fillField("#input-text", "Testing Lewat E2E");

  I.seeElement(".input-btn");
  I.click(".input-btn");

  I.seeElement(locate(".review").last());
  const nameReview = await I.grabTextFrom(
    locate(".review").last().find(".review-name")
  );
  const textReview = await I.grabTextFrom(
    locate(".review").last().find(".review-text")
  );
  console.log(nameReview);
  console.log(textReview);
});
