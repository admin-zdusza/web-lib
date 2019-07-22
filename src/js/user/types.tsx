export enum USER {
    LOGGED_IN = 'USER_LOGGED_IN',
    LOGGED_OUT = 'USER_LOGGED_OUT'
}

export interface User {
    sessionToken: string,
    loginToken: string,
    email: string,
    paidTill: Date | undefined,
    role: string | undefined
}

export type UserAction =
    | { type: USER.LOGGED_IN; data: User }
    | { type: USER.LOGGED_OUT; };
