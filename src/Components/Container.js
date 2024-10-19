import './Container.css';

function Container() {

    function clicou() {
        alert("Enviado!!");
    }

    return (
        <>
    <section>
        <div className='sessao01'>
            <div className='container'>
                <div className='imagem01'> </div>
            </div>
            <div className='textos'>
                <h1 className='titulo'>O Tênis que Eleva Seu Estilo e Conforto!</h1>
                <h3 className='subtitulo'>Conforto excepcional para o seu dia a dia, seja na corrida ou na cidade</h3>


                <a href="#form" class="button">Compre Agora</a>
            </div>
        </div>
    
        <div  className='sessao02'>
            <div className='quadrados'>
                <div className='q1'> 
                    <h3 style={{color:'#00797D', fontFamily:'inter' }}> CONFORTO</h3>
                    <p className='subtitulo'> Tecnologia de amortecimento para suporte durante todo o dia </p> 
                </div>
                <div className='q2'> 
                    <h3 style={{color:'#00797D', fontFamily:'inter'}} >DURABILIDADE</h3>
                    <p className='subtitulo'> Materiais de alta qualidade que resistem ao desgaste</p> 
                </div>
                <div className='q3'> 
                    <h3 style={{color:'#00797D', fontFamily:'inter' }} >ESTILO</h3>
                    <p className='subtitulo'> Design moderno que combina com qualquer look </p> 
                </div>
            </div>
            <div class="container">
                <div class="imagem02"></div>
                <div class="imagem02"></div>
            </div>
        </div>
    </section> 

    <section id='form'>
        <div className='sessao03'>
            <div className='textos'>
                <h2 className='titulo'>Transforme seu look com um clique!</h2>
                <p className="subtitulo" style={{ paddingBottom: '40px' }}> Preencha o formulário e nossa equipe estará pronta para ajudar você a finalizar sua compra. </p>

            </div>

            <div className='form'>
                <form>
                    <div>
                        <label for="nome">Nome Completo:</label> <br></br> <br></br>
                        <input type="text" id="nome" name="nome" required />
                    </div>
                    <div>
                        <label for="email">Email:</label> <br></br> <br></br>
                        <input type="email" id="email" name="email" required />
                    </div> <br></br>
                    <label>
                        <input type="checkbox" name="opcao1" value="opcao1" className="checkbox-input" />
                        <p>Aceito receber novidades pelo email cadastrado</p>
                    </label>
                    <div> 
                        <button onClick={clicou} type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
   
        </>
    );
}

export default Container;
