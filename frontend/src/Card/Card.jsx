import { Produtos } from "./CardStyled";

export function Card({ product }) {
    const statusClass = product.statusVenda;

    return (
        <Produtos>
            <td>{product.nome}</td>
            <td>{product.precoCusto}</td>
            <td>{product.precoVenda}</td>
            <td>{product.qtdEstoque}</td>
            <td>{product.qtdEstoqueMin}</td>
            <td>{product.medida}</td>
            <td>{product.codigoPDV}</td>
            <td className={statusClass}>{product.statusVenda ? "Ativo" : "Inativo"}</td>
        </Produtos>
    );
}

export function CardClient({client}){
    return(
        <Produtos>
            <td>{client.cliente}</td>
            <td>{client.telefone}</td>
            <td>{client.email}</td>
            <td>{client.divida}</td>
            <td >{client.statusDivida}</td>
        </Produtos>
    )
}
export function CardCaixa({caixa}){
    return(
        <Produtos>
            <td>{caixa.itemP}</td>
            <td>{caixa.qtdEstoqueP}</td>
            <td>{caixa.nomeP}</td>
            <td>{caixa.precoUniP}</td>
            <td>{caixa.precoVendaP}</td>
        </Produtos>
    )
}
