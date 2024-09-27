var livros = [
    ['../images/livros/harry potter 2.jpg','Harry Potter','Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Ron e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola, pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir.'],
    ['../images/livros/girlRed.jpg','Girl Red','Do autor do best-seller nacional Alice, chega uma versão pós-apocalíptica do eterno clássico "Chapeuzinho Vermelho"... sobre uma mulher que não é tão indefesa quanto parece. Não é seguro para ninguém sozinho na floresta. Existem predadores que aparecem à noite: criaturas e coiotes, cobras e lobos. Mas a mulher de casaco vermelho não tem escolha. Nunca mais desde que a crise chegou, dizimou a população e enviou aqueles que sobreviveram para fugir para campos de quarentena que servem como criadouros de morte, destruição e doenças. Ela é apenas uma mulher tentando não ser morta em um mundo que não se parece em nada com aquele em que ela cresceu, aquele que era perfeitamente são, normal e chato até três meses atrás. Existem ameaças piores na floresta do que as coisas que perseguem suas presas à noite. Às vezes, há homens. Homens com desejos sombrios, vontades fracas e más intenções. Homens uniformizados com informações confidenciais, segredos mortais e ordens implacáveis. E às vezes, apenas às vezes, há algo pior do que todas essas pessoas horríveis e feras cruéis juntas. Red não gosta de se considerar uma assassina, mas ela não está disposta a se deixar devorar só porque é uma mulher sozinha na floresta....'],
    ['../images/livros/pijamalistrado.jpg','Pijama Listrado','Bruno tem nove anos e não sabe nada sobre o Holocausto e a Solução Final contra os judeus. Também não faz idéia que seu país está em guerra com boa parte da Europa, e muito menos que sua família está envolvida no conflito. Na verdade, Bruno sabe apenas que foi obrigado a abandonar a espaçosa casa em que vivia em Berlim e a mudar-se para uma região desolada, onde ele não tem ninguém para brincar nem nada para fazer. Da janela do quarto, Bruno pode ver uma cerca, e para além dela centenas de pessoas de pijama, que sempre o deixam com frio na barriga.'],
    ['../images/livros/divergente.jpg','Divergente','Na futurística cidade de Chicago, ao completar 16 anos, Beatrice precisa escolher entre as diferentes facções em que a cidade está dividida. Cada uma representa um valor diferente e, ao contrário de sua família, a jovem opta pela facção dos destemidos, a Audácia. Ela então se torna Tris e inicia uma jornada para afastar seus medos e descobrir quem realmente é. Durante essa jornada, acaba conhecendo o jovem Quatro, um rapaz experiente que tem o dom de intrigá-la e de encantá-la ao mesmo tempo.'],
    ['../images/livros/percy1.jpg','Percy Jackson','O autor conjuga lendas da mitologia grega com aventuras no século XXI. Nelas, os deuses do Olimpo continuam vivos, ainda se apaixonam por mortais e geram filhos metade deuses, metade humanos, como os heróis da Grécia antiga. Marcados pelo destino, eles dificilmente passam da adolescência. Poucos conseguem descobrir sua identidade. O garoto-problema Percy Jackson é um deles. Tem experiências estranhas em que deuses e monstros mitológicos parecem saltar das páginas dos livros direto para a sua vida.'],
    ['../images/livros/percy2.jpg','Percy Jackson 2','The Sea of Monsters é o segundo livro da série Percy Jackson & os Olimpianos baseado em mitologia grega de Rick Riordan. Ela então se torna Tris e inicia uma jornada para afastar seus medos e descobrir quem realmente é. Durante essa jornada, acaba conhecendo o jovem Quatro, um rapaz experiente que tem o dom de intrigá-la e de encantá-la ao mesmo tempo.']
]

function atualizarBiblioteca(){
    document.querySelector("#bibliotecaLivros").innerHTML = ``
    livros.forEach(cadaLivro =>{
        document.querySelector("#bibliotecaLivros").innerHTML += `
        <div class="books"> 
        <img src="${cadaLivro[0]}" alt="" class="booksImg">
        <div class="booksDesc">
            <h2 class="booksName">${cadaLivro[1]}</h2>
            <p class="booksSinopse">
                ${cadaLivro[2]}
            </p>
        </div>
    </div>
       
    `
    
     });  

}


function manipularLivros(){
    // push adicionar ultimo elemento
    livros.push (["#","Game Of Thrones", "lorem"])
    // unshift adiciona primeiro
    livros.unshift(["#","Independece Day","lorem"])
    // pop deleta ultimo
    livros.pop()
    // shift deleta primeiro
    livros.shift()

    // splice com terceiro atributo - substituindo o valor
    livros.splice(1,1,["#","Independence day", "lorem"])
    // splice com terceiro atributo - 0 no delete - adicionamos um valor
    livros.splice(1,0,["#","Vingadores", "lorem"])
    // splice sem terceiro atributo - deletamos o valor
    livros.splice(2,1)
}

manipularLivros()
atualizarBiblioteca()