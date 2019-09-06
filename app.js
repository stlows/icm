var app = new Vue({
    el: "#app",
    data: {
        stackSizes: [],
        prizes: [],
        n: 1000,
        numberOfStackSizesToAdd: 10,
        numberOfPrizesToAdd: 5
    },
    methods: {
        addStackSize(){
            this.stackSizes.push({value:5000});
        },
        addPrize(){
            this.prizes.push({rankStart: this.prizes.length + 1, rankEnd:this.prizes.length + 1, value:1000});
        },
        addMultipleStackSizes(){
            for(var i = 0; i < this.numberOfStackSizesToAdd; i++){
                this.addStackSize()
            }
        },
        addMultiplePrizes(){
            for(var i = 0; i < this.numberOfPrizesToAdd; i++){
                this.addPrize()
            }
        }
    },
    created(){
        this.addMultipleStackSizes();
        this.addMultiplePrizes();
    }
})