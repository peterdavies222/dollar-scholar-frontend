// lesson 1 imports
import RocketIcon from './assets/lesson-icons/lesson-1/rocket.svg?react'
import InterestIcon from './assets/lesson-icons/lesson-1/interest.svg?react'
import FeesIcon from './assets/lesson-icons/lesson-1/fees.svg?react'
import FlexibilityIcon from './assets/lesson-icons/lesson-1/flexibility.svg?react'
import Badge1 from './assets/lesson-icons/lesson-1/badge.svg?react'

// lesson 2 imports
import WalletIcon from './assets/lesson-icons/lesson-2/wallet.svg?react'

export default [
    {
        number: 1,
        numberOrder: "first",
        title: "Getting started",
        mainIcon: RocketIcon,
        mainIconAlt: "rocket icon",
        duration: "5 min",
        overview: "So, you've decided to dabble in a bit of personal finance... Good on you! In this lesson, we're gonna be looking at the basics of personal finance.",
        topicsCovered: [
            "Choosing a bank",
            "Credit reports",
            "Different types of bank accounts"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "How do I choose a bank?",
                introductionParagraphs: ["This is the introduction to teaching module 1"],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Interest rates",
                        description: "This is a description of interest rates."
                    },
                    {
                        icon: FeesIcon,
                        cardTitle: "Fees",
                        description: "This is a description of fees."
                    },
                    {
                        icon: FlexibilityIcon,
                        cardTitle: "Flexibility",
                        description: "This is a description of flexibility."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "What is personal finance?",
                introductionParagraphs: ["This is another intro paragraph."],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Interest rates",
                        description: "This is a description of interest rates."
                    },
                    {
                        icon: FeesIcon,
                        cardTitle: "Fees",
                        description: "This is a description of fees."
                    },
                    {
                        icon: FlexibilityIcon,
                        cardTitle: "Flexibility",
                        description: "This is a description of flexibility."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "What should you consider when choosing a bank?",
                hint: "Hint: there's more than one answer!",
                options: [
                    {
                        optionNumber: 1,
                        validity: true,
                        label: "Fees"
                    },
                    {
                        optionNumber: 2,
                        validity: false,
                        label: "How cool the bank name sounds"
                    },
                    {
                        optionNumber: 3,
                        validity: true,
                        label: "Interest rates"
                    },
                    {
                        optionNumber: 4,
                        validity: true,
                        label: "Flexibility"
                    }
                ],
                correctAnswers: [0, 2, 3]
            }
        ],
        badge: {
            label: "Badge for lesson 1",
            image: Badge1
        }
    },
    {
        number: 2,
        numberOrder: "second",
        title: "Banking must-knows",
        mainIcon: WalletIcon,
        mainIconAlt: "wallet",
        duration: "8 min",
        overview: "this is an overview of lesson 2",
        topicsCovered: [
            "Choosing a bank",
            "Credit reports",
            "Different types of bank accounts"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "How do I choose a bank?",
                introductionParagraphs: ["This is the introduction to teaching module 2"],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Interest rates",
                        description: "This is a description of interest rates."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "What should you consider when choosing a bank?",
                hint: "Hint: there's more than one answer!",
                options: [
                    {
                        optionNumber: 1,
                        validity: true,
                        label: "Fees"
                    },
                    {
                        optionNumber: 2,
                        validity: false,
                        label: "How cool the bank name sounds"
                    },
                    {
                        optionNumber: 3,
                        validity: true,
                        label: "Interest rates"
                    },
                    {
                        optionNumber: 4,
                        validity: true,
                        label: "Flexibility"
                    }
                ],
                correctAnswers: [0, 2, 3]
            }
        ],
        badge: {
            label: "Badge for lesson 1",
            image: Badge1
        }
    }
]