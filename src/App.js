import React from 'react';




function App() {
  return (
    <>
		<div className="container">
			<div className="jumbotron">
				<h1>CALCULADORA</h1>
			</div>

			<hr />

			<div className="row">
				<div className="col-md-4">
					<input id="numberOne" type="text" className="form-control" placeholder="Digite um número" />
				</div>

				<div className="col-md-4">
					<select className="form-control" id="aritmetica">
						<option value="">--Selecione uma operação</option>
						<option value="1">Subtração</option>
						<option value="2">Adição</option>
						<option value="3">Multiplicação</option>
						<option value="4">Divisão</option>
					</select>
				</div>

				<div className="col-md-4">
					<input id="numberTwo" type="text" class="form-control" placeholder="Digite um número"/>
				</div>
			</div>

			<hr />

			<div className="row">
				<div className="col-md-4"></div>

				<div className="col-md-4"></div>

				<div className="col-md-4">
					<button type="button" class="btn btn-lg btn-primary pull-right" onclick="calcular()">Calcular</button>
				</div>
			</div>

			<hr />

			<div className="well">
				Resultado: <input id="result" type="text" class="form-control" readonly/>
			</div>
		</div>
    </>
  );
}

export default App;
