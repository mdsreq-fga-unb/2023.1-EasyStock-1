import React from "react";
import { TodoModal } from "./EstoqueModalStyled";
import { useState } from "react";
import blogFetch from "../../services/postProduto";


export default function EstoqueModal({ isOpen, onClose }) {
    const [nome, setNome] = useState();
    const [precoCusto, setPrecoCusto] = useState();
    const [precoVenda, setPrecoVenda] = useState();
    const [qtdEstoque, setQtdEstoque] = useState();
    const [qtdEstoqueMin, setQtdEstoqueMin] = useState();
    const [medida, setMedida] = useState();

    const createForm = async (e)  => {
        e.preventDefault();

        const post = {
            nome,
            precoCusto,
            precoVenda,
            qtdEstoque,
            qtdEstoqueMin,
            medida,
        };

        await blogFetch.post("http://localhost:8000/produto", {
            body: post,
        })
    };

    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Produtos</h1>
                        <form onSubmit={(e) => createForm(e)}>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome"
                                    required
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="precoCusto"
                                    placeholder="Preço custo"
                                    required
                                    onChange={(e) =>
                                        setPrecoCusto(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="precoVenda"
                                    placeholder="Preço venda"
                                    required
                                    onChange={(e) =>
                                        setPrecoVenda(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    id="qtdEstoque"
                                    placeholder="Quantidade"
                                    required
                                    onChange={(e) =>
                                        setQtdEstoque(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    id="qtdEstoqueMin"
                                    placeholder="Quantidade mínima"
                                    required
                                    onChange={(e) =>
                                        setQtdEstoqueMin(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <label htmlFor="medida">Medida:</label>
                                <select
                                    id="medida"
                                    onChange={(e) => setMedida(e.target.value)}
                                >
                                    <option value="UN">UN</option>
                                    <option value="KG">KG</option>
                                </select>
                            </div>
                            <input
                                type="submit"
                                name="Adicionar Produto"
                                id="enviar"
                                className="buttons"
                            />
                        </form>
                        <div className="button-container">
                            {/* <button className="button-modal">Adicionar</button> */}
                            <button className="button-modalc" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </TodoModal>
        );
    }
    return null;
}
