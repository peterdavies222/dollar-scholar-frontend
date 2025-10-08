// lesson 1 imports
import RocketIcon from './assets/lesson-icons/lesson-1/rocket.svg?react'
import IncomeIcon from './assets/lesson-icons/lesson-1/income.svg?react'
import ExpensesIcon from './assets/lesson-icons/lesson-1/expenses.svg?react'
import SecurityIcon from './assets/lesson-icons/lesson-1/security.svg?react'
import OpportunitiesIcon from './assets/lesson-icons/lesson-1/opportunities.svg?react'
import SavingIcon from './assets/lesson-icons/lesson-1/saving.svg?react'
import SpendingIcon from './assets/lesson-icons/lesson-1/spending.svg?react'
import InvestingIcon from './assets/lesson-icons/lesson-1/investing.svg?react'
import ProtectingIcon from './assets/lesson-icons/lesson-1/protecting.svg?react'

import Badge1 from './assets/lesson-icons/lesson-1/badge.svg?react'

// lesson 2 imports
import WalletIcon from './assets/lesson-icons/lesson-2/wallet.svg?react'

// lesson 3 imports

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
                        icon: IncomeIcon,
                        cardTitle: "Income",
                        description: "Money you receive from work, investments, or other sources."
                    },
                    {
                        icon: ExpensesIcon,
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
                        icon: SecurityIcon,
                        cardTitle: "Financial security",
                        description: "Confidence that you can handle unexpected expenses."
                    },
                    {
                        icon: OpportunitiesIcon,
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
                        icon: SavingIcon,
                        cardTitle: "Saving",
                        description: "Putting aside money for future goals or emergencies."
                    },
                    {
                        icon: SpendingIcon,
                        cardTitle: "Spending",
                        description: "Using money for daily needs and wants."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Investing",
                        description: "Growing your money through assets like shares or property."
                    },
                    {
                        icon: ProtectingIcon,
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
                        icon: InvestingIcon,
                        cardTitle: "Fees",
                        description: "Banks may charge account keeping or transaction fees."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "ATM access",
                        description: "Check how easy it is to withdraw cash without extra charges."
                    },
                    {
                        icon: InvestingIcon,
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
                        icon: InvestingIcon,
                        cardTitle: "Credit score",
                        description: "A number that shows how reliable you are at repaying money."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Hard inquiry",
                        description: "When a lender checks your report before approving credit."
                    },
                    {
                        icon: InvestingIcon,
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
                        icon: InvestingIcon,
                        cardTitle: "Savings account",
                        description: "An account that earns interest on the money you deposit."
                    },
                    {
                        icon: InvestingIcon,
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
    },
    {
        number: 3,
        numberOrder: "third",
        title: "Growing your money",
        mainIcon: WalletIcon,
        mainIconAlt: "growing money icon",
        duration: "7 min",
        overview: "Want your money to work for you? This lesson will introduce investing and help you understand how to choose accounts that give you the best interest rates.",
        topicsCovered: [
            "Investing basics",
            "Interest rate accounts",
            "Compound growth"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "Introduction to investing",
                introductionParagraphs: [
                    "Investing is putting your money into assets that can grow in value over time.",
                    "It’s one of the most powerful ways to grow your wealth beyond just saving."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Shares",
                        description: "Buying a portion of a company to earn potential growth and dividends."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Bonds",
                        description: "Loans you give to governments or companies in exchange for interest payments."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Managed funds",
                        description: "A pool of money from many investors managed by professionals."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "Choosing good interest rate accounts",
                introductionParagraphs: [
                    "Some accounts offer better interest rates to help your savings grow faster.",
                    "It’s important to compare rates, fees, and compounding frequency before choosing an account."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "High-interest savings account",
                        description: "An account designed to earn more interest than a regular savings account."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Compound interest",
                        description: "Interest that earns interest on both your initial deposit and previous interest."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "Which are common types of investments?",
                options: [
                    { optionNumber: 0, label: "Shares" },
                    { optionNumber: 1, label: "Bonds" },
                    { optionNumber: 2, label: "Managed funds" },
                    { optionNumber: 3, label: "Gift cards" }
                ],
                correctAnswers: [0,1,2]
            },
            {
                questionNumber: 2,
                question: "Why is compound interest important?",
                options: [
                    { optionNumber: 0, label: "It makes your money grow faster over time" },
                    { optionNumber: 1, label: "It guarantees no risk" },
                    { optionNumber: 2, label: "You earn interest on interest" },
                    { optionNumber: 3, label: "It reduces fees automatically" }
                ],
                correctAnswers: [0,2]
            },
            {
                questionNumber: 3,
                question: "What should you check before choosing an interest-bearing account?",
                options: [
                    { optionNumber: 0, label: "Interest rate" },
                    { optionNumber: 1, label: "Fees" },
                    { optionNumber: 2, label: "Compounding frequency" },
                    { optionNumber: 3, label: "The bank's logo color" }
                ],
                correctAnswers: [0,1,2]
            }
        ],
        badge: {
            label: "Badge for lesson 3",
            image: Badge1
        }
    },
    {
        number: 4,
        numberOrder: "fourth",
        title: "Saving your money",
        mainIcon: WalletIcon,
        mainIconAlt: "saving money icon",
        duration: "7 min",
        overview: "Saving is key to reaching your goals. This lesson will teach you how to budget effectively and how to use Buy Now Pay Later services responsibly.",
        topicsCovered: [
            "Budgeting",
            "Responsible use of Buy Now Pay Later"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "How to budget effectively",
                introductionParagraphs: [
                    "Budgeting helps you plan how to use your money and reach financial goals.",
                    "It involves tracking income, expenses, and setting limits for spending and saving."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Needs",
                        description: "Essentials like food, rent, and bills."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Wants",
                        description: "Non-essential items or experiences you enjoy."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Savings goals",
                        description: "Money set aside for future purchases or emergencies."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "Using Buy Now Pay Later responsibly",
                introductionParagraphs: [
                    "Buy Now Pay Later (BNPL) allows you to spread payments over time without interest if used correctly.",
                    "It can be risky if you borrow more than you can pay back."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "BNPL service",
                        description: "A service that lets you split purchases into instalments."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Debt trap",
                        description: "When unpaid BNPL balances accumulate and become hard to manage."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "What are the main categories in a budget?",
                options: [
                    { optionNumber: 0, label: "Needs" },
                    { optionNumber: 1, label: "Wants" },
                    { optionNumber: 2, label: "Savings" },
                    { optionNumber: 3, label: "Fashion trends" }
                ],
                correctAnswers: [0,1,2]
            },
            {
                questionNumber: 2,
                question: "How can BNPL become risky?",
                options: [
                    { optionNumber: 0, label: "Paying on time" },
                    { optionNumber: 1, label: "Borrowing more than you can repay" },
                    { optionNumber: 2, label: "Missing instalments" },
                    { optionNumber: 3, label: "Comparing plans" }
                ],
                correctAnswers: [1,2]
            },
            {
                questionNumber: 3,
                question: "Why is budgeting important?",
                options: [
                    { optionNumber: 0, label: "To plan money usage and reach goals" },
                    { optionNumber: 1, label: "To avoid overspending" },
                    { optionNumber: 2, label: "To know what you can save" },
                    { optionNumber: 3, label: "To guarantee income growth" }
                ],
                correctAnswers: [0,1,2]
            }
        ],
        badge: {
            label: "Badge for lesson 4",
            image: Badge1
        }
    },
    {
        number: 5,
        numberOrder: "fifth",
        title: "Safety",
        mainIcon: WalletIcon,
        mainIconAlt: "safety icon",
        duration: "8 min",
        overview: "Keeping your money safe is crucial. Learn about scams, online safety, debt, and how to build an emergency fund.",
        topicsCovered: [
            "Scams and fraud",
            "Online safety",
            "Debt and emergency funds"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "Avoiding scams and fraud",
                introductionParagraphs: [
                    "Scams and fraud try to trick you into giving away money or personal info.",
                    "Being alert and cautious can prevent you from falling victim."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Phishing",
                        description: "Emails or messages pretending to be from legitimate sources to steal info."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Identity theft",
                        description: "When someone uses your personal info to commit fraud."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "Staying safe online",
                introductionParagraphs: [
                    "Use strong passwords and two-factor authentication to protect your accounts.",
                    "Be careful with sharing personal information online."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Strong password",
                        description: "A password that is hard to guess, mixing letters, numbers, and symbols."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Two-factor authentication",
                        description: "Extra verification step beyond just a password."
                    }
                ]
            },
            {
                moduleNumber: 3,
                moduleTitle: "Debt and emergency funds",
                introductionParagraphs: [
                    "Managing debt responsibly helps prevent financial stress.",
                    "An emergency fund ensures you can handle unexpected costs without borrowing."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Good debt",
                        description: "Debt used to invest in assets or improve long-term value."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Bad debt",
                        description: "Debt used for things that quickly lose value, like overspending."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Emergency fund",
                        description: "Savings set aside for unexpected expenses or loss of income."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "Which of the following are types of scams or fraud?",
                options: [
                    { optionNumber: 0, label: "Phishing" },
                    { optionNumber: 1, label: "Identity theft" },
                    { optionNumber: 2, label: "Budgeting" },
                    { optionNumber: 3, label: "Investment advice" }
                ],
                correctAnswers: [0,1]
            },
            {
                questionNumber: 2,
                question: "How can you stay safe online?",
                options: [
                    { optionNumber: 0, label: "Use strong passwords" },
                    { optionNumber: 1, label: "Enable two-factor authentication" },
                    { optionNumber: 2, label: "Share passwords with friends" },
                    { optionNumber: 3, label: "Click unknown links" }
                ],
                correctAnswers: [0,1]
            },
            {
                questionNumber: 3,
                question: "What is an emergency fund used for?",
                options: [
                    { optionNumber: 0, label: "Unexpected expenses" },
                    { optionNumber: 1, label: "Loss of income" },
                    { optionNumber: 2, label: "Buying luxury items" },
                    { optionNumber: 3, label: "Daily coffee" }
                ],
                correctAnswers: [0,1]
            },
            {
                questionNumber: 4,
                question: "Which are examples of responsible debt management?",
                options: [
                    { optionNumber: 0, label: "Paying bills on time" },
                    { optionNumber: 1, label: "Accumulating high-interest credit card debt" },
                    { optionNumber: 2, label: "Using debt for long-term investments" },
                    { optionNumber: 3, label: "Ignoring due dates" }
                ],
                correctAnswers: [0,2]
            }
        ],
        badge: {
            label: "Badge for lesson 5",
            image: Badge1
        }
    },
    {
        number: 6,
        numberOrder: "sixth",
        title: "Planning for the future",
        mainIcon: WalletIcon,
        mainIconAlt: "future planning icon",
        duration: "8 min",
        overview: "Thinking ahead is key to financial security. Learn about superannuation and saving for retirement to prepare for life after work.",
        topicsCovered: [
            "Superannuation",
            "Retirement savings"
        ],
        teachingModules: [
            {
                moduleNumber: 1,
                moduleTitle: "What is superannuation?",
                introductionParagraphs: [
                    "Superannuation is a way of saving for retirement, usually managed by a fund.",
                    "Employers often contribute automatically, and you can add extra if you like."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Employer contributions",
                        description: "Money your employer adds to your super fund on your behalf."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Super fund",
                        description: "A managed fund where your retirement savings are held and invested."
                    }
                ]
            },
            {
                moduleNumber: 2,
                moduleTitle: "Saving for retirement",
                introductionParagraphs: [
                    "Planning ahead ensures you have enough money when you stop working.",
                    "Start early to benefit from compound growth and make smaller contributions over time."
                ],
                cards: [
                    {
                        icon: InvestingIcon,
                        cardTitle: "Compound growth",
                        description: "Interest and investment growth that builds on itself over time."
                    },
                    {
                        icon: InvestingIcon,
                        cardTitle: "Retirement account",
                        description: "A designated account for saving and investing for your future."
                    }
                ]
            }
        ],
        quizQuestions: [
            {
                questionNumber: 1,
                question: "What is superannuation?",
                options: [
                    { optionNumber: 0, label: "A retirement savings fund" },
                    { optionNumber: 1, label: "A bank checking account" },
                    { optionNumber: 2, label: "A type of loan" },
                    { optionNumber: 3, label: "A government tax" }
                ],
                correctAnswers: [0]
            },
            {
                questionNumber: 2,
                question: "Who usually contributes to your super fund?",
                options: [
                    { optionNumber: 0, label: "You only" },
                    { optionNumber: 1, label: "Your employer" },
                    { optionNumber: 2, label: "Your friends" },
                    { optionNumber: 3, label: "The government (sometimes via tax incentives)" }
                ],
                correctAnswers: [1,3]
            },
            {
                questionNumber: 3,
                question: "Why start saving for retirement early?",
                options: [
                    { optionNumber: 0, label: "To take advantage of compound growth" },
                    { optionNumber: 1, label: "So you can contribute smaller amounts over time" },
                    { optionNumber: 2, label: "To avoid taxes completely" },
                    { optionNumber: 3, label: "To skip budgeting" }
                ],
                correctAnswers: [0,1]
            }
        ],
        badge: {
            label: "Badge for lesson 6",
            image: Badge1
        }
    }





]