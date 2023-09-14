$.lik = (STATUSS) => {
  var selectElement = document.getElementById("P1_STATUS1");
  var novoValor = STATUSS;

  for (var i = 0; i < selectElement.options.length; i++) {
    var option = selectElement.options[i];

    if (option.value === novoValor) {
      option.selected = true;
      break;
    }
  }

  apex.region("STATUS").refresh();
}

javascript: $.lik("2");
