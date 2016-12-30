var pass_id = require('fmtjs-att-pass-id')
// var pass_lexical = require('fmtjs-att-pass-lexical')

function run(ast) {
	var ctx = {}
	pass_id(ast)
	// ctx['lexical'] = pass_lexical(ast)
	return ctx
}

module.exports = run