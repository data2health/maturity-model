import { UserAnswers } from "./User";
import { AnswerScores } from "./Score";

export enum AnswerScoreLoadState {
    NotLoaded = 1,
    Loading = 2,
    Loaded = 3,
    Failed = 4
}

export interface UserState {
    answers: UserAnswers;
    answersLoadState: AnswerScoreLoadState;
    email: string;
    entryCode: string;
    guest: boolean;
    results: AnswerScores;
}