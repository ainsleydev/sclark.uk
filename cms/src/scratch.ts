import { htmlToLexical } from '@ainsleydev/payload-helper/dist/util/lexical';

const scratch = async () => {
	const str =
		'<h2>Online English Lessons</h2><p>Are you worried about making mistakes in English? Do you know what to say in your head, but the words don’t come out? Can you speak some English, but it’s difficult to talk about complex topics? Do you need to pass an English exam?</p>';
	const html = htmlToLexical(str)
	console.log(JSON.stringify(html, null, 2));
};

scratch().catch((e) => console.error(e));
