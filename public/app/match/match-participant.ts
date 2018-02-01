export interface MatchParticipant {
    name: string;
    logo: string;
    score?: number; // might be empty if not have been played yet
    winner?: boolean; // might be empty if not have been played yet
}