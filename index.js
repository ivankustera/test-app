const action = require('./myApp/sampleAction')

const main = async () => {
  const params = {}
  const vault = {}
  console.log(await action(params, vault))
}

main()