import React, { useEffect } from "react";

function loadComponent(scope, module) {
	return async () => {
		await __webpack_init_sharing__("default");
  		const container = window[scope]; // or get the container somewhere else
		await container.init(__webpack_share_scopes__.default);
	  	const factory = await window[scope].get(module);
	  	const Module = factory();
	  	return Module;
	};
}

const useDynamicScript = (args) => {
	const [ready, setReady] = React.useState(false);
	const [failed, setFailed] = React.useState(false);
  
	React.useEffect(() => {
	  	if (!args.url) {
			return;
	  	}

		const element = document.createElement("script");
  
	  	element.src = args.url;
	  	element.type = "text/javascript";
	  	element.async = true;
  
	  	setReady(false);
	  	setFailed(false);
  
	  	element.onload = async () => {
			setReady(true);
	  	};
  
	  	element.onerror = () => {
			setReady(false);
			setFailed(true);
	  	};
  
	  	document.head.appendChild(element);
  
	  	return () => {
			document.head.removeChild(element);
	  	};
	}, [args.url]);
  
	return {
	  	ready,
	  	failed,
	};
};
  
const RemoteModule = props => {
	const { module, ...componentProps } = props;
	if (!module) {
		return null;
	}

	const { ready, failed } = useDynamicScript({
	  	url: props.module?.url
	});
  
	if (!ready || failed)
	  	return null;
  
	const Component = React.lazy(
	  	loadComponent(props.module.scope, props.module.module)
	);
  
	return (
	  	<React.Suspense fallback="Loading module">
			<Component {...componentProps} />
	  	</React.Suspense>
	);
}

export default RemoteModule;