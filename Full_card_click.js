var liElements = document.querySelectorAll(".t-BadgeList-item");

liElements.forEach(function(liElement) {
  liElement.addEventListener("click", function() {
    var anchorElement = this.querySelector("a");
    if (anchorElement) {
      anchorElement.click();
    }
  });
});

// e no css

.t-BadgeList-item {
  cursor: pointer;
}
