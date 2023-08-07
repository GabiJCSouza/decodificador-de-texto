const botaoCriptografar = document.getElementById('botao__criptografar');
const botaoDescriptografar = document.getElementById('botao__descriptografar');
const botaoCopiar = document.getElementById('botao__copiar');
const h1Element = document.getElementById('mostra__resultado');

botaoCriptografar.onclick = function criptografar() {
    const texto = document.getElementById('texto').value;
    const textoArray = texto.split('');
    const textoArrayCript = [];
    const mostraCirpt = document.getElementById('mostra__resultado');

    for (let i=0; i<textoArray.length; i++) {
        if (textoArray[i]=== 'a') {
            textoArrayCript.push('ai')
        } else if (textoArray[i] === 'e') {
            textoArrayCript.push('enter')
        } else if (textoArray[i] === 'i') {
            textoArrayCript.push('imes')
        } else if (textoArray[i] === 'o') {
            textoArrayCript.push('ober')
        } else if (textoArray[i] === 'u') {
            textoArrayCript.push('ufat')
        } else {
            textoArrayCript.push(textoArray[i])
        }
    }

    mostraCirpt.innerHTML = textoArrayCript.join('');
}

botaoDescriptografar.onclick = function descriptografar() {
    const texto = document.getElementById('texto').value;
    const textoDescript = texto.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g, 'i').replace(/ober/g,'o').replace(/u/g,'u');
    const mostraDescript = document.getElementById('mostra__resultado');

    mostraDescript.innerHTML = textoDescript
}

botaoCopiar.addEventListener('click', () => {
  const textoParaCopiar = h1Element.innerText;
  
  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      alert('Texto copiado com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao copiar o texto:', err);
    });
});