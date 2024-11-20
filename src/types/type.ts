export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export interface IUserState {
	user: IUser | null;
}

export interface IToastProps {
	message: string;
	onClose: () => void;
}

export interface IPostInfo {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface IMapLinkProps {
  lat: number;
  lng: number;
}