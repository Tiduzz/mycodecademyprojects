// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// returns an object that contains the properties "specimenNum" and "dna"

const pAequorFactory = (number, arr) => {
  return ({
    specimenNum: number,
    dna: arr,
    // randomly selects a value in the dna array, exchanges it for another base of DNA
    mutate() {
      randomNumber = Math.floor(Math.random() * 15)
      noRepeat = this.dna[randomNumber]
      while (this.dna[randomNumber] === noRepeat) {
        this.dna[randomNumber] = returnRandBase()
      }
    },
    // creates a new pAequor object, and compares values with the original one. 
    // logs the percentage of likely of survival
    compareDNA(obj) {
      sameBase = []
      for (let i = 0; i < this.dna.length; i++) {
        if (obj.dna[i] === this.dna[i]) {
          sameBase.push(obj.dna[i])
        }
      }
      percent = (100/15)*sameBase.length
      console.log(`specimen #1 and specimen #2 have ${percent}% DNA in common`)
    },
    // checks all values of dna array, if it's 'C' or 'G', pushes it to a list, then generates a let variable
    // that gets percented, then if the variable has 60% plus, compared to the original array, of 'C' or 'G'
    // returns true, else, returns false
    willLikelySurvive() {
      surviveBases = []
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G')
          surviveBases.push(this.dna[i])
      }
      let percent = (100/15)*surviveBases.length
      if (percent >= 60) {
        return true
      } else {
        return false
      }
    }
  })
} 

// Creates an array instancesOfDNA, that will contain the objects created by pAequorFactory, then, pushes 30 times a random
// generated object to the array instancesOfDNA.
let instancesOfDNA = []
for (let i = 0; i < 30; i++) {
  instancesOfDNA.push(pAequorFactory(i, mockUpStrand()))
}