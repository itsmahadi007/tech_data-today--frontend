import {defineStore} from 'pinia'

export interface ICounterState {
    count: number
}

export const useCounter = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    getters:{
        getCount:(state) => state.count,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        reset() {
            this.count = 0
        },
        increment2x() {
            this.count *= 2
        },
    },
})


// Path: store/counter.ts
export const EMSLoanListStore = defineStore('EMSLoanList', {
    state: ()  => ({
        loanList: [],
        showLoan: {}
    }),
    getters: {
        getLoanList: (state) => state.loanList,
        getShowLoan: (state) => state.showLoan
    },
    actions: {
        setLoanList(params:{loanList: any}) {
            this.loanList = params.loanList
        },
        setShowLoan(params:{showLoan: any}) {
            this.showLoan = params.showLoan
        }
    }
})
