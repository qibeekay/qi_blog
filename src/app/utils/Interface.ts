// import { Image } from "sanity";

export interface Post {
	title: string;
	excerpt: string;
	slug: { current: string };
	publishedAt: string;
	image: Image;
	comments: Comment[];
	replies: Reply[];
	body: any;
	tags: Array<Tag>;
	author: { [key: string]: any };
	_id: string;
}

export interface Tag {
	name: string;
	slug: { current: string };
	_id: string;
}

export interface Author {
	name: string;
	description: string;
	image: Image;
	_id: string;
	slug: { current: string };
}

interface Image {
	alt: string | undefined;
	_type: 'image';
	asset: [any];
}

export interface Comment {
	comment: string;
	email: string;
	name: string;
	image: string;
	post: {
		_ref: string;
		_type: string;
	};
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface Reply {
	reply: string;
	email: string;
	name: string;
	image: string;
	comment: {
		_ref: string;
		_type: string;
	};
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}
