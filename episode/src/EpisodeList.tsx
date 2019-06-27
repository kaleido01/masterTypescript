import React from "react";
import { IEpisode } from "./interfaces";

const EpisodeList = (props: any): Array<JSX.Element> => {
	const { episodes, toggleFavAction, favorites } = props;
	return episodes.map((episode: IEpisode) => {
		return (
			<section key={episode.id}>
				<img src={episode.image && episode.image.medium} alt="image" />
				<div>{episode.name}</div>
				<section>
					Season:{episode.season} Number:{episode.number}
					<button type="button" onClick={() => toggleFavAction(episode)}>
						{favorites.includes(episode) ? "delFav" : "fav"}
					</button>
				</section>
			</section>
		);
	});
};

export default EpisodeList;
