export interface LoggedInUser {
    token: string,
    sessionDuration: number,
    sessionStamp: string,
    email: string,
    paidTill: Date | undefined,
    role: string | undefined
}
