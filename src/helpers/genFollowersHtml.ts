export const genFollowersHtml = (
  followers: { login: string; avatar_url: string }[]
) => {
  let html = "\n<table>\n"

  followers.forEach((follower, index) => {
    const name = follower.login
    const img = follower.avatar_url

    if (index % 7 === 0) {
      if (index !== 0) {
        html += "  </tr>\n"
      }
      html += "  <tr>\n"
    }

    html += `
<td align="center">
     <a href="https://github.com/${name}">
       <img src="${img}" width="100px;" alt="${name}"/>
     </a>
     <br />
     <a href="https://github.com/${name}">${name}</a>
  </td>
		`
  })

  html += "  </tr>\n</table>\n"

  return html
}
