import { config } from "dotenv"
config()
import fs from "fs"
import getFollowers from "./helpers/getFollowers"
import { genFollowersHtml } from "./helpers/genFollowersHtml"

const matchBetween = new RegExp(
  /(?<=<!-- FOLLOWER-LIST:START -->).*(?=<!-- FOLLOWER-LIST:END -->)/,
  "gs"
)

const file = fs.readFileSync("README.md")
const content = file.toString()

const doChanges = async () => {
  const followers: any[] = await getFollowers()

  const cards = genFollowersHtml(followers)

  // const newContent = "Hello world"
  const updatedFile = content.replace(matchBetween, cards)

  fs.writeFileSync("README.md", updatedFile)
}

doChanges()
