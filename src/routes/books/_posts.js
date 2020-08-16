const fs = require('fs');
const frontMatter = require('front-matter');
const marked = require('marked');

const posts = fs.readdirSync('./src/stories').map(file => {
	const postContent = fs.readFileSync(`./src/stories/${file}`,
		{ encoding: 'utf8' }
	);
	const postFrontMatter = frontMatter(postContent);
	return {
		title: postFrontMatter.attributes.title,
		slug: postFrontMatter.attributes.slug,
		html: marked(postFrontMatter.body)
	}
});

posts.forEach(post => {
	console.log(post.html)
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
