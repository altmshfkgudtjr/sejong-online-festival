import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-size: 16px;
		background-color: #0a0511;
		scroll-behavior: smooth;
	}

	html {
		min-height: 100%;
	}

	body {
		min-height: 100%;
	}

	* {
		font-size: 1rem;
		font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', sans-serif;
		color: #484848;
		-webkit-tap-highlight-color: transparent;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

		&::before,
		&::after {
			-webkit-box-sizing: inherit;
			-moz-box-sizing: inherit;
			box-sizing: inherit;
		}
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	header,
	hgroup,
	menu,
	Nav,
	section {
		display: block;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	button {
		padding: 0;
		background-color: rgba(0, 0, 0, 0);
		outline: none;
		border: 0;
		cursor: pointer;
	}

	dd {
		-webkit-margin-start: 0;
	}

	ul {
		-webkit-padding-start: 0;
		list-style-position: inside;
		margin: 0;
	}

	li,
	ol,
	ul {
		list-style: none;
	}

	a {
		margin: 0;
		padding: 0;
		font-size: 100%;
		text-decoration: none;
		color: inherit;
		background: rgba(0, 0, 0, 0);
	}

	img {
		max-width: 100%;
	}

	b,
	span {
		font-size: inherit;
		color: inherit;
		font-weight: inherit;
	}

	strong {
		font-size: inherit;
		color: inherit;
	}

	br {
		line-height: inherit;
	}

	footer {
		padding: 0;
	}

	input,
	textarea {
		font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', sans-serif;
	}

	input[type='text'],
	textarea {
		appearance: none;
		/* padding: 0; */
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		font-weight: 400;
	}

	dialog {
		display: block;
		padding: 0;
		border: none;
		background: inherit;
	}

	.preventHighlight {
		-webkit-tap-highlight-color: transparent;
	}

	.noselect {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	p {
		margin: 0;
	}

	i {
		font-style: normal;
	}

	::selection {
		background-color: #000;
		color: #fff;
	}
`;

export default GlobalStyles;
