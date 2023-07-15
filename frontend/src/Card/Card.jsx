import { Produtos } from "./CardStyled";

export function Card({ product, onSelect }) {
    const statusClass = product.statusVenda;

    const handleClick = () => {
        onSelect(product);
    };

    return (
        <Produtos onClick={handleClick}>
            <td>{product.codigoPDV}</td>
            <td>{product.nome}</td>
            <td>{product.precoCusto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td>{product.precoVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td>{product.qtdEstoque}</td>
            <td>{product.qtdEstoqueMin}</td>
            <td>{product.medida}</td>
            <td className={statusClass.toString()}>
                {product.statusVenda ? "Ativo" : "Inativo"}
            </td>
        </Produtos>
    );
}
export function CardProduto({ produtoz}) {
    return (
        <Produtos>
            <td>{produtoz.codigoPDV}</td>
            <td>{produtoz.nome}</td>
            <td>{produtoz.qtdEstoque}</td>
        </Produtos>
    );
}

export function CardClient({ client, onSelect }) {
    const handleClick = () => {
        onSelect(client);
    };

    return (
        <Produtos onClick={handleClick}>
            <td>{client.nome}</td>
            <td>{client.telefone}</td>
            <td>{client.email}</td>
            <td>{client.divida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </Produtos>
    );
}
export function CardCaixa({ caixa }) {
    return (
        <Produtos>
            <td>{caixa.codigoPDV}</td>
            <td>{caixa.nome}</td>
            <td>{caixa.quantidade}</td>
            <td>{caixa.precoVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td>{caixa.precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        </Produtos>
    );
}
export function CardFuncionario ({funcionario, onSelect}){
    const handleClick = () => {
        onSelect(funcionario);
    };

    return(
        <Produtos onClick={handleClick}>
            <td>{funcionario.nomeCompleto}</td>
            <td>{funcionario.username}</td>
            <td>{funcionario.telefone}</td>
            <td>{funcionario.email}</td>
            <td>{funcionario.dataContratacao}</td>
        </Produtos>
    );
}
