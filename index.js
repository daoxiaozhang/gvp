#! /usr/bin/env node
const program = require("commander");
const path = require("path");
const fs = require("fs-extra");
const info = require("./package.json");
const uuid = require("uuid");
const jsonfile = require("jsonfile");
const pluginVersion = "plugin";

const pluginPackage = require("./template/plugin/package.json");

function writePack(projectName) {
	let { name, version, ...rest } = pluginPackage;
	let filePath = projectName + "/package.json";
	jsonfile.writeFile(
		filePath,
		{
			appId: uuid.v4(),
			name: projectName,
			pluginName: {},
			version: "1.0.0",
			...rest
		},
		{
			spaces: 2,
			EOL: "\r\n"
		},
		function(err) {
			if (err) console.error(err);
		}
	);
}

function done(name) {
	console.log();
	console.log("  环境已初始化完成! \r");
	console.log("  请执行后续操作: \r");
	console.log("    $ cd %s \r", name);
	console.log("    $ npm install \r");
	console.log();
}

function help() {
	console.log();
	console.log("  查看相应Command [option]:");
	console.log();
	console.log("    $ %s [command] --help", info.name);
	console.log();
	console.log("  创建项目:");
	console.log("    $ gvp create <name>");
	console.log();
}

program.version(info.version)
	.usage("<command> [options]")
	.on("--help", function() {
		help();
	});

program.command("create <name>")
	.description("创建一个插件项目")
	.action(function(name, command) {
		fs.exists(name, function(flag) {
			if (flag) {
				console.log("\r");
				console.log(`${name} 目录已存在!`);
			} else {
				fs.mkdir(name, function(error) {
					if (error) {
						console.error(error);
					} else {
						try {
							fs.copySync(path.join(__dirname, "template/" + pluginVersion), name);
							writePack(name);
							done(name);
						} catch (err) {
							console.error(err);
						}
					}
				});
			}
		});
	})
	.on("--help", function() {
		help();
	});

program.parse(process.argv);
