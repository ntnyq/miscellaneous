/**
 * @fileoverview disable-console
 * @author disable-console
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'disable-console',
      category: 'Possible Errors',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    ],
  },

  create: function(context) {
    const logs = [
      // console 的所以方法
      'debug',
      'error',
      'info',
      'log',
      'warn',
      'dir',
      'dirxml',
      'table',
      'trace',
      'group',
      'groupCollapsed',
      'groupEnd',
      'clear',
      'count',
      'countReset',
      'assert',
      'profile',
      'profileEnd',
      'time',
      'timeLog',
      'timeEnd',
      'timeStamp',
      'context',
      'memory',
    ]
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression(node) {
        const allowLogs = context.options[0]
        const disbaleLogs = Array.isArray(allowLogs)
          ? logs.filter(log => !allowLogs.includes(log))
          : logs
        const callObj = node.callee.object
        const callProp = node.callee.property

        if (!callObj && !callProp) {
          return
        }

        if (callObj.name !== 'console') {
          return
        }

        if (disbaleLogs.includes(callProp.name)) {
          context.report({
            node,
            message: 'error: should remove console',
          })
        }
      },
    }
  },
}
