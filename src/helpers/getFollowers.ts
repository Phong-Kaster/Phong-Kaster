import axios from "axios"

const url = "https://api.github.com/user/followers"

const args = process.argv.slice(2)

const apiKey = args[0]

const getFollowers = async (): Promise<any> => {
  // use axios
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  })

  return data
}

export default getFollowers
