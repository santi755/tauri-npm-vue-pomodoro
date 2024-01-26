import { SessionUuid } from './SessionUuid';

export type SessionType = 'coding' | 'work out' | 'break';

export class Session {
    constructor(
        private readonly sessionUuid: SessionUuid,
        private readonly sessionTime: number,
        private readonly sessionType: SessionType,
        private readonly sessionRemainingTime: number,
        private readonly sessionCompleted: boolean,
    ) {}
}
