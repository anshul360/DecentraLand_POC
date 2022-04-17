//import { TAlgorithm, encode } from "jwt-simple";

//import { sign } from "jsonwebtoken"

export interface Session {
    iss: string;
    sub: string;
    aud: string;
    /**
     * Timestamp indicating when the session should expire, in Unix milliseconds.
     */  
    exp: number;
}

/**
 * Identical to the Session type, but without the `issued` and `expires` properties.
 */
export type PartialSession = Omit<Session,  "exp">;

export function encodeSession(secretKey: string, partialSession: PartialSession): string {
    // Always use HS512 to sign the token
    //const algorithm: TAlgorithm = "RS256";
    // Determine when the token should expire
    const issued = Date.now();
    const fifteenMinutesInMs = 15 * 60 * 1000;
    const expires = issued + fifteenMinutesInMs;
    const session: Session = {
        ...partialSession,
        exp: expires
    };
    return ""
    //return sign(session, secretKey, { algorithm: "RS256" })

    //return encode(session, secretKey, algorithm)  
}
