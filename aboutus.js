document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".readmore").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        
        var contentDiv = document.querySelector(".content p");
        var button = document.querySelector(".readmore");
        if (button.textContent === "READ MORE") {
            contentDiv.innerHTML = "<p>Additionally, coco lemon juice is praised for its potential health benefits. Coconut water is rich in electrolytes like potassium and magnesium, which can help replenish the body's hydration levels and support overall well-being. Meanwhile, lemon juice is packed with vitamin C, known for its antioxidant properties and immune-boosting effects. Together, these ingredients create a beverage that not only tastes great but also provides a refreshing way to stay hydrated while potentially supporting your health. Whether enjoyed on its own or as a mixer in cocktails and mocktails, coco lemon juice is sure to delight the taste buds and invigorate the senses.</p>";
            button.textContent = "READ LESS";
        } else {
            contentDiv.innerHTML = "<p>People sell freshly prepared lemonade to onlookers from a tiny, improvised setup that is usually outside at a lemonade stand. Lemonade is usually served from pitchers and cups, and occasionally extras like snacks or napkins are included. The lemonade is usually presented on a table or stand. Signs promoting the lemonade and prices are frequently adorned with vibrant graphics at the stand. While they can also be found at festivals, parks, or on busy streets, lemonade stands are typically operated by kids as a summertime business venture.</p>";
            button.textContent = "READ MORE";
        }
    });
});

