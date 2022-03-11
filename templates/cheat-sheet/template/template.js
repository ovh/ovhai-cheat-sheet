const getAuthors = function (node) {
  const result = [];
  const authorCount = node.getAttribute('authorcount')
  if (authorCount > 1) {
    for (let index = 1; index < authorCount + 1; index++) {
      const author = node.getAttribute(`author_${index}`)
      const email = node.getAttribute(`email_${index}`)
      const bio = node.getAttribute(`authorbio_${index}`)
      let twitter;
      if (email && email.startsWith("https://twitter.com/")) {
        twitter = email.replace("https://twitter.com/", "");
      }
      result.push({ name: author, email: email, bio: bio, twitter: twitter })
    }
  } else {
    const author = node.getAttribute('author')
    const email = node.getAttribute('email')
    const bio = node.getAttribute(`authorbio`)
    let twitter;
    if (email && email.startsWith("https://twitter.com/")) {
      twitter = email.replace("https://twitter.com/", "");
    }
    result.push({ name: author, email: email, bio: bio, twitter: twitter })
  }
  return result;
}

const renderAuthors = function (authors) {
  return authors.map(author => {
    return `<div class="author">
<div class="author-avatar"><img src="https://pbs.twimg.com/profile_images/726148230224949249/g2T2qehD_400x400.jpg"/></div>
<div class="author-name"><a href="${author.email}">@${author.twitter}</a></div>
<div class="author-bio">${author.bio}</div>
</div>
`;
  }).join('\n')
}

const renderOVHAuthors = function (authors) {
  return authors.map(author => {
    return `<div class="author">
<div class="author-avatar"><img src="templates/cheat-sheet/template/assets/devrel.png"/></div>
<div class="author-name">${author.author}</a></div>
<div class="author-bio">${author.bio}</div>
</div>
`;
  }).join('\n')
}

module.exports = [{
  paragraph: (ctx) => `<p class="${ctx.node.getRoles()}">${ctx.node.getContent()}</p>`,
  document: (ctx) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link href="templates/cheat-sheet/template/assets/style.css" rel="stylesheet">
</head>
<body>
<header>
  <h1><img width="150" src="templates/cheat-sheet/template/assets/logo-w.png"/> ${ctx.node.getHeader().getTitle()}</h1>
</header>
<section class="content">
${ctx.node.getContent()}
</section>
</body>`,
  page_break: () => `<div class="page-break"></div>`
}]
