const Header = () => {
	return (
		<div>
			<h2>Quick currency converter</h2>
			<p>Use it for being oriented. It's not reliable table</p>
		</div>
	)	
}

class CurrencyConverter extends React.Component {
	render() { 		/* każdy z takich komponentów rederuje 'div' z linią tekstu
						składającą się z czterech elementów: */
		return (
			<div>
				<strong>{this.props.value}</strong> {this.props.from} is: <strong>{(this.props.value * this.props.rate).toFixed(2)}</strong> {this.props.to}
			</div> 		/* 'wartość' - przeliczana 'z' waluty - wartość*przelicznik - 'na' walutę */
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="currencyLines">
					<CurrencyConverter 
					from="EUR" 
					to="USD" 
					rate={1.11} 
					value={100} />
		
					<CurrencyConverter 
					from="EUR" 
					to="PLN" 
					rate={4.33} 
					value={100} />
		
					<CurrencyConverter 
					from="USD" 
					to="PLN" 
					rate={3.88} 
					value={100} />
	
					<CurrencyConverter 
					from="PLN" 
					to="USD" 
					rate={0.26} 
					value={100} />
	
					<CurrencyConverter 
					from="PLN" 
					to="EUR" 
					rate={0.23} 
					value={100} />
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById("root")
);








