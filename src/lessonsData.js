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
                moduleTitle: "What is personal finance?",
                introductionParagraphs: [
                    "Personal finance is how you manage your money and the decisions you make about earning, spending, saving, and investing.",
                    "It covers everything from your daily expenses to your long-term financial goals."
                ],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Income",
                        description: "Money you receive from work, investments, or other sources."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Expenses",
                        description: "Money you spend on needs and wants."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "Why is personal finance important?",
                introductionParagraphs: [
                    "Personal finance helps you take control of your money instead of letting money control you.",
                    "Good financial habits can reduce stress and open opportunities for your future."
                ],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Financial security",
                        description: "Confidence that you can handle unexpected expenses."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Opportunities",
                        description: "Money choices that allow travel, study, or investing."
                    }
                ]
            }, 
            {
                moduleNumber: 3,
                moduleTitle: "What does personal finance involve?",
                introductionParagraphs: [
                    "Managing money involves saving, spending wisely, and protecting what you earn.",
                    "It also includes planning for future needs like retirement or emergencies."
                ],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Saving",
                        description: "Putting aside money for future goals or emergencies."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Spending",
                        description: "Using money for daily needs and wants."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Investing",
                        description: "Growing your money through assets like shares or property."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Protecting",
                        description: "Safeguarding money with insurance or secure accounts."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "Which of the following best describes personal finance?",
                options: [
                    {
                        optionNumber: 0,
                        label: "Managing only your savings"
                    },
                    {
                        optionNumber: 1,
                        label: "Managing all aspects of your money"
                    },
                    {
                        optionNumber: 2,
                        label: "Investing in the stock market only"
                    },
                    {
                        optionNumber: 3,
                        label: "Keeping track of expenses once a year"
                    }
                ],
                correctAnswers: [1]
            },
            {
                questionNumber: 2,
                question: "Why is personal finance important?",
                hint: "Think about stress and opportunities.",
                options: [
                    {
                        optionNumber: 0,
                        label: "It guarantees you will become rich"
                    },
                    {
                        optionNumber: 1,
                        label: "It helps you manage money wisely and plan for the future"
                    },
                    {
                        optionNumber: 2,
                        label: "It prevents you from ever making mistakes"
                    },
                    {
                        optionNumber: 3,
                        label: "It reduces stress and allows better life choices"
                    }
                ],
                correctAnswers: [1, 3]
            },
            {
                questionNumber: 3,
                question: "Which are examples of personal finance activities?",
                options: [
                    {
                        optionNumber: 0,
                        label: "Saving for retirement"
                    },
                    {
                        optionNumber: 1,
                        label: "Choosing where to invest"
                    },
                    {
                        optionNumber: 2,
                        label: "Picking which video game to play"
                    },
                    {
                        optionNumber: 3,
                        label: "Budgeting your weekly income"
                    }
                ],
                correctAnswers: [0, 1, 3]
            },
            {
                questionNumber: 4,
                question: "Which of the following is part of protecting your finances?",
                options: [
                    {
                        optionNumber: 0,
                        label: "Buying insurance"
                    },
                    {
                        optionNumber: 1,
                        label: "Spending without limits"
                    },
                    {
                        optionNumber: 2,
                        label: "Using secure bank accounts"
                    },
                    {
                        optionNumber: 3,
                        label: "Ignoring fraud alerts"
                    }
                ],
                correctAnswers: [0, 2]
            }
        ],
        badge: {
            label: "Badge for lesson 1",
            image: Badge1
        }
    },
    // {
    //     number: 2,
    //     numberOrder: "second",
    //     title: "Banking must-knows",
    //     mainIcon: WalletIcon,
    //     mainIconAlt: "wallet",
    //     duration: "8 min",
    //     overview: "this is an overview of lesson 2",
    //     topicsCovered: [
    //         "Choosing a bank",
    //         "Credit reports",
    //         "Different types of bank accounts"
    //     ],
    //     teachingModules: [
    //         {
    //             moduleNumber: 1,
    //             moduleTitle: "How do I choose a bank?",
    //             introductionParagraphs: ["This is the introduction to teaching module 2"],
    //             cards: [
    //                 {
    //                     icon: InterestIcon,
    //                     cardTitle: "Interest rates",
    //                     description: "This is a description of interest rates."
    //                 }
    //             ]
    //         }
    //     ],
    //     quizQuestions: [
    //         {
    //             questionNumber: 1,
    //             question: "What should you consider when choosing a bank?",
    //             hint: "Hint: there's more than one answer!",
    //             options: [
    //                 {
    //                     optionNumber: 1,
    //                     validity: true,
    //                     label: "Fees"
    //                 },
    //                 {
    //                     optionNumber: 2,
    //                     validity: false,
    //                     label: "How cool the bank name sounds"
    //                 },
    //                 {
    //                     optionNumber: 3,
    //                     validity: true,
    //                     label: "Interest rates"
    //                 },
    //                 {
    //                     optionNumber: 4,
    //                     validity: true,
    //                     label: "Flexibility"
    //                 }
    //             ],
    //             correctAnswers: [0, 2, 3]
    //         }
    //     ],
    //     badge: {
    //         label: "Badge for lesson 1",
    //         image: Badge1
    //     }
    // }
    {
        number: 2,
        numberOrder: "second",
        title: "Banking must-knows",
        mainIcon: WalletIcon,
        mainIconAlt: "bank icon",
        duration: "7 min",
        overview: "Banks are where most people start their money journey. In this lesson, we'll look at choosing a bank, understanding credit reports, and knowing the difference between account types.",
        topicsCovered: [
            "Choosing a bank",
            "Credit reports",
            "Different types of bank accounts"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "How do I choose a bank?",
                introductionParagraphs: [
                    "The right bank can save you money and make managing your finances easier.",
                    "It’s important to compare fees, services, and accessibility before deciding."
                ],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Fees",
                        description: "Banks may charge account keeping or transaction fees."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "ATM access",
                        description: "Check how easy it is to withdraw cash without extra charges."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Customer service",
                        description: "Good support helps when problems arise or questions come up."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "What’s in a credit report?",
                introductionParagraphs: [
                    "A credit report is a record of your borrowing and repayment history.",
                    "Banks and lenders use it to decide whether to approve loans or credit cards."
                ],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Credit score",
                        description: "A number that shows how reliable you are at repaying money."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Hard inquiry",
                        description: "When a lender checks your report before approving credit."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Defaults",
                        description: "Missed payments that can lower your score and limit options."
                    }
                ]
            },
            {
                moduleNumber: 3,
                moduleTitle: "Savings vs. spending accounts",
                introductionParagraphs: [
                    "Not all bank accounts work the same way.",
                    "A savings account helps you grow your money, while a spending account helps you manage daily expenses."
                ],
                cards: [
                    {
                        icon: InterestIcon,
                        cardTitle: "Savings account",
                        description: "An account that earns interest on the money you deposit."
                    },
                    {
                        icon: InterestIcon,
                        cardTitle: "Transaction account",
                        description: "An everyday account for spending and paying bills."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "What factors should you compare when choosing a bank?",
                options: [
                    {
                        optionNumber: 0,
                        label: "Fees and charges"
                    },
                    {
                        optionNumber: 1,
                        label: "ATM and branch access"
                    },
                    {
                        optionNumber: 2,
                        label: "Customer service quality"
                    },
                    {
                        optionNumber: 3,
                        label: "The colour of the bank’s logo"
                    }
                ],
                correctAnswers: [0, 1, 2]
            },
            {
                questionNumber: 2,
                question: "What is a credit report used for?",
                options: [
                    {
                        optionNumber: 0,
                        label: "To show your repayment history"
                    },
                    {
                        optionNumber: 1,
                        label: "To decide if you get a loan or credit card"
                    },
                    {
                        optionNumber: 2,
                        label: "To record your school grades"
                    },
                    {
                        optionNumber: 3,
                        label: "To track how much you spend at shops"
                    }
                ],
                correctAnswers: [0, 1]
            },
            {
                questionNumber: 3,
                question: "Which of the following could harm your credit score?",
                options: [
                    {
                        optionNumber: 0,
                        label: "Paying bills on time"
                    },
                    {
                        optionNumber: 1,
                        label: "Missing loan repayments"
                    },
                    {
                        optionNumber: 2,
                        label: "Having a default listed"
                    },
                    {
                        optionNumber: 3,
                        label: "Applying for too many loans quickly"
                    }
                ],
                correctAnswers: [1, 2, 3]
            },
            {
                questionNumber: 4,
                question: "Which statement is true about savings and transaction accounts?",
                options: [
                    {
                        optionNumber: 0,
                        label: "Savings accounts usually earn interest"
                    },
                    {
                        optionNumber: 1,
                        label: "Transaction accounts are mainly for daily spending"
                    },
                    {
                        optionNumber: 2,
                        label: "Savings accounts are the best place for frequent shopping"
                    },
                    {
                        optionNumber: 3,
                        label: "Transaction accounts usually earn high interest"
                    }
                ],
                correctAnswers: [0, 1]
            }
        ],
        badge: {
            label: "Badge for lesson 2",
            image: Badge1
        }
    }

]