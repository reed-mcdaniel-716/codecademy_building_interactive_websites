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

const globalDnaBases = ['A', 'T', 'C', 'G'];

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
      const randomSelection = Math.floor(Math.random() * 15);
      const originalBase = this.dna[randomSelection];
      let newBase = 'A';
      do {
        newBase = globalDnaBases[Math.floor(Math.random() * 4)];
      } while (newBase === originalBase);

      this.dna[randomSelection] = newBase;
    },
    compareDNA(newpAequor){
      let matches = [];
      for (let i = 0; i < 15; i++) {
        if(this.dna[i] === newpAequor.dna[i]){
          matches.push(dna[i]);
        }
      }
      const precentMatch = (matches.length / 15) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${newpAequor.specimenNum} have ${precentMatch}% DNA in common`);
    },
    willLikelySurvive(){
      let cs = [];
      let gs = [];
      for (let i = 0; i < 15; i++) {
        if(this.dna[i] === 'C'){
          cs.push(dna[i]);
        } else if(this.dna[i] === 'G'){
          gs.push(dna[i]);
        }
      }
      const precentCs = (cs.length / 15);
      const precentGs = (gs.length / 15);
      return (precentCs >= 0.6) || (precentGs >= 0.6);
    }
  };
};

const survivingSpecimen = [];

do{
  const newId = Math.floor(Math.random() * 100000);
  const newStrand = mockUpStrand();
  const newSpecimen = pAequorFactory(newId, newStrand);
  if(newSpecimen.willLikelySurvive()){
    survivingSpecimen.push(newSpecimen);
  }
} while(survivingSpecimen.length < 30)

console.log(survivingSpecimen.length);
console.log(survivingSpecimen);