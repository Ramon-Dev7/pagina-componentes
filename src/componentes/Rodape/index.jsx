import estilos from './Rodape.module.css';

export default function Rodape() {
    return(
        <footer>
            <div className={estilos.container_rodape}>
                <h2>Desenvolvido com React</h2>
            </div>
        </footer>
    )
}