import { useState } from "react";
import { Collapse } from "react-collapse";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Result = ({ gameData }) => {
	const [reviewOpen, setReviewOpen] = useState(false);

	return (
		<div className="game-container">
			{gameData && (
				<div className="section-1">
					<div className="game-cover">
						{gameData && gameData?.cover && <img src={gameData?.cover} alt={gameData?.id} />}
					</div>
					<div className="side-box">
						<div className="side-box-top">
							<div className="game-title">
								<h3>
									<a href={gameData?.url} target="_blank" rel="noreferrer">
										{gameData?.title}
									</a>
								</h3>
							</div>
							<div className="game-price">
								{gameData &&
								gameData?.steam_reviews &&
								gameData.steam_reviews?.hasOwnProperty("summary") ? (
									<p>Price: {gameData?.price}</p>
								) : (
									<p>Unavailable on Steam</p>
								)}
							</div>
						</div>

						<div className="game-desc">
							<p>{gameData?.description}</p>
						</div>
					</div>
				</div>
			)}

			<div className="steam-container">
				<h3>Steam Ratings</h3>
				{gameData &&
				gameData?.steam_reviews &&
				gameData.steam_reviews?.summary ? (
					<div className="steam-details">
						<div className="steam-details-panel">
							<div className="steam-score">
								Review Score: {gameData.steam_reviews?.summary?.review_score_desc}
							</div>
							<div className="steam-ratings">
								<ThumbUpIcon />
								<span id="positive">
									{gameData.steam_reviews?.summary?.total_positive}
								</span>
								<ThumbDownIcon />
								<span id="negative">
									{gameData.steam_reviews?.summary?.total_negative}
								</span>
							</div>
						</div>

						<div className="steam-reviews">
							<div className="review-interact">
								<Collapse isOpened={reviewOpen}>
									<h3>Steam Reviews</h3>
									<div className="review-list">
										{gameData.steam_reviews?.reviews.map((review, index) => (
											<div className="review" key={index}>
												<div className="review-heading">
													<h4>Review #{index + 1}</h4>
													<div className="rating">
														<ThumbUpIcon />
														<span id="positive">{review?.votes_up}</span>
														<EmojiEmotionsIcon />
														<span id="funny">{review?.votes_funny}</span>
													</div>
												</div>

												<div className="comment">
													<p>{review?.review}</p>
												</div>
											</div>
										))}
									</div>
								</Collapse>
								<button
									className="trigger-collapse"
									onClick={() => setReviewOpen(!reviewOpen)}
								>
									<span>View Steam Reviews</span>
									{reviewOpen ? (
										<KeyboardArrowUpIcon />
									) : (
										<KeyboardArrowDownIcon />
									)}
								</button>
							</div>
						</div>
					</div>
				) : (
					<div>This game is not available on Steam.</div>
				)}
			</div>
		</div>
	);
};

export default Result;
