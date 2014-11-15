#! /usr/bin/env node

'use strict';

var packageJson = require('../package.json'),
    program     = require('commander')


program
	.version(packageJson.version)

program
	.command('add')
	.description('Add a new alternative.')
	.action(function () {
		console.log('test')
	})

program.parse(process.argv)
