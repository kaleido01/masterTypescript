//All the Interfaces

export interface IEpisode {
	airdate: string;
	airstamp: string;
	airtime: string;
	id: string;
	image: { medium: string; original: string };
	name: string;
	number: number;
	runtime: number;
	season: number;
	summary: string;
	url: string;
}

export interface IEpisodeProps {
	episodes: IEpisode[];
	toggleFavAction: (episode: IEpisode) => IAction;
	favorites: Array<IEpisode>;
}

export interface IState {
	episodes: Array<IEpisode>;
	favorites: Array<any>;
}

export interface IAction {
	type: string;
	payload: any;
}
