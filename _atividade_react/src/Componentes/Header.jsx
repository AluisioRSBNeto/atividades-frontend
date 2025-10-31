import './Header.css'
import foto from "../img/foto.png"

export function Header (){
    return(

        <>

        <div id="principal">
            <div class='imagens'>
                <img src={foto} alt='Foto de perfil' title='Foto de perfil'></img>
            </div>
            <div id="titulo">
                <h1 id="">Aluisio R. S. B. Neto</h1>
                <h2 id="">Front-End Developer</h2>
            </div>
            <p id="sobre-mim">
            Sou Designer Gráfico com mais de 10 anos de experiência em pré-impressão, tratamento de imagens. Tenho formação em Administração de Empresas e em Computação Gráfica, o que me permite unir visão técnica e estratégica ao lado criativo. Ao longo da minha carreira, desenvolvi habilidades com softwares como CorelDRAW, Illustrator, Photoshop, InDesign e Acrobat, além de vivência prática em impressão digital, diagramação e fechamento de arquivos em alta resolução.
            <p>Estou cursando Análise e Desenvolvimento de Sistemas essa nova etapa representa um grande passo na minha formação profissional, permitindo aprofundar meus conhecimentos em programação, desenvolvimento de software e soluções tecnológicas me preparando para atuar no mercado de TI com ainda mais competência e inovação.</p>
            <p>Sou uma pessoa organizada, comprometida e atenta aos detalhes, sempre focado em entregar resultados de qualidade e colaborar para o sucesso da equipe e da empresa.</p>
            </p>
        </div>

        </>
    );
}