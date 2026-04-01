function gerarBoletim() {

    let alunos = [
        [7, 8, 6],
        [5, 4, 6],
        [9, 9, 10],
        [6, 6, 6],
        [10, 8, 9]
    ];

    let resultadoDiv = document.getElementById("resultado");
    let extrasDiv = document.getElementById("extras");

    resultadoDiv.innerHTML = "";
    extrasDiv.innerHTML = "";

    let totalAprovados = 0;
    let maiorMedia = 0;
    let menorMedia = 10;

    for (let i = 0; i < alunos.length; i++) {

        let notas = alunos[i];
        let soma = 0;
        let contador = 0;

        while (contador < notas.length) {
            soma += notas[contador];
            contador++;
        }

        let media = soma / notas.length;
        let classificacao = "";
        let classeCSS = "";
        let emoji = "";

        if (media >= 9) {
            classificacao = "Excelente";
            classeCSS = "excelente";
            emoji = "🌟";
            totalAprovados++;
        } else if (media >= 7) {
            classificacao = "Bom";
            classeCSS = "bom";
            emoji = "👍";
            totalAprovados++;
        } else if (media >= 6) {
            classificacao = "Aprovado";
            classeCSS = "aprovado";
            emoji = "✅";
            totalAprovados++;
        } else {
            classificacao = "Reprovado";
            classeCSS = "reprovado";
            emoji = "❌";
        }

        if (media > maiorMedia) {
            maiorMedia = media;
        }

        if (media < menorMedia) {
            menorMedia = media;
        }

        resultadoDiv.innerHTML += `
            <p class="${classeCSS} fade-in">
                📚 Aluno ${i + 1}: Média ${media.toFixed(1)} → ${classificacao} ${emoji}
            </p>
        `;
    }

    let mensagemFinal = "";

    if (totalAprovados === alunos.length) {
        mensagemFinal = "🎉 Todos foram aprovados!";
    } else if (totalAprovados === 0) {
        mensagemFinal = "😬 Nenhum aluno foi aprovado...";
    } else {
        mensagemFinal = "📊 Resultado geral calculado!";
    }

    extrasDiv.innerHTML = `
        <p>✨ <strong>Total de aprovados:</strong> ${totalAprovados}</p>
        <p>🏆 <strong>Maior média:</strong> ${maiorMedia.toFixed(1)}</p>
        <p>📉 <strong>Menor média:</strong> ${menorMedia.toFixed(1)}</p>
        <p><strong>${mensagemFinal}</strong></p>
    `;
}