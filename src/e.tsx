// index.tsx
import React from "react";
import ReactDOM from "react-dom";

type Props = {
	name: string;
};

const App: React.FC<Props> = ({ name }) => {
	return <div>Hello, {name}!</div>;
};

ReactDOM.render(<App name="World" />, document.getElementById("root"));
