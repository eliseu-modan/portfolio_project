import React from "react";
import "../pages/Contato.css";

export default (props) => (
  <div id="contato">
    <form
      id="formulario"
      action="https://api.staticforms.xyz/submit"
      method="post"
    >
      <input
        type="hidden"
        name="accessKey"
        value="e3e17c03-7c08-4186-ae75-b57aadb96c58"
      ></input>

      <div class="row">
        <div class="idcol">
          <label id="digitarNome" for="exampleFormControlInput1">
            Digite seu Nome :
          </label>
          <input
            id="placeNome"
            type="text"
            class="form-control"
            name="name"
            placeholder="Nome"
          ></input>
        </div>
      </div>
      <div class="form-group">
        <label id="digitarEmail" for="exampleFormControlInput1">
          Digite seu Email :
        </label>
        <input
          id="placeEmail"
          type="email"
          class="form-control"
          name="email"
          placeholder="nome@exemplo.com"
        ></input>
      </div>

      <div class="form-group">
        <label id="mensagem" for="exampleFormControlTextarea1">
          Me deixe uma Mensagem{" "}
        </label>
        <textarea
          id="areaTexto"
          class="form-control"
          rows="5"
          name="message"
        ></textarea>
      </div>
      <button className="submitFormulario" type="submit" value="Enviar Email">
        Enviar{" "}
      </button>
    </form>
  </div>
);

    <form id="formulario" action="https://api.staticforms.xyz/submit" method="post">
    <input type="hidden" name="accessKey" value="e3e17c03-7c08-4186-ae75-b57aadb96c58"></input>
    
  <div class="row">
    <div class="idcol">
    <label id="digitarNome" for="exampleFormControlInput1" >Digite seu Nome :</label>
      <input id="placeNome" type="text" class="form-control" name="name" placeholder="Nome"></input>
    </div>
   
  </div>
<div class="form-group">
  
    <label id="digitarEmail" for="exampleFormControlInput1">Digite seu Email :</label>
    <input id="placeEmail" type="email" class="form-control" name="email" placeholder="nome@exemplo.com"></input>
  </div>
  

  <div class="form-group">
    <label id="mensagem" for="exampleFormControlTextarea1">Me deixe uma Mensagem </label>
    <textarea id="areaTexto" class="form-control" rows="5" name="message"></textarea>
  </div>
  <button  className="submitFormulario" type="submit" value="Enviar Email">Enviar </button>
</form>

