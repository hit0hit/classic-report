javascript: var selectElement = document.getElementById("P1_STATUS1"); var novoValor = "4";  for (var i = 0; i < selectElement.options.length; i++) {   var option = selectElement.options[i];   if (option.value === novoValor) {     option.selected = true;     break;   } }; apex.region("STATUS").refresh();