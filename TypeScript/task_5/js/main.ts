// Interface for MajorCredits with a brand to uniquely identify it
interface MajorCredits {
	credits: number;
	brand: 'major';
}

// Interface for MinorCredits with a different brand
interface MinorCredits {
	credits: number;
	brand: 'minor';
}

// Function that sums credits for MajorCredits and returns a MajorCredits object
function sumMajorCredits(
	subject1: MajorCredits,
	subject2: MajorCredits
): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: 'major',
	};
}

// Function that sums credits for MinorCredits and returns a MinorCredits object
function sumMinorCredits(
	subject1: MinorCredits,
	subject2: MinorCredits
): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: 'minor',
	};
}

