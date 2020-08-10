import React from "react";

export default ({ option, echarts, Chart, events }) => {
	let { fetch, uuid, version, rect, config, mode } = option;
	let { onAction } = events;
	return (
		<div style={{ background: config.style.background, ...rect }}>
			<h1>ID:{uuid}</h1>
			<h1>版本:{version}</h1>
			<h1>模式:{mode}</h1>
			<h1>尺寸:{JSON.stringify(rect)}</h1>
			<h1>动态数据:{JSON.stringify(fetch)}</h1>
			<h1>动态属性:{JSON.stringify(config.props)}</h1>
			<h1>交互对象:{JSON.stringify(config.targets)}</h1>
			<button
				onClick={() => {
					onAction();
					console.log("12321");
					alert("action");
				}}>
				按钮、测试事件
			</button>
		</div>
	);
};
