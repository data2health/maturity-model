import { UserAnswers } from "./User";

export interface UserState {
    answers: UserAnswers;
    email: string;
    entryCode: string;
}