export const AppRoute = {
    Home: '/index.html',
    Lose: '/lose.html',
    Level1: '/level1.html',
    Level2: '/level2.html',
    Level3: '/level3.html',
    Win: '/win.html',
    Rules: '/rules.html',
}

export const StorageField = {
    Name: 'name',
    Theme: 'theme',
    Complexity: 'complexity',
    Lvl: 'lvl',
    HeartsCount: 'hearts',
    Points: 'points',
    TimeLeft: 'timeLeft'
}

export const Complexity = {
    Easy: 'easy',
    Medium: 'medium',
    Hard: 'hard'
}

export const ComplexityTranslation = {
    [Complexity.Easy]: 'лёгкий',
    [Complexity.Medium]: 'средний',
    [Complexity.Hard]: 'сложный'
}

export const ComplexityExtraPointsFactor = {
    [Complexity.Easy]: 10,
    [Complexity.Medium]: 5,
    [Complexity.Hard]: 1,
}

export const StartFeatures = {
    Level: 1,
    HeartsCount: 3,
    Points: 0
}

export const LevelData = {
	1: {
		Complexity: {
			easy: {
				WinPoints: 5,
				ErrorPoints: -1,
				Time: 30
			},
			medium: {
				WinPoints: 7,
				ErrorPoints: -3,
				Time: 20
			},
			hard: {
				WinPoints: 15,
				ErrorPoints: -5,
				Time: 15
			}
		}
	},
	2: {
		Complexity: {
			easy: {
				WinPoints: 10,
				ErrorPoints: -3,
				Time: 60
			},
			medium: {
				WinPoints: 15,
				ErrorPoints: -5,
				Time: 40
			},
			hard: {
				WinPoints: 20,
				ErrorPoints: -7,
				Time: 30
			}
		}
	},
	3: {
		Complexity: {
			easy: {
				WinPoints: 15,
				ErrorPoints: -5,
				Time: 60
			},
			medium: {
				WinPoints: 20,
				ErrorPoints: -7,
				Time: 40
			},
			hard: {
				WinPoints: 30,
				ErrorPoints: -9,
				Time: 30
			}
		}
	}
}

export const NEXT_LEVEL_TRANSITION_TIME = 2000
