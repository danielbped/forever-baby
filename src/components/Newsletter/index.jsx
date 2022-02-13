import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input';
import "../../style/newsletter.css";

const URL = 'https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState("");

  const handleWarning = (erro) => {
    setWarning(erro);
    setTimeout(() => setWarning(""), 7000);
  };

  const isDisabled = () => {
    return !email.match(/\w*@\w*\.\w{2,3}/)
  };
  
  const handleClick = async () => {
    await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      data: JSON.stringify({
        "email": email
      }),
      url: URL,
    }).then(({ data: { Mensagem, Erro } }) => handleWarning(Mensagem || Erro))
    setEmail("");
  }

  return (
    <div className="newsletter">
      <h1 className="newsletter__title">NEWLETTER FOREVER BABY</h1>
      <p className="newsletter__text">Cadastre-se agora para não perder nenhuma promoção</p>
      <Input
        name="newsletter-input"
        value={ email }
        placeholder="Digite aqui o seu melhor email"
        className="newsletter__bar"
        title="CADASTRAR"
        onChange={ setEmail }
        isDisabled={ isDisabled }
        onClick={ handleClick }
      />
      { warning && <p className="newsletter__warning">{ warning }</p> }
    </div>
  )
};

export default Newsletter;
