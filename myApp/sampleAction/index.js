const common = require('../common.js')

module.exports = async (params, vault, steps) => {
  return { data: params.input || common.getId() }
}
