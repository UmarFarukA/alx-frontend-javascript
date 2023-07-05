export interface MajorCredits {
    credits: number
    id:number
}

export interface MinorCredits {
    credits: number
    id:number
}

export function sumMajorCredits(subject1:MajorCredits, subject2:MajorCredits)  {
    return {
        credits: subject1.credits + subject2.credits
    }
}

export function sumMinorCredits(subject1:MinorCredits, subject2:MinorCredits) {
    return {
        credits:subject1.credits + subject2.credits
    }

}